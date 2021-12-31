import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {

    // Initial values are obtained from the props
    const {
        researchers: initialResearchers,
        selectedResearcher: initialSelectedResearcher,
        children
    } = props;

    // Use State to keep the values
    const [researchers, setResearchers] = useState(initialResearchers);
    const [selectedResearcher, setSelectedResearcher] = useState(initialSelectedResearcher);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [name, setName] = useState("");
    const [keywords, setKeywords] = useState("");
    const [estado, setEstado] = useState("");
    const [university, setUniversity] = useState("");
    const [role, setRole] = useState("");
    const [researchField, setResearchField] = useState("");

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
        setResearchField
    };

    useEffect(() => {
        fetch("api/researcher/search/all")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setResearchers(result.researchers);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    // pass the value in provider and return
    return <Context.Provider value={researchersContext}>{children}</Context.Provider>;
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
