import React, {createContext, useContext, useReducer} from "react";

//Prepare the Data Layer
export const StateContext = createContext();



// wrap our app and provide the Data Layer to all conponent
export const StateProvider  = ({reducer , initialState, children}
) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> {children}</StateContext.Provider>
);


//Pull informationn from the data layer
export const useStateValue = ()=> useContext(StateContext);
