import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "NOTES_LIST_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/diary-notes`,
      config
    );

    dispatch({
      type: "NOTES_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: "NOTES_LIST_FAIL",
      payload: message,
    });
  }
};

// CREATE
export const createNoteAction =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "NOTES_CREATE_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/diary-notes/create`,
        { title, content, category },
        config
      );

      dispatch({
        type: "NOTES_CREATE_SUCCESS",
        // payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: "NOTES_CREATE_FAIL",
        payload: message,
      });
    }
  };

//   DELETE
export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "NOTES_DELETE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `http://localhost:5000/api/diary-notes/${id}`,
      config
    );

    dispatch({
      type: "NOTES_DELETE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: "NOTES_DELETE_FAIL",
      payload: message,
    });
  }
};

// EDIT
export const updateNoteAction =
  (id, title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "NOTES_UPDATE_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `http://localhost:5000/api/diary-notes/${id}`,
        { title, content, category },
        config
      );

      dispatch({
        type: "NOTES_UPDATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: "NOTES_UPDATE_FAIL",
        payload: message,
      });
    }
  };
