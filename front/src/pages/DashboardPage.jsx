import DashboardPannel from "../components/pure/dashboardPannel";
import DashboardSection from "../components/container/dashboardSection";
import useProtectedRoute from "../hooks/useProtectedRoute";
import "../styles/styleDashboard.scss";

function DashboardPage() {
  useProtectedRoute();
  return (
    <div className="dashboard-init">
      <DashboardPannel></DashboardPannel>
      <DashboardSection></DashboardSection>
    </div>
  );
}

export default DashboardPage;
