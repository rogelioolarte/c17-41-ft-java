const DashboardPannel = () => {
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

export default DashboardPannel;
