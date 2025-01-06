import React from 'react';
import '../Styles/Home.css';
export default function Home() {
  return (
    <div>
      <header>
        <h1>Fix it Now
          <p>Your satisfaction is our priority</p></h1>
        
        <input type="text"className='search-bar' placeholder="Search for services..." />
      </header>
    </div>
  );
}