import React, { useState, useEffect, useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";
import { ResearchersContext } from "../../context";
import axios from "axios";
// import { Modal } from "bootstrap";

export default function Dashboard() {

    const researchersContext = useContext(ResearchersContext);
    const { setAuthed } = researchersContext;
    const navigate = useNavigate();
    // let newDataModal = new bootstrap.Modal(document.getElementById('newDataModal'));

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [researchers, setResearchers] = useState([]);
    // const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [web, setWeb] = useState("");
    const [keywords, setKeywords] = useState("");
    const [estado, setEstado] = useState("");
    const [university, setUniversity] = useState("");
    const [role, setRole] = useState("");
    const [researchField, setResearchField] = useState("");

    useEffect(() => {
        getResearchers();
    }, []);

    // SUBMIT
    const handleSubmit = e => {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        // setId(researchers.id[length - 1]+ 1);
        axios
            .post('api/researchers', {
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
                console.log('from handle submit', response);
                // set state
                // setIsLoaded(false);
                setResearchers([...researchers, response.data]);
                setName("");
                setEstado("");
                setContact("");
                setWeb("");
                setUniversity("");
                setRole("");
                setResearchField("");
                setKeywords("");
                // setIsLoaded(true);
            })
            window.location.reload(true);
    }

    // GET
    const getResearchers = () => {
        axios
            .get('api/researchers')
            .then((response) => {
                setIsLoaded(true);
                setResearchers([...response.data.researchers]);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log(error);
            }
        );
    }

    // DELETE
    const handleDelete = id => {
        const isNotId = researcher => researcher.id !== id;
        const updatedResearchers = researchers.filter(isNotId);
        setResearchers(updatedResearchers);
        axios.delete(`api/researchers/${id}`);
    }

    // UPDATE
    const handleUpdate = id => {
        axios.put(`api/researchers/${id}`).then(response => {
            this.getResearchers();
        });
    }

    const renderData = data => (
        data.map((el, index) => (
            // <React.Fragment key={el.id}>
                <tr key={index}>
                    <th scope="row">{el.id}</th>
                    <td>{el.name}</td>
                    <td>{el.state}</td>
                    <td className="text-break">{el.contact}</td>
                    <td className="text-break">{el.web}</td>
                    <td>{el.university}</td>
                    <td>{el.role}</td>
                    <td>{el.research_field}</td>
                    <td>{el.keywords}</td>
                    <td><Link to={`/${el.id}/edit`} className="btn btn-sm btn-info">Editar</Link></td>
                    <td><button type="button" onClick={() => handleDelete(el.id)} className="btn btn-sm btn-danger">Deletar</button></td>
                </tr>
            // </React.Fragment>
        ))
    );

    return (
        <div className="container-fluid bg-secondary vh-100">
            <div className="row h-100 p-5">
                {/* Researchers Table */}
                <div className="col-lg-10 h-100">
                    <div className="container-fluid overflow-auto h-100 p-0 shadow tableFixHead">
                        <table className="table table-hover table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">state</th>
                                    <th scope="col">contact</th>
                                    <th scope="col">web</th>
                                    <th scope="col">university</th>
                                    <th scope="col">role</th>
                                    <th scope="col">research_field</th>
                                    <th scope="col">keywords</th>
                                    <th scope="col"/>
                                    <th scope="col"/>
                                </tr>
                            </thead>
                            <tbody>
                                {!!researchers.length ? renderData(researchers) : <tr><th scope="row" className="border-0">Carregando...</th></tr>}
                            </tbody>
                        </table>
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
                            <button type="button" className="btn btn-outline-primary btn-lg border-3 w-100 syne-b shadow" data-bs-toggle="modal" data-bs-target="#newDataModal">ADICIONAR</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal New*/}
            <div className="modal fade" id="newDataModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-secondary">
                    <div className="modal-header bg-dark text-secondary">
                        <h5 className="modal-title fw-bold" id="exampleModalLabel">Adicionar novo pesquisador</h5>
                        {/* <button type="button" className="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="row mb-3">
                                {/* ID */}
                                {/* <div className="col-lg-2">
                                    <label htmlFor="new-id" className="col-form-label">id</label> */}
                                    {/* <div type="text" className="form-control bg-secondary" id="new-id" disabled>{researchers.length + 1}</div> */}
                                    {/* <input value={id} type="text" className="form-control bg-secondary" id="new-id" disabled/>
                                </div> */}

                                {/* Name */}
                                <div className="col-lg-4">
                                    <label htmlFor="new-name" className="col-form-label">Nome:</label>
                                    <input required defaultValue={name} onBlur={e => setName(e.target.value)} type="text" className="form-control bg-secondary border border-dark shadow" id="new-name"/>
                                </div>

                                {/* State */}
                                <div className="col-lg-4">
                                    <label htmlFor="new-estado" className="col-form-label">Estado:</label>
                                    <select required value={estado} onChange={e => setEstado(e.target.value)} className="form-select bg-secondary border border-dark shadow" id="new-estado">
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
                                </div>

                                {/* Contact */}
                                <div className="col-lg-4">
                                    <label htmlFor="new-contact" className="col-form-label">Contacto:</label>
                                    <input defaultValue={contact} onBlur={e => setContact(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-contact"/>
                                </div>
                            </div>
                            <div className="row mb-3">

                                {/* Web */}
                                <div className="col-lg-6">
                                    <label htmlFor="new-web" className="col-form-label">Web:</label>
                                    <input required defaultValue={web} onBlur={e => setWeb(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-web"/>
                                </div>

                                {/* University */}
                                <div className="col-lg-6">
                                    <label htmlFor="new-university" className="col-form-label">Universidade:</label>
                                    <input required defaultValue={university} onBlur={e => setUniversity(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-university"/>
                                </div>
                            </div>
                            <div className="row mb-3">

                                {/* Role */}
                                <div className="col-lg-4">
                                    <label htmlFor="new-role" className="col-form-label">Vinculo institucional:</label>
                                    <select required value={role} onChange={e => setRole(e.target.value)} className="form-select bg-secondary border border-dark shadow" id="new-role">
                                        <option value="" defaultValue>Seleccione o vinculo institucional...</option>
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
                                    <select required value={researchField} onChange={e => setResearchField(e.target.value)} className="form-select bg-secondary border border-dark shadow" id="new-researchField">
                                        <option value="" defaultValue>Seleccione o campo de pesquisa...</option>
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
                                    <input required defaultValue={keywords} onBlur={e => setKeywords(e.target.value)} className="form-control bg-secondary border border-dark shadow" id="new-keywords"/>
                                </div>
                            </div>
                            <div className="modal-footer border-0">
                                {/* <div className="bg-danger">ID:{id} - Name: {name} </div> */}
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
