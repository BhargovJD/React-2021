import axios from "axios";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const { data } = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    });

    dispatch({ type: "LOGIN_SUCCESS", payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL", payload: "Wrong email or password." });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "LOGOUT" });
};
