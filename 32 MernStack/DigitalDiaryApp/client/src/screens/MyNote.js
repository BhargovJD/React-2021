import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Edit from "./Edit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listNotes } from "./../actions/notesAction";
import { useNavigate } from "react-router-dom";

function MyNote() {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // To update automatically
  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(listNotes());
  }, [dispatch, successCreate, ]);

  return (
    <div>
      <div className="container">
        <h1>Welcome Back {userInfo ? userInfo.name : ""}</h1>
        <hr></hr>

        <Link to="/create-diary-note">
          <button type="button" class="btn btn-success">
            Create new diary note
          </button>
        </Link>

        <hr></hr>
      </div>

      {loading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        ""
      )}
      {error ? "Failed to fetch data" : ""}

      {notes?.reverse().map((note) => (
        <div key={note._id} id={note._id} className="container ">
          <div className="row">
            <div className="col ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{note.title}</h5>
                  <p>
                    <i>{new Date(note.createdAt).toDateString()}</i>
                  </p>
                  <p class="card-text">{note.content}</p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example d-flex justify-content-between"
                  >
                    <Link to={`/diary-notes/${note._id}`}>
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
