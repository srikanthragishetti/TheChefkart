import React from 'react';


const VegNonVegFilter = ({ vegOnly, nonVegOnly, onVegToggle, onNonVegToggle }) => {
  return (
    <div className="veg-nonveg-toggle">
      <button
        className={`toggle-button ${vegOnly ? 'active' : ''}`}
        onClick={onVegToggle}
      >
        🟢
        
      </button>
      <button
        className={`toggle-button ${nonVegOnly ? 'active' : ''}`}
        onClick={onNonVegToggle}
      >
       🔴 
      </button>
    </div>
  );
};

export default VegNonVegFilter;