import React from "react";

export default function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange
}) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    
      < div className="filters" >
        
        <input
        type="text"
        placeholder="Search dish for your party..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search"
      />
      


      
      
      
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={activeCategory === cat ? "active" : ""}
          >
            {cat }
          </button>
        ))}
      </div>
      <label className="veg-toggle">
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={() => onVegOnlyChange(!vegOnly)}
        />
        Veg Only
      </label>
    </div>
  );
}
