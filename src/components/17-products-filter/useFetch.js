import { useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case "ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const useFetch = (url) => {
  const [proData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "SUCCESS", payload: data });
      try {
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
    };
    fetchData();
  }, [url]);

  return proData;
};

export default useFetch;
