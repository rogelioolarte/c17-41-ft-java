import DashboardPannel from "../components/pure/dashboardPannel";
import DashboardSection from "../components/container/dashboardSection";
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
