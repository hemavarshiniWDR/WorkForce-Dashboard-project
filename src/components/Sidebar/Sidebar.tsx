import { NavLink } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {

  const handleMenuClick = () => {
    setIsOpen(false);
  };
  
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setIsOpen(false)}>
        ✕
      </button>

      <h2 className="logo">WORKFORCE ANALYTICS</h2>

      <nav>
        <NavLink to="/" end onClick={handleMenuClick}>
          Dashboard
        </NavLink>

        <NavLink to="/workforce" onClick={handleMenuClick}>
          Workforce
        </NavLink>

        <NavLink to="/skills" onClick={handleMenuClick}>
          Skills
        </NavLink>

        <NavLink to="/reports" onClick={handleMenuClick}>
          Reports
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
