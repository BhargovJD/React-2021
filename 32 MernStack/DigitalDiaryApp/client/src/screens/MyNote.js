import React, { useEffect } from "react";
import notes from "../data/notes";
import { Link } from "react-router-dom";
import axios from "axios";

function MyNote() {

    const fetchNotes = async()=>{
        const data = await axios.get('api/diary-notes/')
        console.log(data)
    }
  useEffect(() => {
    fetchNotes()
});
  return (
    <div>
      <div className="container">
        <h1>Welcome Back Bhargov</h1>
        <hr></hr>

        <button type="button" class="btn btn-success">
          Create new diary note
        </button>
        <hr></hr>
      </div>

      {notes.map((note) => (
        <div className="container ">
          <div className="row">
            <div className="col ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{note.title}</h5>
                  <p class="card-text">{note.content}</p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <Link to={`/diary-notes/${101}`}>
                      <button type="button" class="btn btn-warning">
                        Edit
                      </button>
                    </Link>

                    <Link to="">
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyNote;
