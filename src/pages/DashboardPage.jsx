import DashboardPannel from "../components/pure/dashboardPannel";
import DashboardSection from "../components/pure/dashboardSection";
import "../styles/styleDashboard.scss";

function DashboardPage() {
  return (
    <div className="dashboard-init">
      <DashboardPannel></DashboardPannel>
      <DashboardSection></DashboardSection>
    </div>
  );
}

export default DashboardPage;
