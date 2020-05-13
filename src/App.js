/*  COVID-19 Visualization Entry Point
 *
 *  Taylor Lawrence
 *  May 12, 2020
 */

import React from 'react';
import FilterTable from './covid_filter_table.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>How Hard Has Each State Been Hit By COVID-19?</p>
      </header>
	  <p>Data as of 05/12/2020</p>
	  <FilterTable />
	  <p>Data Sources: census.gov, CDC.gov, worldometers.info, United Nations via Wikipedia</p>
    </div>
  );
}

export default App;
