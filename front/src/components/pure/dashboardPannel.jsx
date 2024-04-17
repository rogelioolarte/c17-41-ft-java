import { Link } from "react-router-dom";
import "../../styles/styleDashboard.scss";

const DashboardPannel = () => {
  return (
    <div className="dashboard-pannel-init ">
      <Link to="/dashboard/offer" className="dashboard-button-init">
        <button
          type="button"
          className="btn btn-light  btn-outline-dark btn-lg "
        >
          Create an offer to buy crypto
        </button>
      </Link>
      <Link to="/dashboard/history" className="dashboard-button-init">
        <button type="button" className="btn btn-light btn-outline-dark btn-lg">
          Show history of transactions
        </button>
      </Link>
      <Link to="/dashboard/recharge" className="dashboard-button-init">
        <button type="button" className="btn btn-light btn-outline-dark btn-lg">
          Recharge your account in dollars
        </button>
      </Link>
    </div>
  );
};

DashboardPannel.propTypes = {};

export default DashboardPannel;
