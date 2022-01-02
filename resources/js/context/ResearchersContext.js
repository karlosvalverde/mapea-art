import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as axios from "axios";
import { get } from "lodash";

export const Context = createContext({});

export const Provider = props => {

    // Initial values are obtained from the props
    const {
        researchers: initialResearcher,
        selectedResearcher: initialSelectedResearcher,
        children
    } = props;

    // Use State to keep the values
    const [researchers, setResearchers] = useLocalStorage("researchers" , initialResearcher);
    const [selectedResearcher, setSelectedResearcher] = useLocalStorage("selectedResearcher", initialSelectedResearcher);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [name, setName] = useLocalStorage("name", "");
    const [keywords, setKeywords] = useLocalStorage("keywords", "");
    const [estado, setEstado] = useLocalStorage("estado", "");
    const [university, setUniversity] = useLocalStorage("university", "");
    const [role, setRole] = useLocalStorage("role", "");
    const [researchField, setResearchField] = useLocalStorage("researchField", "");
    const [didRefresh, setDidRefresh] = useLocalStorage("didRefresh", false);
    const refreshHandler = () => { setDidRefresh(true) };

    // Make the context object:
    const researchersContext = {
        researchers,
        setResearchers,
        selectedResearcher,
        setSelectedResearcher,
        error,
        isLoaded,
        name,
        setName,
        keywords,
        setKeywords,
        estado,
        setEstado,
        university,
        setUniversity,
        role,
        setRole,
        researchField,
        setResearchField,
        didRefresh,
        setDidRefresh,
        refreshHandler
    };

    useEffect(() => {
        const url = "api/researcher/search/all";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setIsLoaded(true);
                setResearchers(json.researchers);
            }   catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        };

        fetchData();

    },[]);

    // pass the value in provider and return
    return <Context.Provider value={researchersContext}>{children}</Context.Provider>;
}

// Hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };

    return [storedValue, setValue];
}

export const { Consumer } = Context;

Provider.propTypes = {
    researchers: PropTypes.array,
    selectedResearcher: PropTypes.object
};

Provider.defaultProps = {
    researchers: [],
    selectedResearcher: {}
};
