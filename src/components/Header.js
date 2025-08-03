import React from 'react';

const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
      <h1>Store</h1>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
