import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search(props) {
  const [search, setSearch] = useState('');
  const { foodSearch } = props;

const handleSearch = (e) => {
    setSearch(e.target.value)
    foodSearch(e.target.value)
}

  return (
    <div>
      <>
        <Divider>Search a Food</Divider>

        <Input value={search} type="text" onChange={handleSearch} />
      </>
    </div>
  );
}

export default Search;
