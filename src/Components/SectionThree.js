import React from "react";
import styled from "styled-components";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";
import SectionOneImg from "../images/5.png";
import LocalFloristOutlinedIcon from "@material-ui/icons/LocalFloristOutlined";

function SectionThree() {
  return (
    <SectionWrapper>
      <Topic>
        <LocalFloristOutlinedIcon
          style={{
            color: "darkgreen",
            fontSize: "70px",
            textAlign: "center",
            align: "center",
            margin: "20px",
          }}
        />
        <br />
        Commited to natural healthcare
      </Topic>
      <Content>
        <ContentItemOne>
          <Logo src={SectionOneImg} alt="LOGO" />
          <ContentPara>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus veniam ipsum, at aliquam architecto officiis! Architecto
            quod et consectetur sed.
          </ContentPara>
          <Link href="#">
            Visit Site <OpenInNewOutlinedIcon />
          </Link>
        </ContentItemOne>
        <ContentItemTwo>
          <Logo src={SectionOneImg} alt="LOGO" />
          <ContentPara>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus veniam ipsum, at aliquam architecto officiis! Architecto
            quod et consectetur sed.
          </ContentPara>
          <Link href="#">
            Visit Site <OpenInNewOutlinedIcon />
          </Link>
        </ContentItemTwo>
        <ContentItemThree>
          <Logo src={SectionOneImg} alt="LOGO" />
          <ContentPara>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus veniam ipsum, at aliquam architecto officiis! Architecto
            quod et consectetur sed.
          </ContentPara>
          <Link href="#">
            Visit Site <OpenInNewOutlinedIcon />
          </Link>
        </ContentItemThree>
        <ContentItemFour>
          <Logo src={SectionOneImg} alt="LOGO" />
          <ContentPara>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus veniam ipsum, at aliquam architecto officiis! Architecto
            quod et consectetur sed.
          </ContentPara>
          <Link href="#">
            Visit Site <OpenInNewOutlinedIcon />
          </Link>
        </ContentItemFour>
        <ContentItemFive>
          <Logo src={SectionOneImg} alt="LOGO" />
          <ContentPara>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus veniam ipsum, at aliquam architecto officiis! Architecto
            quod et consectetur sed.
          </ContentPara>
          <Link href="#">
            Visit Site <OpenInNewOutlinedIcon />
          </Link>
        </ContentItemFive>
      </Content>
    </SectionWrapper>
  );
}

export default SectionThree;

const Logo = styled.img`
  height: 100px;
`;

const ContentPara = styled.p`
  margin-bottom: 30px;
`;

const Link = styled.a`
  color: black;
`;

const SectionWrapper = styled.div`
  height: 600px;
  background: lightblue;
  padding-top: 40px;
`;

const Topic = styled.h1`
  text-align: center;
  font-family: Poppins;
  font-weight: 300;
  color: darkgreen;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-top: 40px;
`;

const ContentItemOne = styled.div`
  grid-column: 2/4;
  padding: 20px;
`;

const ContentItemTwo = styled.div`
  grid-column: 4/6;
  padding: 20px;
`;
const ContentItemThree = styled.div`
  grid-column: 6/8;
  padding: 20px;
`;

const ContentItemFour = styled.div`
  grid-column: 8/10;
  padding: 20px;
`;

const ContentItemFive = styled.div`
  grid-column: 10/12;
  padding: 20px;
`;
