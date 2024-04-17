import DashboardPannel from "../components/pure/dashboardPannel";
import DashboardSection from "../components/container/dashboardSection";
import useProtectedRoute from "../hooks/useProtectedRoute";
import "../styles/styleDashboard.scss";
import NavBarB from "../components/container/NavBarB";

function DashboardPage() {
  useProtectedRoute();

  return (
    <div>
      <NavBarB/>
      <div className="dashboard-init">
        <DashboardPannel></DashboardPannel>
        <DashboardSection></DashboardSection>
      </div>
    </div>
    
  );
}

export default DashboardPage;
