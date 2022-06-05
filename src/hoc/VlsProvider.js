import { createContext, useState } from "react";

export const VlsContext = createContext(null);

export const VlsProvider = ({children}) => {
    const [type, setType] = useState('');
    const [loc, setLoc] = useState('');
    const [customer, setCustomer] = useState('');


    //result
    const [internet, setInternet] = useState(false);
    const [azure, setAzure] = useState(false);
    const [aws, setAws] = useState(false);
    const [gcp, setGcp] = useState(false);
    const [oracle, setOracle] = useState(false);
    const [ab, setAb] = useState(false);

    const [step, setStep] = useState(false);


    const setResultInternet = (bool) => {
        setInternet(bool);
    }

    const setResultAzure = (bool) => {
        setAzure(bool);
    }

    const setResultAws = (bool) => {
        setAws(bool);
    }

    const setResultGcp = (bool) => {
        setGcp(bool);
    }

    const setResultOracle = (bool) => {
        setOracle(bool);
    }

    const setResultAb = (bool) => {
        setAb(bool);
    }



    const setGlobalStep = (bool) => {
        setStep(bool);
    }
    
    const setGlobalType = (type) => {
        setType(type);
    }

    const setGlobalLoc = (loc) => {
        setLoc(loc);
    }

    const setGlobalCustomer = (customer) => {
        setCustomer(customer);
    }


    const value = {type, 
                   loc, 
                   customer, 
                   step, 
                   internet, 
                   azure, 
                   aws, 
                   gcp, 
                   oracle, 
                   ab,
                   setResultInternet,
                   setResultAzure,
                   setResultAws,
                   setResultGcp,
                   setResultOracle,
                   setResultAb,
                   setGlobalCustomer, 
                   setGlobalType, 
                   setGlobalLoc, 
                   setGlobalStep};

    return (
        <VlsContext.Provider value={value}>
            {children}
        </VlsContext.Provider>
    )
}