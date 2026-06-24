import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Workforce from "../pages/Workforce";
import Skills from "../pages/Skills";
import Reports from "../pages/Reports";

import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/workforce" element={<Workforce />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/reports" element={<Reports />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AppRoutes;
