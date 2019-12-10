import React, { useState } from "react";

function handleSearch(e, data, filterList) {
  const input = e.target.value;
  const filteredInput = data.filter(word => word.includes(input));
  filterList(filteredInput);
}

export default function Search({ data }) {
  const [list, filterList] = useState(data);
  return (
    <div>
      <input type="text" onChange={e => handleSearch(e, list, filterList)} />
    </div>
  );
}
