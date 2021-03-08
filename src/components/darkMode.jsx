import React from 'react';
import { VFXImg } from 'react-vfx';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { RiMoonClearFill } from 'react-icons/ri'
import { ImSun } from 'react-icons/im'

const ToggleContainer = styled.button`

  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 4px;
  overflow: hidden;
  padding: 0.5rem;
  width: 8rem;
  height: 4rem;
  outline:none;
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
const isLight = theme === 'light';

  return (
    <div className="container-header">
      <VFXImg
        style={{ width: "200px", position: "absolute", top: "-75px", left: "10px" }}
        src={logo}
        shader="pixelateTransition"
      />
      <ToggleContainer onClick={toggleTheme} >
        {theme === 'light' ? <ImSun style={{
          height: "auto", width: "2rem", position: "relative",
          top: "3px",left: "6px",
          transition: "all 0.3s linear", transform: "${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'}"
        }} /> :
          <RiMoonClearFill style={{
            height: "auto", width: "2rem", position: "relative",
            left: "41px",
            top: "3px",
            transition: "all 0.3s linear", transform: "${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'}"
          }}
          />}
      </ToggleContainer>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;