import { Link } from "react-router-dom";
import { Container, DashboardStyle, LogosDash } from "./optionsStyle";

const DashboardMenu = ({ active, slideLeft, Logo, title, link }) => {
  return (
    <DashboardStyle>
      <Container style={active === 1 ? { backgroundColor: "red" } : null}>
        <LogosDash
          style={slideLeft ? { marginRight: "1rem" } : { marginRight: "0" }}
        >
          <Link to={link} className="link">
            {<Logo sx={{ fontSize: 20 }} />}
          </Link>
        </LogosDash>
        {slideLeft && (
          <Link to={link} className="link">
            {title}
          </Link>
        )}
      </Container>
    </DashboardStyle>
  );
};
export default DashboardMenu;
