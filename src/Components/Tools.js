import React from "react";
import styled from "styled-components";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";

function Tools() {
  return (
    <ToolSection>
      <Card>
        <CardItem>
          <LocalShippingOutlinedIcon
            style={{ margin: "10px", fontSize: "70px" }}
          />
          Same day dispatch
        </CardItem>
        <CardItem>
          <MenuBookOutlinedIcon style={{ margin: "10px", fontSize: "70px" }} />
          Experienced Practioners
        </CardItem>
        <CardItem>
          <FavoriteBorderOutlinedIcon
            style={{ margin: "10px", fontSize: "70px" }}
          />
          My Patient Ordering
        </CardItem>
        <CardItem>
          <WbIncandescentOutlinedIcon
            style={{ margin: "10px", fontSize: "70px" }}
          />
          Over 70 Brands
        </CardItem>
      </Card>
    </ToolSection>
  );
}

export default Tools;

const ToolSection = styled.div`
  border-radius: 6px;
  background-color: pink;
  height: 150px;
  position: absolute;
  top: 90%;
  left: 10%;
  z-index: 99;
  width: 1200px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardItem = styled.div`
  padding: 25px;
  font-family: Poppins;
  /* margin: 20px; */
`;
