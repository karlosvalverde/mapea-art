import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ResearchersContext } from "../../context";

const List = props => {

    const researchersContext = useContext(ResearchersContext);

    const {
        researchers,
        selectedResearcher,
        setSelectedResearcher,
        error,
        isLoaded,
        name,
        keywords,
        estado,
        university,
        role,
        researchField
     } = researchersContext;

     let filteredData = [...researchers];

     const handleFilter = (data, key, value) => {
        return data.filter(item => item[key] == value);
    };

    const handleSearch = (data, key, value) => {
        return data.filter(item => item[key].toString().toLowerCase().indexOf(value.toLowerCase()) > -1);
    };

    if (name) {
        filteredData = handleSearch(filteredData, "name", name);
    }
    if (keywords) {
        filteredData = handleSearch(filteredData, "keywords", keywords);
    }
    if (estado) {
        filteredData = handleFilter(filteredData, "state", estado);
    }
    if (university) {
        filteredData = handleFilter(filteredData, "university", university);
    }
    if (role) {
        filteredData = handleFilter(filteredData, "role", role);
    }
    if (researchField) {
        filteredData = handleFilter(filteredData, "research_field", researchField);
    }

    const renderData = (data) => {
        return (
            <>
            <div className={`${name.length > 0 || keywords.length > 0 || estado.length > 0 || university.length > 0 || role.length > 0 || researchField.length > 0 ? "border-bottom border-secondary text-secondary" : "" }`}>
                <h5>
                    {name.length > 0 ?
                    <>
                        <span className="bg-secondary text-dark p-2">nombre</span><div className="d-inline-block py-3 px-2"><u>{name}</u> / </div>
                    </>
                        : "" }
                    {keywords.length > 0 ?
                    <>
                        <span className="bg-secondary text-dark p-2">palavra-chave</span><div className="d-inline-block py-3 px-2"><u>{keywords}</u> / </div>
                    </>
                        : "" }
                    {estado.length > 0 ?
                    <>
                        <span className="bg-secondary text-dark p-2">estado</span><div className="d-inline-block py-3 px-2"><u>{estado}</u> / </div>
                    </>
                        : "" }
                    {university.length > 0 ?
                    <>
                        <span className="bg-secondary text-dark p-2">universidade</span><div className="d-inline-block py-3 px-2"><u>{university}</u> / </div>
                    </>
                        : "" }
                    {role.length > 0 ?
                    <>
                        <span className="bg-secondary text-dark p-2">role</span><div className="d-inline-block py-3 px-2"><u>{role}</u> / </div>
                    </>
                        : "" }
                    {researchField.length > 0 ?
                    <>
                        <span className="bg-secondary text-dark p-2">campo</span><div className="d-inline-block py-3 px-2"><u>{researchField}</u> / </div>
                    </>
                        : "" }
                </h5>
            </div>
            <div className="border-bottom border-secondary py-3 text-secondary">
                <h4>{data.length} pesquisadores encontrados.</h4>
            </div>
            <div className="text-primary mt-3 row">
                {data.map((item) => (
                    <Link className="col is-btn m-2 btn btn-outline-primary" key={item.id} onClick={() => setSelectedResearcher(item)} to={"researcher/" + item.id}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
        );
    }

    if (error) {
        return (
            <>{error.message}</>
        );
    } else if (!isLoaded) {
        return (
            <h2 className="text-secondary">Carregando...</h2>
            );
    } else {
        return (
        <>
            {!!filteredData.length ? (
                renderData(filteredData)
            ) : (
                <h4 className="text-secondary">Nenhum resultado encontrado.</h4>
             )}
        </>
        );
    }
}

export default List;
