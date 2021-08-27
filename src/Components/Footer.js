import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <ContentItemOne>
          <ContentPara>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus veniam ipsum, at aliquam architecto officiis! Architecto
            quod et consectetur sed. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus veniam ipsum, at aliquam architecto
            officiis! Architecto quod et consectetur sed.
          </ContentPara>
        </ContentItemOne>
        <ContentItemTwo>
          <Topic>About</Topic>
          <Link>History</Link>
          <Link>Science</Link>
          <Link>Team</Link>
          <Link>Inactivities</Link>
          <Link>Career opportunities</Link>
        </ContentItemTwo>
        <ContentItemThree>
          <Topic>Our brands</Topic>
          <Link>Owned</Link>
          <Link>Independent</Link>
        </ContentItemThree>
        <ContentItemFour>
          <Topic>our partners</Topic>
          <Link>Practioner</Link>
          <Link>Retailer</Link>
          <Link>Distributor</Link>
          <Link>Consumer</Link>
        </ContentItemFour>
        <ContentItemFive>
          <Topic>customer care</Topic>
          <Link>Ordering information</Link>
          <Link>Frequently asked questions</Link>
          <Link>Contact Us</Link>
        </ContentItemFive>
      </Content>
    </Wrapper>
  );
}

export default Footer;

const Link = styled.h5`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  height: 400px;
  background: darkgreen;
  color: white;
`;

const Topic = styled.h2`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const ContentPara = styled.p`
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  padding-top: 40px;
  text-align: left;
`;

const ContentItemOne = styled.div`
  grid-column: 2/5;
`;

const ContentItemTwo = styled.div`
  grid-column: 6/8;
`;
const ContentItemThree = styled.div`
  grid-column: 8/9;
`;

const ContentItemFour = styled.div`
  grid-column: 9/10;
  margin-left: 20px;
`;

const ContentItemFive = styled.div`
  grid-column: 10/12;
  margin-left: 30px;
`;
