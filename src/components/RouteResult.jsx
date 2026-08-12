function RouteResult() {
  return (
    <div className="result-box">

      <div className="card shadow-sm border-0">

        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            Route Details
          </h4>
        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6">

              <h6>From</h6>
              <h5 id="fromResult">-</h5>

            </div>

            <div className="col-md-6">

              <h6>Destination</h6>
              <h5 id="toResult">-</h5>

            </div>

          </div>

          <hr />

          <div className="row text-center">

            <div className="col">

              <h6>Junctions</h6>
              <h5 id="junctionResult">0</h5>

            </div>

            <div className="col">

              <h6>Time</h6>
              <h5 id="timeResult">--</h5>

            </div>

            <div className="col">

              <h6>Status</h6>
              <h5 id="statusResult">Ready</h5>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RouteResult;