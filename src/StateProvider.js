//setup data layer
//to track basket 

import React, { createContext, useContext, useReducer } from "react";

// This is data Layer
export const StateContext = createContext();

//build a provider 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}        
    </StateContext.Provider>    
);

export const useStateValue = () => useContext(StateContext); 