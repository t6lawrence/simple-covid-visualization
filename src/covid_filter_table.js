/*  Custom Component for a Table with Checkbox Filters
 *
 *  Taylor Lawrence
 *  May 12, 2020
 */

import React from 'react';
import {ExtendedCheckbox as Checkbox} from './checkbox.js';
import {REGION_TEXT, ALL_REGIONS} from './state_constants.js';
import JSONData from './data.json';

// This class allows each data point to calculate an impact score as soon as it is loaded
class StateDataPoint extends Object {
	constructor(baseObject) {
		super();
		this.stateName = baseObject.state ?? "N/A";
		this.stateID = baseObject.id ?? 59;
		this.population = baseObject.population ?? 1;
		this.populationDensity = baseObject.density ?? 1;
		this.totalCases = baseObject.cases ?? 0;
		this.totalActiveCases = baseObject.active ?? 0;
		this.setScore(baseObject);
	}
	
	setScore = base => {
		// The formula for the score is trivial
		this.score = Math.sqrt(
			(base.cases * (base.active ** 2) * base.density) / (base.population ** 2)
		).toPrecision(5);
	}
}

class FilterTable extends React.Component {
	constructor(props) {
		super(props);
		
		// Load Initial data from JSON
		const rawData = JSON.parse(JSON.stringify(JSONData));
		const initialData = [];
		const dropdownOptions = [];
		
		// Upon reading a data entry for a state, calculate its score from the data given
		rawData.forEach(rawDatum => {
			initialData.push(new StateDataPoint(rawDatum));
			dropdownOptions.push({ name: rawDatum.state });
		});
		
		// Initialize the region filters from the constants file
		const filters = REGION_TEXT.map((region, index) => {
			return {
				name: region,
				id: index,
				checked: false,
			};
		});
		
		this.state = {
			dropdownOptions,
			filters,
			data: initialData,
			filteredData: initialData,
			isAllFilterChecked: true,
		};
	}
	
	onStateSelect = event => {
		// Determine which states have been selected
		const options = event.target.options;
		const filteredData = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				filteredData.push(this.state.data[i]);
			}
		}

		// Clear all the regional filters
		const clearedFilters = this.state.filters.map(filter => {
			return {
				...filter,
				checked: false,
			};
		});

		this.setState({
			filteredData,
			filters: clearedFilters,
			isAllFilterChecked: false
		});
	}

	onCheckboxCheck = id => {
		// Update state to reflect that the box has been checked
		this.setState(state => ({
			isAllFilterChecked: false,
			filters: state.filters.map(filter => {
				return {
					...filter,
					checked: (filter.id === id) ? !filter.checked : filter.checked,
				};
			})
		}), () => {
			// Use the updated filters to filter the data
			let statesToShow = [];
			this.state.filters.forEach(region => {
				if (region.checked) {
					statesToShow = statesToShow.concat(ALL_REGIONS[region.name]);
				}
			});
			const filteredData = this.state.data.filter(state => statesToShow.includes(state.stateID));
			this.setState({ filteredData });
		});
	}
	
	onAllFilterCheck = () => {
		// Unchecking the All States checkbox shows you a blank table
		if (this.state.isAllFilterChecked) {
			this.setState({
				isAllFilterChecked: false,
				filteredData: [],
			});
		} else {
			// If you check All States, deselect all regions and show the whole dataset
			const clearedFilters = this.state.filters.map(filter => {
				return {
					...filter,
					checked: false,
				};
			});
			this.setState(state => ({
				filters: clearedFilters,
				isAllFilterChecked: true,
				filteredData: state.data,
			}));
		}
	}
	
	render() {
		const tableStyle = {
			"border": "1px solid black",
			"width": "100%",
		}
		
		return (
			<React.Fragment>
				{this.state.filters.map(checkbox => 
					<span>
						<Checkbox
							label={checkbox.name}
							checked={checkbox.checked}
							onChange={() => this.onCheckboxCheck(checkbox.id)}
						/>
						&nbsp; &nbsp; &nbsp;
					</span>
				)}
				<Checkbox
					label="All States"
					checked={this.state.isAllFilterChecked}
					onChange={this.onAllFilterCheck}
				/>
				<br />
				<label>Or Select by Individual State (hold ctrl to select multiple)</label>
				<br />
				<select
					onChange={this.onStateSelect}
					id="states"
					multiple
				>
					{this.state.dropdownOptions.map(state => {
						return (
							<option value={state.name}>{state.name}</option>
						)
					})}
				</select>
				<table style={tableStyle}>
					<tr>
						<th>State</th>
						<th>Impact Score</th>
						<th>Population</th>
						<th>Pop. Density (/sq Mi)</th>
						<th>Total Cases</th>
						<th>Total Active Cases</th>
					</tr>
					{this.state.filteredData.map(state => {
						return (
							<tr>
								<th>{state.stateName}</th>
								<th style={{"color":"red"}}>{state.score}</th>
								<th>{state.population}</th>
								<th>{state.populationDensity}</th>
								<th>{state.totalCases}</th>
								<th>{state.totalActiveCases}</th>
							</tr>
						)
					})}
				</table>
			</React.Fragment>
		);
    }
}

export default FilterTable;