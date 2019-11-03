//
// This utility from Luke Hall
// https://github.com/lukashala/react-simply
// See article: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
//
import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = (createContext as any)();
export const StateProvider = ({reducer, initialState, children}:{reducer:any,initialState:any,children:any}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);