const initialState = {
  product: {},
  loading: false,
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_DETAIL_REQUEST":
      return { loading: true };
    case "PRODUCT_DETAIL_SUCCESS":
      return { loading: false, product: action.payload };
    case "PRODUCT_DETAIL_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productDetailReducer;
