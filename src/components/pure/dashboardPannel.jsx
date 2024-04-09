import { Link } from 'react-router-dom';
import '../../styles/styleDashboard.scss'

const DashboardPannel = () => {
<<<<<<< HEAD
  return (
    <div className="card">
      <div className="card-header">
        <h3>Create an offer</h3>
      </div>
      <div className="card-body">
        <h5>Select your cryptocurrency</h5>
        <ul>
          <li>Bitcoin</li>
          <li>Tether</li>
          <li>Ethereum</li>
          <li>USD Coin</li>
        </ul>
        <div>
          <p>Select the amount to offer in dollars</p>
          <div>
            <label htmlFor="offer">USD</label>
            <input type="number" name="offer" id="offer"></input>
            <button>
              <i className="fas fa-chevron-left" />
            </button>
            <button>
              <i className="fas fa-chevron-right" />
            </button>
            <p>conversion result</p>
            <label>crypto name</label>
          </div>
        </div>
        <button>Make your offer</button>
      </div>
    </div>
  );
};

DashboardPannel.propTypes = {};

=======
    return (
        <div className='dashboard-pannel-init ' >
            <Link to="/dashboard/offer" className='dashboard-button-init' >
                <button type="button" 
                    className="btn btn-light  btn-outline-dark btn-lg ">
                Create an offer to buy or sell</button>
            </Link>
            <Link to="/dashboard/history" className='dashboard-button-init' >
                <button type="button" 
                    className="btn btn-light btn-outline-dark btn-lg">
                Show history of transactions</button>
            </Link>
        </div>
    );
};

DashboardPannel.propTypes = {

};

>>>>>>> afa01279d093db74dc720ea6e66e0413566418cb
export default DashboardPannel;
