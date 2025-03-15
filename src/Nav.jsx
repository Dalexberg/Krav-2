import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  const [activeTab, setActiveTab] = useState('html'); // Start med HTML-fanen aktiv

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/html" className={`tab ${activeTab === 'html' ? 'active' : ''}`} onClick={() => handleTabClick('html')}>HTML</Link>
        </li>
        <li>
          <Link to="/css" className={`tab ${activeTab === 'css' ? 'active' : ''}`} onClick={() => handleTabClick('css')}>CSS</Link>
        </li>
        <li>
          <Link to="/javascript" className={`tab ${activeTab === 'javascript' ? 'active' : ''}`} onClick={() => handleTabClick('javascript')}>JavaScript</Link>
        </li>
        <li>
          <Link to="/react" className={`tab ${activeTab === 'react' ? 'active' : ''}`} onClick={() => handleTabClick('react')}>React</Link>
        </li>
        <li>
          <Link to="/headless-cms" className={`tab ${activeTab === 'headless-cms' ? 'active' : ''}`} onClick={() => handleTabClick('headless-cms')}>Sanity and Headless CMS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
