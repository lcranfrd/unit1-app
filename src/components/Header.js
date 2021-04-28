import React from 'react';

const Header = ({getNewQuote}) => {
  return (
    <header>
      <h1>Random Quotes</h1>
      <button className="load-quote" onClick={() => getNewQuote()}>Show another quote</button>
    </header>
  );
}

export default Header;