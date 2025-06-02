
import { useEffect, useState } from 'react';
import Switch from 'react-switch';
// import React, { useState, useEffect } from "react";

const DarkLightMode = () => {

    // const [isDarkMode, setIsDarkMode] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
    // On component mount, check if the user already has a preferred theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = !isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };


  return (
    <div className="flex items-center">
      {/* <span className="mr-2">{isDarkMode ? '☀️' : '🌙'}</span> */}
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        onColor="#fff"
        offColor="#40495B" 
        onHandleColor="#54bee1"
        offHandleColor="#000"
        handleDiameter={18}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={22}
        width={40}
        className="react-switch"
      />
    </div>
  );
};

export default DarkLightMode