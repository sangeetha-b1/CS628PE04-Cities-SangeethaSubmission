import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Route as RoutedRoute, NavLink } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'Hyderabad', country: 'India', population: 34543543 },
    { id: 2, name: 'Delhi', country: 'India', population: 45454545 },
    { id: 3, name: 'Seattle', country: 'USA', population: 23232434 },
    { id: 4, name: 'Detroit', country: 'USA', population: 10232320},
    { id: 5, name: 'ABC', country: 'UK', population: 78676764 }
  ]);

  const handleAddCity = (newCity) => {
    setCities(prevCities => [...prevCities, newCity]);
  };

  return (
    <Router>
      <header>
        <h1>Cities Navigation Application</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">List of Cities</NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">Add City</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <RoutedRoute path="/" element={<CitiesList cities={cities} />} />
        <RoutedRoute path="/add" element={<AddCity onAddCity={handleAddCity} />} />
        <RoutedRoute path="/city/:id" element={<CityDetails cities={cities} />} />
      </Routes>
    </Router>
  );
}

export default App;