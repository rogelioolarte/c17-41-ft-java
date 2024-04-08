import DashboardPannel from "../components/pure/DashboardPannel"
import DashboardSection from "../components/pure/DashboardSection"
import '../styles/stylesDashboard.scss'

function DashboardPage() {
  return (
    <div className="dashboard-init" >
      <DashboardPannel></DashboardPannel>
      <DashboardSection></DashboardSection>
    </div>
  )
}

export default DashboardPage