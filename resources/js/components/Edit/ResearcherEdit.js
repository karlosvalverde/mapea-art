import React, { useState, useEffect, useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ResearchersContext } from "../../context";
import axios from "axios";

export default function ResearcherEdit() {

    const researchersContext = useContext(ResearchersContext);
    const { setAuthed } = researchersContext;
    const [researcher, setResearcher] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [web, setWeb] = useState("");
    const [keywords, setKeywords] = useState("");
    const [estado, setEstado] = useState("");
    const [university, setUniversity] = useState("");
    const [role, setRole] = useState("");
    const [researchField, setResearchField] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`api/researchers/${id}`)
        .then((response) => {
            // console.log("RESPONSE --> " + response.data);
            setIsLoaded(true);
            setResearcher([...response.data.researcher]);
        })
        .then(() => {
            setName(researcher.name);
            setEstado(researcher.state);
            setContact(researcher.contact);
            setWeb(researcher.web);
            setUniversity(researcher.university);
            setRole(researcher.role);
            setResearchField(researcher.research_field);
            setKeywords(researcher.keywords);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
    }, []);

    // console.log("RESEARCHER --> " + researcher);
    console.log("NAME --> " + researcher);
    console.log("ID --> " + id);

    // SUBMIT
    const handleSubmit = e => {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .put('api/researchers', {
                // id: id,
                name: name,
                state: estado,
                contact: contact,
                web: web,
                university: university,
                role: role,
                research_field: researchField,
                keywords: keywords
            })
            .then(response => {
                console.log('succesfully edited the researcher', response);
                navigate("/dashboard");
            })

    }

    return (
        <div className="container-fluid bg-secondary vh-100">
        <div className="row h-100 p-5">
            {/* Researchers Table */}
            <div className="col-lg-10 h-100">
                <div className="container-fluid h-100 p-0 border border-dark shadow">
                <form className="p-5 d-flex flex-column justify-content-between h-100" onSubmit={e => handleSubmit(e)}>
                        <div className="row mb-3">

                            {/* Name */}
                            <div className="col-lg-4">
                                <label htmlFor="new-name" className="col-form-label">Nome:</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control bg-secondary border border-dark shadow" id="new-name"/>
                            </div>

                            {/* State */}
                            <div className="col-lg-4">
                                <label htmlFor="new-estado" className="col-form-label">Estado:</label>
                                <select value={estado} onChange={e => setEstado(e.target.value)} className="form-select bg-secondary border border-dark shadow" id="new-estado">
                                    <option value="">Seleccione um estado...</option>
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
                            </div>

                            {/* Contact */}
                            <div className="col-lg-4">
                                <label htmlFor="new-contact" className="col-form-label">Contacto:</label>
                                <input value={contact} onChange={e => setContact(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-contact"/>
                            </div>
                        </div>
                        <div className="row mb-3">

                            {/* Web */}
                            <div className="col-lg-6">
                                <label htmlFor="new-web" className="col-form-label">Web:</label>
                                <input value={web} onChange={e => setWeb(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-web"/>
                            </div>

                            {/* University */}
                            <div className="col-lg-6">
                                <label htmlFor="new-university" className="col-form-label">Universidade:</label>
                                <input value={university} onChange={e => setUniversity(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-university"/>
                            </div>
                        </div>
                        <div className="row mb-3">

                            {/* Role */}
                            <div className="col-lg-4">
                                <label htmlFor="new-role" className="col-form-label">Vinculo institucional:</label>
                                <select value={role} onChange={e => setRole(e.target.value)} className="form-select bg-secondary border border-dark shadow" id="new-role">
                                    <option value="">Seleccione o vinculo institucional...</option>
                                    <option value="Mestrando(a)">Mestrando(a)</option>
                                    <option value="Doutorando(a)">Doutorando(a)</option>
                                    <option value="Pós-doutorando(a)">Pós-doutorando(a)</option>
                                    <option value="Docente">Docente</option>
                                    <option value="Pesquisador(a)">Pesquisador(a)</option>
                                </select>
                            </div>

                            {/* Research Field */}
                            <div className="col-lg-4">
                                <label htmlFor="new-researchField" className="col-form-label">Campo de pesquisa:</label>
                                <select value={researchField} onChange={e => setResearchField(e.target.value)} className="form-select bg-secondary border border-dark shadow" id="new-researchField">
                                    <option value="">Seleccione o campo de pesquisa...</option>
                                    <option value="Artes Visuais">Artes Visuais</option>
                                    <option value="Artes Cênicas">Artes Cênicas</option>
                                    <option value="Música">Música</option>
                                    <option value="Arte-educação">Arte-educação</option>
                                    <option value="Audiovisual">Audiovisual</option>
                                </select>
                            </div>

                            {/* Keywords */}
                            <div className="col-lg-4">
                                <label htmlFor="new-keywords" className="col-form-label">Palavras chave:</label>
                                <input value={keywords} onChange={e => setKeywords(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-keywords"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Controls */}
            <div className="col-lg-2 text-end align-items-stretch h-100 d-flex flex-column">
                <div className="row">
                    <Link to="/" className="is-header">
                        <CloseIcon sx={{ fontSize: 100 }} className="text-dark" />
                    </Link>
                </div>
                <div className="row mx-3 h-100 align-items-end">
                    <div className="col">
                        <button type="button" className="btn btn-outline-dark btn-lg border-3 mb-3 w-100 syne-b shadow" onClick={() => { setAuthed(false); navigate("/"); }}>LOGOUT</button>
                        <button type="submit" className="btn btn-primary btn-lg border-3 w-100 syne-b shadow">GUARDAR</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}
