import { createContext, useReducer } from "react";

const LoadingContext = createContext()

const loadingReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return { isLoading: true }
    case 'CLOSE_LOADING':
      return { isLoading: false }
    default:
      return state
  }
}

const LoadingContextProvider = (props) => {
  const [state, dispatch] = useReducer(loadingReducer, { isLoading: false })
  const value = {
    isLoading: state.isLoading,
    showLoading: () => dispatch({ type: 'SHOW_LOADING' }),
    closeLoading: () => dispatch({ type: 'CLOSE_LOADING' })
  }
  console.log(value);

  return (
    <LoadingContext.Provider>{props.children}</LoadingContext.Provider>
  )
}

export {
  LoadingContext,
  LoadingContextProvider
}