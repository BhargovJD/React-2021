import React from "react";

function Edit() {
  return (
    <div className="container">
      <h1>Edit</h1>
      <div className="row">
        <div className="col">
          {/* <h2 className="text-success">Login</h2> */}
          <form>
            <div className="mb-3">
              <input
                placeholder="Title"
                type="text"
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <div className="mb-3">
              <input
                placeholder="Description"
                type="text"
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <div className="mb-3">
              <input
                placeholder="Category"
                type="text"
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <button type="submit" className="btn btn-warning">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
