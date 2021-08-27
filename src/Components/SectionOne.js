import React from "react";
import styled from "styled-components";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import SectionOneImg from "../images/2.jpg";
import { Button } from "@material-ui/core";

const SectionOne = () => {
  return (
    <div>
      <SectionWrapper>
        <SectionContent>
          <SectionLeft>
            <SectionImg src={SectionOneImg} alt="SectionOneImg" />
          </SectionLeft>
          <SectionRight>
            <SectionRightContent>
              <SectionRightTopicOne>
                Your natural healthcare distributor
              </SectionRightTopicOne>
              <SectionRightTopicTwo>
                Get leading practioner and retail brands
              </SectionRightTopicTwo>
              <SectionPara>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                ipsam dolorum accusantium quo accusamus nesciunt quam, expedita
                nulla! Hic ratione fuga qui nesciunt illo quos impedit quas
                necessitatibus a vero?
              </SectionPara>
              <ButtonWrap>
                <Button
                  variant="outlined"
                  style={{
                    border: "2px solid green",
                    textTransform: "none",
                    marginRight: "20px",
                    borderRadius: "20px",
                    marginLeft: "10px",
                    fontFamily: "Poppins",
                    color: "green",
                  }}
                >
                  Our brands
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    border: "2px solid green",
                    textTransform: "none",
                    marginRight: "20px",
                    borderRadius: "20px",
                    marginLeft: "10px",
                    fontFamily: "Poppins",
                    color: "green",
                  }}
                >
                  Shop MyIntegria
                </Button>
              </ButtonWrap>
            </SectionRightContent>
          </SectionRight>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default SectionOne;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SectionRightTopicOne = styled.h5`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: Poppins;
`;

const SectionRightTopicTwo = styled.h5`
  font-size: 40px;
  margin-top: 10px;
  color: green;
  font-family: Poppins;
  font-weight: 300;
`;

const SectionWrapper = styled.div`
  padding: 20px;
  margin-top: 300px;
  height: 350px;
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  top: -200px;
`;

const SectionLeft = styled.div``;

const SectionImg = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
  outline: white;
  margin: 20px 0px auto 50px;
  border: 20px solid white;

  @media screen and (max-width: 468px) {
    margin: 10px;
    border: 2px solid white;
    padding: 0px;
  }
`;

const SectionPara = styled.p`
  padding: 10px;
  margin-right: 30px;
`;

const SectionRight = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SectionRightContent = styled.div`
  position: relative;
  top: 80px;
  text-align: left;
  margin-left: 100px;
  margin-right: 150px;
`;
