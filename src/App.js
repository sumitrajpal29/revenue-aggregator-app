import React, { useState, useEffect } from 'react';
import CalculateRevenue from './CalculateRevenue.js';
import './App.css';
import ProductTable from './components/ProductTable.js';
import Filter from './components/Filter.js';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(0);


  const fetchData = async () => {
    try {
      const branchFiles = ['branch1.json', 'branch2.json', 'branch3.json'];
      const combinedData = [];

      for (const file of branchFiles) {
        const response = await fetch(`data/${file}`);
        const branchData = await response.json();
        combinedData.push(branchData);
      }

      const revenueData = CalculateRevenue(combinedData);

      const filteredData = revenueData.filter(
        item => filter ? item.name.toLowerCase().includes(filter.toLowerCase()) : true
      );
      // if (searchClicked) {
      //   filteredData = revenueData.filter(item => filter ? item.name.toLowerCase() === filter.toLowerCase() : true);
      // }

      setData(filteredData);

      const total = filteredData.reduce((acc, item) => acc + item.revenue, 0);
      setTotalRevenue(total);
      // console.log(revenueData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter, searchClicked]);



  return (
    <div className="App">
      <h2>Revenue Aggregator App</h2>
      <br />
      <Filter setFilter={setFilter} setSearchClicked={setSearchClicked} />
      <ProductTable data={data} />
      <p>Total Revenue : {totalRevenue}</p>
    </div>
  );
}

export default App;
