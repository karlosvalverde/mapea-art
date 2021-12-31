import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, Outlet, useRoutes } from "react-router-dom";
import { ResearchersContext } from "../context";

import Header from "./Header/Header";
import Detail from "./Search/Detail";
import List from "./Search/List";
import Search from "./Search/Search";

const Layout = props => {

    const researchersContext = useContext(ResearchersContext);

    const {
        filteredData,
        selectedResearcher,
        setSelectedResearcher,
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
     } = researchersContext;



    // let filteredData = [...researchers];



    // useEffect(() => {
    //     fetch("api/researcher/search/all")
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setResearchers(result.researchers);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         );
    // }, []);


    return (
        <>
        <div className="container-fluid bg-primary bg-gradient vh-100 overflow-hidden">
            <div className="row h-100">
                <div className="row p-5 h-100">
                    <div className="col col-lg-6 mr-5">
                        <Header/>
                        {/* Search */}
                        <div className="row pt-3">
                            <div className="col col-lg-9">
                                {/* Search by Name */}
                                <div className="input-group my-3 shadow">
                                    <input
                                        size="lg"
                                        type="search"
                                        name="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="form-control bg-primary border border-dark "
                                        placeholder="Insere o nome do pesquisador(a)..."
                                    />
                                </div>

                                {/* Search by Keywords */}
                                <div className="input-group my-3 shadow">
                                    <input
                                        type="text"
                                        name="keywords"
                                        value={keywords}
                                        onChange={e => setKeywords(e.target.value)}
                                        className="form-control bg-primary border border-dark"
                                        placeholder="Insere uma palavra chave..."
                                    />
                                </div>

                                {/* Filter by State */}
                                <select name="state" value={estado} onChange={e => setEstado(e.target.value)} className="form-select bg-primary border border-dark  mb-3 shadow" aria-label="Filter by State">
                                    <option value="" defaultValue>Seleccione um estado...</option>
                                    <option value="Acre (AC)">Acre (AC)</option>
                                    <option value="Alagoas (AL)">Alagoas (AL)</option>
                                    <option value="Amapá (AP)">Amapá (AP)</option>
                                    <option value="Amazonas (AM)">Amazonas (AM)</option>
                                    <option value="Bahia (BA)">Bahia (BA)</option>
                                    <option value="Ceará (CE)">Ceará (CE)</option>
                                    <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                                    <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
                                    <option value="Goiás (GO)">Goiás (GO)</option>
                                    <option value="Maranhão (MA)">Maranhão (MA)</option>
                                    <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                                    <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                                    <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                                    <option value="Pará (PA)">Pará (PA)</option>
                                    <option value="Paraíba (PB)">Paraíba (PB)</option>
                                    <option value="Paraná (PR)">Paraná (PR)</option>
                                    <option value="Pernambuco (PE)">Pernambuco (PE)</option>
                                    <option value="Piauí (PI)">Piauí (PI)</option>
                                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                                    <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
                                    <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                                    <option value="Rondônia (RO)">Rondônia (RO)</option>
                                    <option value="Roraima (RR)">Roraima (RR)</option>
                                    <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                                    <option value="São Paulo (SP)">São Paulo (SP)</option>
                                    <option value="Sergipe (SE)">Sergipe (SE)</option>
                                    <option value="Tocantins (TO)">Tocantins (TO)</option>
                                </select>

                                {/* Filter by University */}
                                <select name="university" value={university} onChange={e => setUniversity(e.target.value)} className="form-select bg-primary border border-dark  mb-3 shadow" aria-label="Filter by University">
                                    <option value="" defaultValue>Seleccione uma universidade...</option>
                                    <option value="Centro Universitário Senanc">Centro Universitário Senanc</option>
                                    <option value="Colégio Pedro II">Colégio Pedro II</option>
                                    <option value="Escola de Artes Visuais do Parque Lage">Escola de Artes Visuais do Parque Lage</option>
                                    <option value="Escola de Música da Universidade Federal de Minas Gerais">Escola de Música da Universidade Federal de Minas Gerais</option>
                                    <option value="Faculdade de Música do Espírito Santo">Faculdade de Música do Espírito Santo</option>
                                    <option value="Faculdade Integrada Brasil Amazônia">Faculdade Integrada Brasil Amazônia</option>
                                    <option value="Instituto Federal de Brasília">Instituto Federal de Brasília</option>
                                    <option value="Instituto Federal do Ceará">Instituto Federal do Ceará</option>
                                    <option value="Instituto Federal de Educação | Ciência e Tecnologia do Ceará">Instituto Federal de Educação, Ciência e Tecnologia do Ceará</option>
                                    <option value="Instituto Federal de Goiás">Instituto Federal de Goiás</option>
                                    <option value="Instituto Federal do Paraná">Instituto Federal do Paraná</option>
                                    <option value="Instituto Federal do Rio Grande do Norte">Instituto Federal do Rio Grande do Norte</option>
                                    <option value="Instituto Federal de Santa Catarina">Instituto Federal de Santa Catarina</option>
                                    <option value="Instituto Federal do Tocantins">Instituto Federal do Tocantins</option>
                                    <option value="Magistério Superior">Magistério Superior</option>
                                    <option value="Pontifícia Universidade Católica de São Paulo">Pontifícia Universidade Católica de São Paulo</option>
                                    <option value="Pontifícia Universidade Católica do Rio Grande do Sul">Pontifícia Universidade Católica do Rio Grande do Sul</option>
                                    <option value="Secretaria Estadual da Educação da Bahia">Secretaria Estadual da Educação da Bahia</option>
                                    <option value="Universidade Anhembi Morumbi">Universidade Anhembi Morumbi</option>
                                    <option value="Universidade da Amazônia">Universidade da Amazônia</option>
                                    <option value="Universidade de Brasília">Universidade de Brasília</option>
                                    <option value="Universidade de Coimbra">Universidade de Coimbra</option>
                                    <option value="Universidade do Estado do Amazonas">Universidade do Estado do Amazonas</option>
                                    <option value="Universidade do Estado de Minas Gerais">Universidade do Estado de Minas Gerais</option>
                                    <option value="Universidade do Estado do Pará">Universidade do Estado do Pará</option>
                                    <option value="Universidade do Estado do Rio de Janeiro">Universidade do Estado do Rio de Janeiro</option>
                                    <option value="Universidade do Estado de Santa Catarina">Universidade do Estado de Santa Catarina</option>
                                    <option value="Universidade do Extremo Sul Catarinense">Universidade do Extremo Sul Catarinense</option>
                                    <option value="Universidade da Integração Internacional da Lusofonia Afro-Brasileira">Universidade da Integração Internacional da Lusofonia Afro-Brasileira</option>
                                    <option value="Universidade de Leiden">Universidade de Leiden</option>
                                    <option value="Universidade de Passo Fundo">Universidade de Passo Fundo</option>
                                    <option value="Universidade de São Paulo">Universidade de São Paulo</option>
                                    <option value="Universidade Estadual de Campinas">Universidade Estadual de Campinas</option>
                                    <option value="Universidade Estadual do Ceará">Universidade Estadual do Ceará</option>
                                    <option value="Universidade Estadual de Feira de Santana">Universidade Estadual de Feira de Santana</option>
                                    <option value="Universidade Estadual de Maringá">Universidade Estadual de Maringá</option>
                                    <option value="Universidade Estadual do Paraná">Universidade Estadual do Paraná</option>
                                    <option value="Universidade Estadual de Ponta Grossa">Universidade Estadual de Ponta Grossa</option>
                                    <option value="Universidade Estadual do Rio de Janeiro">Universidade Estadual do Rio de Janeiro</option>
                                    <option value="Universidade Estadual do Rio Grande do Sul">Universidade Estadual do Rio Grande do Sul</option>
                                    <option value="Universidade Estadual de Santa Catarina">Universidade Estadual de Santa Catarina</option>
                                    <option value="Universidade Estadual Paulista">Universidade Estadual Paulista</option>
                                    <option value="Universidade Estadual Paulista Júlio de Mesquita Filho">Universidade Estadual Paulista Júlio de Mesquita Filho</option>
                                    <option value="Universidade Federal de Alagoas">Universidade Federal de Alagoas</option>
                                    <option value="Universidade Federal da Bahia">Universidade Federal da Bahia</option>
                                    <option value="Universidade Federal do Cariri">Universidade Federal do Cariri</option>
                                    <option value="Universidade Federal do Ceará">Universidade Federal do Ceará</option>
                                    <option value="Universidade Federal do Espírito Santo">Universidade Federal do Espírito Santo</option>
                                    <option value="Universidade Federal de Goiás">Universidade Federal de Goiás</option>
                                    <option value="Universidade Federal de Juiz de Fora">Universidade Federal de Juiz de Fora</option>
                                    <option value="Universidade Federal de Mato Grosso">Universidade Federal de Mato Grosso</option>
                                    <option value="Universidade Federal de Mato Grosso do Sul">Universidade Federal de Mato Grosso do Sul</option>
                                    <option value="Universidade Federal de Minas Gerais">Universidade Federal de Minas Gerais</option>
                                    <option value="Universidade Federal de Ouro Preto">Universidade Federal de Ouro Preto</option>
                                    <option value="Universidade Federal do Oeste da Bahia">Universidade Federal do Oeste da Bahia</option>
                                    <option value="Universidade Federal do Pampa">Universidade Federal do Pampa</option>
                                    <option value="Universidade Federal do Pará">Universidade Federal do Pará</option>
                                    <option value="Universidade Federal da Paraiba">Universidade Federal da Paraiba</option>
                                    <option value="Universidade Federal de Pelotas">Universidade Federal de Pelotas</option>
                                    <option value="Universidade Federal de Pernambuco">Universidade Federal de Pernambuco</option>
                                    <option value="Universidade Federal do Estado do Rio de Janeiro">Universidade Federal do Estado do Rio de Janeiro</option>
                                    <option value="Universidade Federal do Recôncavo da Bahia">Universidade Federal do Recôncavo da Bahia</option>
                                    <option value="Universidade Federal do Rio de Janeiro">Universidade Federal do Rio de Janeiro</option>
                                    <option value="Universidade Federal do Rio Grande">Universidade Federal do Rio Grande</option>
                                    <option value="Universidade Federal do Rio Grande do Norte">Universidade Federal do Rio Grande do Norte</option>
                                    <option value="Universidade Federal do Rio Grande do Sul">Universidade Federal do Rio Grande do Sul</option>
                                    <option value="Universidade Federal de Roraima">Universidade Federal de Roraima</option>
                                    <option value="Universidade Federal de Santa Maria">Universidade Federal de Santa Maria</option>
                                    <option value="Universidade Federal de São Carlos">Universidade Federal de São Carlos</option>
                                    <option value="Universidade Federal de São João del Rei">Universidade Federal de São João del Rei</option>
                                    <option value="Universidade Federal de São Paulo">Universidade Federal de São Paulo</option>
                                    <option value="Universidade Federal de Sergipe">Universidade Federal de Sergipe</option>
                                    <option value="Universidade Federal do Tocantins">Universidade Federal do Tocantins</option>
                                    <option value="Universidade Federal de Uberlândia">Universidade Federal de Uberlândia</option>
                                    <option value="Universidade Federal dos Vales do Jequitinhonha e Mucuri">Universidade Federal dos Vales do Jequitinhonha e Mucuri</option>
                                    <option value="Universidade Federal de Viçosa">Universidade Federal de Viçosa</option>
                                    <option value="Universidade Federal Fluminense">Universidade Federal Fluminense</option>
                                    <option value="Universidade Paulista">Universidade Paulista</option>
                                    <option value="Universidade Regional do Cariri">Universidade Regional do Cariri</option>
                                    <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                                    <option value="Universidade Tecnológica Federal do Paraná">Universidade Tecnológica Federal do Paraná</option>
                                    <option value="University of Oxford">University of Oxford</option>
                                </select>

                                {/* Filter by Role */}
                                <select name="role" value={role} onChange={e => setRole(e.target.value)} className="form-select bg-primary border border-dark  mb-3 shadow" aria-label="Filter by Role">
                                    <option value="" defaultValue>Seleccione o vinculo institucional...</option>
                                    <option value="Mestrando(a)">Mestrando(a)</option>
                                    <option value="Doutorando(a)">Doutorando(a)</option>
                                    <option value="Pós-doutorando(a)">Pós-doutorando(a)</option>
                                    <option value="Docente">Docente</option>
                                    <option value="Pesquisador(a)">Pesquisador(a)</option>
                                </select>

                                {/* Filter by Research Field */}
                                <select name="research_field" value={researchField} onChange={e => setResearchField(e.target.value)} className="form-select bg-primary border border-dark mb-3 shadow" aria-label="Filter by Research Field">
                                    <option value="" defaultValue>Seleccione o campo de pesquisa...</option>
                                    <option value="Artes Visuais">Artes Visuais</option>
                                    <option value="Artes Cênicas">Artes Cênicas</option>
                                    <option value="Música">Música</option>
                                    <option value="Arte-educação">Arte-educação</option>
                                    <option value="Audiovisual">Audiovisual</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 h-100 no-gutters">
                        <div className="container mt-5 mt-lg-0 bg-dark shadow h-100 overflow-auto p-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Layout;

