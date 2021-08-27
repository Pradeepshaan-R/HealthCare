import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled, { css } from "styled-components/macro";
import HeaderPic from "../images/1.jpg";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderWrapper>
        return (
        <HeaderSlide>
          <HeaderSlider>
            <HeaderImage src={HeaderPic} alt="Header-Pic" />
          </HeaderSlider>
        </HeaderSlide>
        );
      </HeaderWrapper>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.section`
  height: 100vh;
  position: absolute;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeaderSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeaderSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
