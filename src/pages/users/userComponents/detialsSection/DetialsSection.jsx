import React from "react";
import { Container, DetailsSectionStyle } from "./detialsSectionStyle";

const DetialsSection = () => {
  return (
    <DetailsSectionStyle>
      <Container>
        <h1 className="user-detials">User Details</h1>
        <div className="line"></div>
        <div className="id mgb">
          <h2 className="id">ID:</h2>
          <p>dfsd55</p>
        </div>
        <div className="detials ">
          <div className="name mgb">
            <h2 className="name">Name:</h2>
            <p>Jeevan jose</p>
          </div>
          <div className="email mgb">
            <h2 className="email">Email:</h2>
            <p>dsfgvsdf@gmail.co,</p>
          </div>
          <div className="role mgb">
            <h2 className="role">Role:</h2>
            <p>Admin</p>
          </div>
          <div className="phone mgb">
            <h2 className="phone">Phone:</h2>
            <p>9876543210</p>
          </div>
          <div className="address mgb">
            <h2 className="address">Address:</h2>
            <p>
              czdsfgdfg <br />
              sdgsdf <br /> 6855drgdrfdsg
            </p>
          </div>
          <div className="orders mgb">
            <h2 className="orders">Orders:</h2>
            <p>18</p>
          </div>
          <div className="created-at mgb">
            <h2 className="created-at">Created At:</h2>
            <p>2020-05-05</p>
          </div>
          <div className="more-detials">
            <button>More detials</button>
          </div>
        </div>
      </Container>
    </DetailsSectionStyle>
  );
};

export default DetialsSection;
