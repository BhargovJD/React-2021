import React from "react";
import { Link } from "react-router-dom";

function Todo() {
  return (
    <div>
      <div className="container">
        <ul class="list-group">
          <li class="list-group-item">
            <h5>An item</h5>
            <div className="text-secondary"><span><b>by:</b> Bhagov </span><span><b>added:</b> 3 days ago</span></div>
            <div
              class="btn-group btn-sm"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <Link to={``}>
              <button type="button" class="btn btn-success">
                Completed
              </button>
              </Link>

              <Link to={`/edit`}><button type="button" class="btn btn-warning">
                Edit
              </button>
              </Link>

            <Link to={''}>
            <button type="button" class="btn btn-danger">
                Delete
              </button>
            </Link>

            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
