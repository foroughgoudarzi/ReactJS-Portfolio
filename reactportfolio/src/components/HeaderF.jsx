import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function HeaderF({status, obj}) {
   

  return (
    
    <Nav variant="tabs" className="position-absolute top-0 start-0" defaultActiveKey={status}>
      
      {obj.map((element) => (
        <Nav.Item key={element.id}>
        <NavLink
          to={element.to}
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {element.title}
        </NavLink>
      </Nav.Item>
      ))}
      
      
      
      
    </Nav>
  
  );
}

export default HeaderF;
