import headshot from '../JoelHiltonHeadshot.jpg';

function Podcast() {
  return (
    <>
      {/* Header */}
      <div className="row text-center">
        <div className="p-5 text-center bg-info">
          <h1 className="mb-3">Joel Hilton Movie Collection</h1>
          <h4 className="mb-3">Join into the Baconsale Podcast!</h4>
        </div>
      </div>
      <br />
      <br />
      {/* body */}
      <div className="row">
        <div className="col-2">
          <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light"></div>
            <div className="list-group list-group-flush">
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Dashboard
              </a>
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Shortcuts
              </a>
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Overview
              </a>
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Events
              </a>
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Profile
              </a>
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Status
              </a>
            </div>
          </div>
        </div>
        <div className="col-10 d-flex justify-content-center">
          <a href="https://baconsale.com">
            <h1>Check out the Baconsale Podcast</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Podcast;
