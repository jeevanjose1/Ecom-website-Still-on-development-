import React, { useState } from "react";
import {
  Header,
  Logo,
  MainContainer,
  Nav,
  SidebarContainer,
  Submenu,
  Container,
} from "./sidebarStyles";
import logo from "../../assets/images/logo.png";
import { Menu } from "@mui/icons-material";
import Options from "./sidebarComponents/Options";
import {
  ProductionQuantityLimits,
  DashboardCustomize,
  ShoppingBasket,
  AddBox,
  MonetizationOn,
  Comment,
  SupervisedUserCircle,
  Settings,
} from "@mui/icons-material";
import { connect, useDispatch } from "react-redux";
import { Active } from "../../actions/utilAction";
import { useEffect } from "react";
import DashboardMenu from "./sidebarComponents/DashboardMenu";

const Sidebar = (props) => {
  const [slideLeft, setSlideLeft] = useState(true);
  const dispatch = useDispatch();
  const media = window.matchMedia("(max-width: 640px)").matches;

  //event listener
  const handleClick = () => {
    if (!media) {
      setSlideLeft(!slideLeft);
    } else if (media) {
      dispatch(Active());
    }
  };

  useEffect(() => {
    if (media) {
      setSlideLeft(true);
    } else {
      setSlideLeft(false);
    }
  }, [media]);

  return (
    <SidebarContainer
      isactive={props?.isActive}
      style={props?.isActive ? { left: "0" } : { left: "-26rem" }}
      slideLeft={slideLeft}
    >
      <MainContainer>
        <Header slideLeft={slideLeft}>
          <Logo
            style={
              !slideLeft
                ? { visibility: "hidden", display: "none" }
                : { display: "block" }
            }
          >
            <img className="logo" src={logo} alt="" />
          </Logo>
          <Nav>
            <div onClick={handleClick} className="ham-menu">
              <Menu fontSize="large" sx={{ color: "white" }} />
            </div>
          </Nav>
        </Header>

        <Submenu>
          <Container>
            <DashboardMenu
              slideLeft={slideLeft}
              Logo={DashboardCustomize}
              title="Dashboard"
              link="/dashboard"
            />
            <Options
              title="Product"
              Logo={ProductionQuantityLimits}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Product-list",
                  link: "/product-list",
                },
                {
                  name: "Catogeries",
                  link: "/catogeries",
                },
              ]}
            />
            <Options
              title="Orders"
              Logo={ShoppingBasket}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Orders",
                  link: "/orders",
                },
              ]}
            />
            <Options
              title="Add product"
              Logo={AddBox}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Add product",
                  link: "/add-product",
                },
              ]}
            />
            <Options
              title="Transaction"
              Logo={MonetizationOn}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Transaction",
                  link: "/transaction",
                },
              ]}
            />
            <Options
              title="Users"
              Logo={SupervisedUserCircle}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Users",
                  link: "/users",
                },
              ]}
            />
            <Options
              title="Reviews"
              Logo={Comment}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Reviews",
                  link: "/reviews",
                },
              ]}
            />
            <Options
              title="Setting"
              Logo={Settings}
              slideLeft={slideLeft}
              options={[
                {
                  name: "Setting",
                  link: "/setting",
                },
              ]}
            />
          </Container>
        </Submenu>
      </MainContainer>
    </SidebarContainer>
  );
};

export const mapStateToProps = (state) => {
  return {
    isActive: state.Util,
  };
};
export default connect(mapStateToProps)(Sidebar);
