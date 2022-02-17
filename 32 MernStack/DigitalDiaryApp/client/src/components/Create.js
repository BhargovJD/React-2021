import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../actions/notesAction";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, content, category);
    if ((!title, !content, !category)) {
      return;
    }
    dispatch(createNoteAction(title, content, category));
    
    navigate("/diary-notes");


  };

  return (
    <div>
      <h1>Create</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={submitHandler}>
              <div class="mb-3">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title"
                  class="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>

              <div class="mb-3">
                <input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  placeholder="Content"
                  class="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>

              <div class="mb-3">
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  placeholder="Category"
                  class="form-control"
                  id=""
                  aria-describedby=""
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Add to diary
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
