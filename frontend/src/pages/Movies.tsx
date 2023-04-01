import MovieData from '../MovieData.json';

const MData = MovieData.MovieData;

function MovieList() {
  return (
    <>
      {/* Header */}
      <div className="row text-center">
        <div className="p-5 text-center bg-info">
          <h1 className="mb-3">Joel Hilton Movie Collection</h1>
          <h4 className="mb-3">Here's what you've been looking for! Movies!</h4>
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
          <table className="table thead-dark table-striped table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Category</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {MData.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Category}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default MovieList;
