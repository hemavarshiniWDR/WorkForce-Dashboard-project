import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./DashboardLayout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout">
      {!isOpen && (
        <button className="menu-btn" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="main-content">{children}</main>
    </div>
  );
};

export default DashboardLayout;