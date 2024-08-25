import React, { useReducer } from "react";

const initialState = {
  showText: false,
  changeStyle: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_STYLE = "CHANGE_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showText: false,
      };
    case SHOW_TEXT:
      return {
        ...state,
        showText: true,
      };
    case CHANGE_STYLE:
      return {
        ...state,
        changeStyle: !state.changeStyle,
      };

    default:
      return state;
  }
}

function UseReducter_ex() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state?.showText ? (
        <h3 style={{ color: state?.changeStyle ? "red" : "yellow" }}>
          Use Reducer hook
        </h3>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>show text</button>
      <button onClick={() => dispatch({ type: CHANGE_STYLE })}>
        change style
      </button>
    </div>
  );
}

export default UseReducter_ex;
