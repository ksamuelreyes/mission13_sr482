import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { title } from 'process';
function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/Movie');
      const temp = await rsp.json();
      const filteredData = temp
        .filter((Movie: { edited: string }) => Movie.edited === 'Yes')
        .sort((a: { title: string }, b: { title: string }) =>
          a.title.localeCompare(b.title),
        );

      setMovieData(filteredData);
    };

    fetchMovie();
  }, []);

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
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.category}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
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
