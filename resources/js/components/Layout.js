import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ResearchersContext } from "../context";

import Header from "./Header/Header";
import About from "./About/About";

const Layout = props => {

    const researchersContext = useContext(ResearchersContext);

    const {
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
                                        placeholder="Insira o nome do pesquisador(a)..."
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
                                        placeholder="Insira uma palavra chave..."
                                    />
                                </div>

                                {/* Filter by State */}
                                <select name="state" value={estado} onChange={e => setEstado(e.target.value)} className="form-select bg-primary border border-dark  mb-3 shadow" aria-label="Filter by State">
                                    <option value="" defaultValue>Selecione um estado...</option>
                                    <option value="Acre (AC)">Acre (AC)</option>
                                    <option value="Alagoas (AL)">Alagoas (AL)</option>
                                    <option value="Amap?? (AP)">Amap?? (AP)</option>
                                    <option value="Amazonas (AM)">Amazonas (AM)</option>
                                    <option value="Bahia (BA)">Bahia (BA)</option>
                                    <option value="Cear?? (CE)">Cear?? (CE)</option>
                                    <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                                    <option value="Esp??rito Santo (ES)">Esp??rito Santo (ES)</option>
                                    <option value="Goi??s (GO)">Goi??s (GO)</option>
                                    <option value="Maranh??o (MA)">Maranh??o (MA)</option>
                                    <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                                    <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                                    <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                                    <option value="Par?? (PA)">Par?? (PA)</option>
                                    <option value="Para??ba (PB)">Para??ba (PB)</option>
                                    <option value="Paran?? (PR)">Paran?? (PR)</option>
                                    <option value="Pernambuco (PE)">Pernambuco (PE)</option>
                                    <option value="Piau?? (PI)">Piau?? (PI)</option>
                                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                                    <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
                                    <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                                    <option value="Rond??nia (RO)">Rond??nia (RO)</option>
                                    <option value="Roraima (RR)">Roraima (RR)</option>
                                    <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                                    <option value="S??o Paulo (SP)">S??o Paulo (SP)</option>
                                    <option value="Sergipe (SE)">Sergipe (SE)</option>
                                    <option value="Tocantins (TO)">Tocantins (TO)</option>
                                </select>

                                {/* Filter by University */}
                                <select name="university" value={university} onChange={e => setUniversity(e.target.value)} className="form-select bg-primary border border-dark  mb-3 shadow" aria-label="Filter by University">
                                    <option value="" defaultValue>Selecione uma universidade...</option>
                                    <option value="Centro Universit??rio Senanc">Centro Universit??rio Senanc</option>
                                    <option value="Col??gio Pedro II">Col??gio Pedro II</option>
                                    <option value="Escola de Artes Visuais do Parque Lage">Escola de Artes Visuais do Parque Lage</option>
                                    <option value="Escola de M??sica da Universidade Federal de Minas Gerais">Escola de M??sica da Universidade Federal de Minas Gerais</option>
                                    <option value="Faculdade de M??sica do Esp??rito Santo">Faculdade de M??sica do Esp??rito Santo</option>
                                    <option value="Faculdade Integrada Brasil Amaz??nia">Faculdade Integrada Brasil Amaz??nia</option>
                                    <option value="Instituto Federal de Bras??lia">Instituto Federal de Bras??lia</option>
                                    <option value="Instituto Federal do Cear??">Instituto Federal do Cear??</option>
                                    <option value="Instituto Federal de Educa????o | Ci??ncia e Tecnologia do Cear??">Instituto Federal de Educa????o, Ci??ncia e Tecnologia do Cear??</option>
                                    <option value="Instituto Federal de Goi??s">Instituto Federal de Goi??s</option>
                                    <option value="Instituto Federal do Paran??">Instituto Federal do Paran??</option>
                                    <option value="Instituto Federal do Rio Grande do Norte">Instituto Federal do Rio Grande do Norte</option>
                                    <option value="Instituto Federal de Santa Catarina">Instituto Federal de Santa Catarina</option>
                                    <option value="Instituto Federal do Tocantins">Instituto Federal do Tocantins</option>
                                    <option value="Magist??rio Superior">Magist??rio Superior</option>
                                    <option value="Pontif??cia Universidade Cat??lica de S??o Paulo">Pontif??cia Universidade Cat??lica de S??o Paulo</option>
                                    <option value="Pontif??cia Universidade Cat??lica do Rio Grande do Sul">Pontif??cia Universidade Cat??lica do Rio Grande do Sul</option>
                                    <option value="Secretaria Estadual da Educa????o da Bahia">Secretaria Estadual da Educa????o da Bahia</option>
                                    <option value="Universidade Anhembi Morumbi">Universidade Anhembi Morumbi</option>
                                    <option value="Universidade da Amaz??nia">Universidade da Amaz??nia</option>
                                    <option value="Universidade de Bras??lia">Universidade de Bras??lia</option>
                                    <option value="Universidade de Coimbra">Universidade de Coimbra</option>
                                    <option value="Universidade do Estado do Amazonas">Universidade do Estado do Amazonas</option>
                                    <option value="Universidade do Estado de Minas Gerais">Universidade do Estado de Minas Gerais</option>
                                    <option value="Universidade do Estado do Par??">Universidade do Estado do Par??</option>
                                    <option value="Universidade do Estado do Rio de Janeiro">Universidade do Estado do Rio de Janeiro</option>
                                    <option value="Universidade do Estado de Santa Catarina">Universidade do Estado de Santa Catarina</option>
                                    <option value="Universidade do Extremo Sul Catarinense">Universidade do Extremo Sul Catarinense</option>
                                    <option value="Universidade da Integra????o Internacional da Lusofonia Afro-Brasileira">Universidade da Integra????o Internacional da Lusofonia Afro-Brasileira</option>
                                    <option value="Universidade de Leiden">Universidade de Leiden</option>
                                    <option value="Universidade de Passo Fundo">Universidade de Passo Fundo</option>
                                    <option value="Universidade de S??o Paulo">Universidade de S??o Paulo</option>
                                    <option value="Universidade Estadual de Campinas">Universidade Estadual de Campinas</option>
                                    <option value="Universidade Estadual do Cear??">Universidade Estadual do Cear??</option>
                                    <option value="Universidade Estadual de Feira de Santana">Universidade Estadual de Feira de Santana</option>
                                    <option value="Universidade Estadual de Maring??">Universidade Estadual de Maring??</option>
                                    <option value="Universidade Estadual do Paran??">Universidade Estadual do Paran??</option>
                                    <option value="Universidade Estadual de Ponta Grossa">Universidade Estadual de Ponta Grossa</option>
                                    <option value="Universidade Estadual do Rio de Janeiro">Universidade Estadual do Rio de Janeiro</option>
                                    <option value="Universidade Estadual do Rio Grande do Sul">Universidade Estadual do Rio Grande do Sul</option>
                                    <option value="Universidade Estadual de Santa Catarina">Universidade Estadual de Santa Catarina</option>
                                    <option value="Universidade Estadual Paulista">Universidade Estadual Paulista</option>
                                    <option value="Universidade Estadual Paulista J??lio de Mesquita Filho">Universidade Estadual Paulista J??lio de Mesquita Filho</option>
                                    <option value="Universidade Federal de Alagoas">Universidade Federal de Alagoas</option>
                                    <option value="Universidade Federal da Bahia">Universidade Federal da Bahia</option>
                                    <option value="Universidade Federal do Cariri">Universidade Federal do Cariri</option>
                                    <option value="Universidade Federal do Cear??">Universidade Federal do Cear??</option>
                                    <option value="Universidade Federal do Esp??rito Santo">Universidade Federal do Esp??rito Santo</option>
                                    <option value="Universidade Federal de Goi??s">Universidade Federal de Goi??s</option>
                                    <option value="Universidade Federal de Juiz de Fora">Universidade Federal de Juiz de Fora</option>
                                    <option value="Universidade Federal de Mato Grosso">Universidade Federal de Mato Grosso</option>
                                    <option value="Universidade Federal de Mato Grosso do Sul">Universidade Federal de Mato Grosso do Sul</option>
                                    <option value="Universidade Federal de Minas Gerais">Universidade Federal de Minas Gerais</option>
                                    <option value="Universidade Federal de Ouro Preto">Universidade Federal de Ouro Preto</option>
                                    <option value="Universidade Federal do Oeste da Bahia">Universidade Federal do Oeste da Bahia</option>
                                    <option value="Universidade Federal do Pampa">Universidade Federal do Pampa</option>
                                    <option value="Universidade Federal do Par??">Universidade Federal do Par??</option>
                                    <option value="Universidade Federal da Paraiba">Universidade Federal da Paraiba</option>
                                    <option value="Universidade Federal de Pelotas">Universidade Federal de Pelotas</option>
                                    <option value="Universidade Federal de Pernambuco">Universidade Federal de Pernambuco</option>
                                    <option value="Universidade Federal do Estado do Rio de Janeiro">Universidade Federal do Estado do Rio de Janeiro</option>
                                    <option value="Universidade Federal do Rec??ncavo da Bahia">Universidade Federal do Rec??ncavo da Bahia</option>
                                    <option value="Universidade Federal do Rio de Janeiro">Universidade Federal do Rio de Janeiro</option>
                                    <option value="Universidade Federal do Rio Grande">Universidade Federal do Rio Grande</option>
                                    <option value="Universidade Federal do Rio Grande do Norte">Universidade Federal do Rio Grande do Norte</option>
                                    <option value="Universidade Federal do Rio Grande do Sul">Universidade Federal do Rio Grande do Sul</option>
                                    <option value="Universidade Federal de Roraima">Universidade Federal de Roraima</option>
                                    <option value="Universidade Federal de Santa Maria">Universidade Federal de Santa Maria</option>
                                    <option value="Universidade Federal de S??o Carlos">Universidade Federal de S??o Carlos</option>
                                    <option value="Universidade Federal de S??o Jo??o del Rei">Universidade Federal de S??o Jo??o del Rei</option>
                                    <option value="Universidade Federal de S??o Paulo">Universidade Federal de S??o Paulo</option>
                                    <option value="Universidade Federal de Sergipe">Universidade Federal de Sergipe</option>
                                    <option value="Universidade Federal do Tocantins">Universidade Federal do Tocantins</option>
                                    <option value="Universidade Federal de Uberl??ndia">Universidade Federal de Uberl??ndia</option>
                                    <option value="Universidade Federal dos Vales do Jequitinhonha e Mucuri">Universidade Federal dos Vales do Jequitinhonha e Mucuri</option>
                                    <option value="Universidade Federal de Vi??osa">Universidade Federal de Vi??osa</option>
                                    <option value="Universidade Federal Fluminense">Universidade Federal Fluminense</option>
                                    <option value="Universidade Paulista">Universidade Paulista</option>
                                    <option value="Universidade Regional do Cariri">Universidade Regional do Cariri</option>
                                    <option value="Universidade Nova de Lisboa">Universidade Nova de Lisboa</option>
                                    <option value="Universidade Tecnol??gica Federal do Paran??">Universidade Tecnol??gica Federal do Paran??</option>
                                    <option value="University of Oxford">University of Oxford</option>
                                </select>

                                {/* Filter by Role */}
                                <select name="role" value={role} onChange={e => setRole(e.target.value)} className="form-select bg-primary border border-dark  mb-3 shadow" aria-label="Filter by Role">
                                    <option value="" defaultValue>Selecione o v??nculo institucional...</option>
                                    <option value="Mestrando(a)">Mestrando(a)</option>
                                    <option value="Doutorando(a)">Doutorando(a)</option>
                                    <option value="P??s-doutorando(a)">P??s-doutorando(a)</option>
                                    <option value="Docente">Docente</option>
                                    <option value="Pesquisador(a)">Pesquisador(a)</option>
                                </select>

                                {/* Filter by Research Field */}
                                <select name="research_field" value={researchField} onChange={e => setResearchField(e.target.value)} className="form-select bg-primary border border-dark mb-3 shadow" aria-label="Filter by Research Field">
                                    <option value="" defaultValue>Selecione o campo de pesquisa...</option>
                                    <option value="Artes Visuais">Artes Visuais</option>
                                    <option value="Artes C??nicas">Artes C??nicas</option>
                                    <option value="M??sica">M??sica</option>
                                    <option value="Arte-educa????o">Arte-educa????o</option>
                                    <option value="Audiovisual">Audiovisual</option>
                                </select>
                                <About />
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

