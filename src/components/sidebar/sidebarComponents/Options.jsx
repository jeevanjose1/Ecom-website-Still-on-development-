import React, { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Arrow,
  Containers,
  Logos,
  Main,
  OptionsStyles,
  SubOptions,
  SubOptionsHover,
  Title,
} from "./optionsStyle.js";
import SubMenu from "./helperComponents";

const Options = ({ Logo, options, title, slideLeft, dashboard }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!slideLeft) {
      setOpen(false);
    }
  }, [slideLeft]);

  //event listeners

  const handleClick = () => {
    setOpen(!open);
  };
  const handleHover = () => {
    if (!slideLeft) setHover(true);
  };
  const handleLeave = () => {
    if (!slideLeft) setHover(false);
  };

  return (
    <OptionsStyles
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      props={open}
      height={40 * options.length + 49}
    >
      <Main
        slideLeft={slideLeft}
        props={open}
        height={40 * options.length + 46}
      >
        <Containers style={active === 1 ? { backgroundColor: "red" } : null}>
          <Logos
            style={
              slideLeft
                ? { marginRight: "1rem" }
                : { marginRight: "0", marginLeft: 0, width: "100%" }
            }
          >
            {<Logo sx={{ fontSize: 20 }} />}
          </Logos>
          {slideLeft && (
            <>
              <Title>
                <h2>{title}</h2>
              </Title>

              <Arrow open={open} onClick={handleClick}>
                <ArrowDownwardIcon fontSize="medium" />
              </Arrow>
            </>
          )}
        </Containers>
        {slideLeft && (
          <SubOptions props={open}>
            {options?.map((option, i) => {
              return (
                <SubMenu
                  active={active}
                  setActive={setActive}
                  key={i}
                  index={i}
                  option={option}
                />
              );
            })}
          </SubOptions>
        )}

        {!slideLeft && (
          <SubOptionsHover
            style={
              hover
                ? {
                    visibility: "visible",
                    height: `${40 * options.length}px`,
                  }
                : { visibility: "hidden" }
            }
          >
            {options?.map((option, i) => {
              return (
                <SubMenu
                  active={active}
                  setActive={setActive}
                  key={i}
                  option={option}
                />
              );
            })}
          </SubOptionsHover>
        )}
      </Main>
    </OptionsStyles>
  );
};

export default Options;
