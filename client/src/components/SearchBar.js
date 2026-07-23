import { useState } from "react";

function SearchBar({ onSearch }) {

  const [search, setSearch] = useState("");


  const handleChange = (e) => {

    const value = e.target.value;

    setSearch(value);


    if (onSearch) {
      onSearch(value);
    }

  };


  return (

    <div
      style={{
        textAlign: "center",
        margin: "30px 0"
      }}
    >

      <input
        type="text"
        placeholder="Search Food, Snacks, Juices, Desserts..."
        value={search}
        onChange={handleChange}
        style={{
          width:"60%",
          padding:"15px",
          borderRadius:"25px",
          border:"1px solid #ccc",
          fontSize:"16px",
          outline:"none"
        }}
      />

    </div>

  );

}


export default SearchBar;