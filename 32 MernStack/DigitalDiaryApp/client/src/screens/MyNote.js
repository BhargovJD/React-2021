import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Edit from "./Edit";

function MyNote() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

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
        <div key={note.id} className="container ">
          <div className="row">
            <div className="col ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{note.title}</h5>
                  <p class="card-text">{note.content}</p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example d-flex justify-content-between"
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
