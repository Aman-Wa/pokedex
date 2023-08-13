import React, { useEffect, useState } from 'react';
import '../Styling/SearchBar.css';


const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  // const handleFilterChange = (event) => {
  //   const filterType = event.target.name;
  //   const selectedValue = event.target.value;
  //   onFilters(filterType, selectedValue);
  // };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={handleSearchChange}
      />
     
    </div>
  );
};

export default SearchBar;

// const SearchBar = ({ onSearchAndFilters }) => {
//   const [searchInput, setSearchInput] = useState('');
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedAttack, setSelectedAttack] = useState('');
//   const [selectedExperience, setSelectedExperience] = useState('');

//   const handleSearchChange = event => {
//     setSearchInput(event.target.value);
//   };

//   const handleTypeFilterChange = event => {
//     setSelectedTypes(Array.from(event.target.selectedOptions, option => option.value));
//   };

//   const handleAttackFilterChange = event => {
//     setSelectedAttack(event.target.value);
//   };

//   const handleExperienceFilterChange = event => {
//     setSelectedExperience(event.target.value);
//   };

//   const handleSearchAndFilterApply = () => {
//     const filters = {
//       types: selectedTypes,
//       attack: selectedAttack,
//       experience: selectedExperience
//     };
//     onSearchAndFilters(searchInput, filters);
//   };

//   return (
//     <div className="search-filter">
//       <input
//         type="text"
//         placeholder="Search Pokémon"
//         value={searchInput}
//         onChange={handleSearchChange}
//       />
//       <div className="filter-options">
//         <label>Type:</label>
//         <select  onChange={handleTypeFilterChange}>
//         <option value="">Any</option>
//           <option value="electric">Electric</option>
//           <option value="fire">Fire</option>
//           {/* Add more type options as needed */}
//         </select>
//       </div>
//       <div className="filter-options">
//         <label>Attack:</label>
//         <select onChange={handleAttackFilterChange}>
//           <option value="">Any</option>
//           <option value="100">Below 100</option>
//           <option value="100-200">100 to 200</option>
//           <option value="200">Above 200</option>
//         </select>
//       </div>
//       <div className="filter-options">
//         <label>Experience:</label>
//         <select onChange={handleExperienceFilterChange}>
//           <option value="">Any</option>
//           <option value="100">Below 100</option>
//           <option value="100-200">100 to 200</option>
//           <option value="200">Above 200</option>
//         </select>
//       </div>
//       <button onClick={handleSearchAndFilterApply}>Apply Filters</button>
//     </div>
//   );
// };

