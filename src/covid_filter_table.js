/*  Custom Component for a Table with Checkbox Filters
 *
 *  Taylor Lawrence
 *  May 12, 2020
 */

import React from 'react';
import {ExtendedCheckbox as Checkbox} from './checkbox.js';
import * as Constants from './state_constants.js';
import JSONData from './data.json';

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
		let rawData = JSON.parse(JSON.stringify(JSONData));
		let initialData = [];
		
		// Upon reading a data entry for a state, calculate its score from the data given
		rawData.forEach(rawDatum => initialData.push(new StateDataPoint(rawDatum)));
		
		const filters = Constants.REGION_TEXT.map((region, index) => {
			return {
				name: region,
				id: index,
				checked: false
			};
		});
		
		this.state = {
			data: initialData,
			filteredData: initialData,
			isAllFilterChecked: true,
			filters
		};
	}
	
	onCheckboxCheck = id => {
		// Update state to reflect that the box has been checked
		this.setState(state => ({
			isAllFilterChecked: false,
			filters: state.filters.map(filter => {
				return {
					...filter,
					checked: (filter.id === id) ? !filter.checked : filter.checked
				};
			})
		}), () => {
			// Use the updated filters to filter the data
			let statesToShow = [];
			this.state.filters.forEach(region => {
				if (region.checked) {
					console.log(Constants.ALL_REGIONS);
					console.log(region);
					statesToShow = statesToShow.concat(Constants.ALL_REGIONS[region.name]);
				}
			});
			console.log(statesToShow);
			const filteredData = this.state.data.filter(state => statesToShow.includes(state.stateID));
			this.setState({filteredData});
		});
	};
	
	onAllFilterCheck = () => {
		if (this.state.isAllFilterChecked) {
			this.setState({
				isAllFilterChecked: false,
				filteredData: []
			});
		} else {
			const clearedFilters = this.state.filters.map(filter => {
				return {
					...filter,
					checked: false
				};
			});
			this.setState(state => ({
				filters: clearedFilters,
				isAllFilterChecked: true,
				filteredData: state.data
			}));
		}
	};
	
	render() {
		const tableStyle = {
			"border": "1px solid black",
			"width": "100%"
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
								<th>{state.score}</th>
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