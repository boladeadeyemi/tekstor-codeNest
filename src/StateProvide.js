import { createContext, useContext, useReducer } from "react";

//Prepare the datalayer
export const StateContext = createContext();

//wrap our app and provide the Datalayer
export const StateProvider = ({ reducer, initalState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue =() =>useContext(StateContext);