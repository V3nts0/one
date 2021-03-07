import React, { useContext, useState, useEffect } from 'react';
import { VFXImg } from 'react-vfx';
import logo from '../images/logo.png';

const DarkMode = () => {
  let clickedClass = "clicked";

   const body = typeof window !== 'undefined' && window.document.body
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  
  if (typeof window !== 'undefined' ) {
    theme = localStorage.getItem("theme");
  }

  if ( window !== 'undefined' && theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  
  const switchTheme = (e) => {
    if (window !== 'undefined' && theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;

    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <div className="container-header">
      <VFXImg
        style={{ width: "200px", position: "absolute", top: "-75px", left: "10px" }}
        src={logo}
        shader="pixelateTransition"
      />
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      ></button>
    </div>
  );
};

export default DarkMode;