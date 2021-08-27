import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import SpaOutlinedIcon from "@material-ui/icons/SpaOutlined";
import SectionOneImg from "../images/3.jpg";

function SectionTwo() {
  return (
    <SectionTwoWrapper>
      <ContentLeft>
        <SectionLeftContent>
          <SpaOutlinedIcon style={{ fontSize: "70px", color: "white" }} />
          <SectionRightTopicTwo>
            Responsible growing Sourcing goodness
          </SectionRightTopicTwo>
          <SectionPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam
            dolorum accusantium quo accusamus nesciunt quam, expedita nulla! Hic
            ratione fuga qui nesciunt illo quos impedit quas necessitatibus a
            vero?
          </SectionPara>
          <ButtonWrap>
            <Button
              variant="outlined"
              style={{
                border: "2px solid white",
                textTransform: "none",
                marginRight: "20px",
                borderRadius: "20px",
                marginLeft: "10px",
                fontFamily: "Poppins",
                color: "white",
              }}
            >
              Sourcing & sustanability
            </Button>
          </ButtonWrap>
        </SectionLeftContent>
      </ContentLeft>
      <ContentRight>
        <SectionImg src={SectionOneImg} alt="SectionOneImg" />
      </ContentRight>
    </SectionTwoWrapper>
  );
}

export default SectionTwo;

const SectionImg = styled.img`
  width: 800px;
  height: 400px;
  object-fit: cover;
  margin: 60px 0px auto 90px;

  @media screen and (max-width: 468px) {
    margin: 10px;
    padding: 0px;
  }
`;

const SectionTwoWrapper = styled.div`
  background-color: darkgreen;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const ContentLeft = styled.div`
  grid-column: 2/5;
`;

const SectionLeftContent = styled.div`
  position: relative;
  top: 80px;
  text-align: left;
`;

const ContentRight = styled.div`
  grid-column: 5/12;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SectionRightTopicTwo = styled.h5`
  font-size: 35px;
  margin-top: 10px;
  color: white;
  font-family: Poppins;
  font-weight: 300;
`;

const SectionPara = styled.p`
  color: white;
`;
