import { createContext, useContext, useReducer } from "react";

const RegFormContext = createContext();
export const useRegFormContext = () => {
    return useContext(RegFormContext);
}

const reducer = (state, action) => {
    // { type, data }
    switch (action.type) {
        case 'SET_COMMON_DATA': {
            return { ...state, informacion: { ...action.data } };
        }

        case 'SET_PROBLEMA': {
            return { ...state, problema: action.data };
        }
    }
    return state;
}

const RegFormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { percent: 0 });

    return <RegFormContext.Provider value={[state, dispatch]}>
        {children}
    </RegFormContext.Provider>
}

export default RegFormProvider;