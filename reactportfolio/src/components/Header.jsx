import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    
    <Nav variant="tabs" className="position-absolute top-0 start-0" defaultActiveKey="/home">
      <Nav.Item >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active ps-md-4 pe-md-4" : "nav-link ps-md-4 pe-md-4"
          }
        >
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/projects"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active ps-md-4 pe-md-4" : "nav-link ps-md-4 pe-md-4"
          }
          
        >
          Projects
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active ps-md-4 pe-md-4" : "nav-link ps-md-4 pe-md-4"
          }
        >
          Contact
        </NavLink>
      </Nav.Item>
    </Nav>
  
  );
}

export default Header;
