import React from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

const Dragslider = ({ thumbs }) => {
  //   const [pressed, setPressed] = useState(false);
  //   const [positionleft, setPositionleft] = useState();
  //   const [start, setStart] = useState();
  //   const [x, setX] = useState();
  //   const [walk, setWalk] = useState();
  //   const refs = useRef(null);
  //   console.log(positionleft);
  return (
    <Main>
      <ScrollContainer horizontal={true} className="scroll-container">
        {thumbs}
      </ScrollContainer>
      {/* <div
        onMouseDown={(e) => {
          e.preventDefault();
          setPressed(true);
          setStart(e.pageX - refs.current.offsetLeft);
          setPositionleft(refs.current.scrollLeft);
        }}
        onMouseUp={() => {
          setPressed(false);
        }}
        onMouseLeave={() => {
          setPressed(false);
        }}
        onMouseMove={(e) => {
          console.log(e);
          e.preventDefault();
          if (!pressed) return;
          setX(e.pageX - refs.current.offsetLeft);
          setWalk(start - x);
          refs.current.scrollLeft = positionleft - walk;
        }}
        className="scroll-container"
        style={{ transform: `translatex(${positionleft - walk}px)` }}
        ref={refs}
      >
        {thumbs}
      </div> */}
    </Main>
  );
};
const Main = styled.div`
  width: 50%;
  @media screen and (max-width: 970px) {
    width: 100%;
  }
  .scroll-container {
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    .thumbs {
      pointer-events: none;
      &:not(:last-child) {
        margin-right: 2rem;
      }
      .wrapper {
        pointer-events: none;
        img {
          width: 15rem;
          height: 15rem;
        }
      }
    }
  }
`;

export default Dragslider;
