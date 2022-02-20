import axios from "axios";
export const listSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });

    const { data } = await axios.get(`/api/products/${id}`) ;

    dispatch({ type: "PRODUCT_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error.response.data.error)
    dispatch({
      type: "PRODUCT_DETAIL_FAIL",
      payload: error.response.data.error.message,
    });
  }
};
