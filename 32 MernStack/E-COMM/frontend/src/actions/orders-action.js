import axios from "axios";
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "ORDER_LIST_REQUEST" });

    const {
      loginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("api/orders/orders/myorders", config);

    dispatch({ type: "ORDER_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ORDER_LIST_FAIL", payload: error.message });
  }
};
