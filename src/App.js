import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let initialState = [      //setting the initialstate of the items usestate array
  {
    "id": 1,
    "genre": '1',
    "song": 'Starway to Heaven',
    "name": "Led Zepellin"
  },
  {
    "id": 2,
    "genre": '1',
    "song": 'Nothing Else Matters',
    "name": "Metallica"
  },
];
function App() {
  const [bands, setBands] = useState(initialState)    //creating useState to be able to change the content inside of it by using 'setBands'

  function addBand(e) {        //method to add a new band
    e.preventDefault();       // preventing the page reload as a default behaviour of the button

    const band = {
      "id": document.getElementById('id').value,
      "genre": document.getElementById('genre').value,
      "song": document.getElementById('song').value,
      "name": document.getElementById('name').value,
    }

    setBands([...bands, { ...band }]); //setting the usestate copying the already existing items in 'bands' and addig a new band as a obj
  }

  function genreLabel(param) {
    switch (param) {
      case '1':
        return 'Rock';
      case '2':
        return 'Rap';
      case '3':
        return 'Indie';
      default:
        return 'undefined';
    }
  }
  function genreIcon(param) {
    switch (param) {
      case '1':
        return 'drum';
      case '2':
        return 'compact-disc';
      case '3':
        return 'guitar';
      default:
        return 'volume-xmark';
    }
  }
  
  return (      //JSX starting
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <span className="badge text-bg-dark">
            <label className="form-label">Id</label>
          </span>
          <input id='id' type="text" className="form-control mt-2" />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            <span className="badge text-bg-dark">
              Genre
            </span>
          </label>
          <select id="genre" className="form-select">
            <option defaultValue='0'>Select...</option>
            <option value="1">Rock</option>
            <option value="2">Rap</option>
            <option value="3">Indie</option>
          </select>
        </div>
        <div className="col-md-6">
          <span className="badge text-bg-dark">
            <label className="form-label">Name</label>
          </span>
          <input id='name' type="text" className="form-control mt-2" />
        </div>
        <div className="col-md-6">
          <span className="badge text-bg-dark">
            <label className="form-label">Favorite song</label>
          </span>
          <input id='song' type="text" className="form-control mt-2" />
        </div>
        <hr />
        <div className="col-12">
          <button
            className="btn btn-outline-secondary"
            onClick={addBand}
          >
            Add Band
          </button>
        </div>
      </form>
      <div className="mt-3">
        {bands.map(bnd => (
          <div key={bnd.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">{bnd.id}</span>
                  - {bnd.name}
                </h5>
                <h6>
                <span className="badge text-bg-warning">
                   Genre:
                </span>                 
                  <span className='ms-1 text-black'>
                    <i className={"me-1 fa-solid fa-"+ genreIcon(bnd.genre)}></i>
                    {genreLabel(bnd.genre)}
                  </span>
                </h6>
              </div>
              <p className="card-text">
                <span className="badge text-bg-info me-2">
                  Favorite Song:
                </span>
                {bnd.song}
              </p>
              <div className="d-flex justify-content-end pt-2 m-0">
                <button className="btn btn-outline-primary me-2">
                  <i className='fas fa-pen me-2'></i>
                  Edit
                </button>
                <button className="btn btn-outline-danger">
                  <i className='fas fa-trash me-2'></i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}

export default App;
