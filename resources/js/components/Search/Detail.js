import React, { useState, useEffect, useContext } from "react";
import { ResearchersContext } from "../../context";
import { useNavigate, navigation, Link } from "react-router-dom";

export default function Detail() {
    const researchersContext = useContext(ResearchersContext);
    const {
        selectedResearcher,
        isLoaded,
        researchers,
        didRefresh,
        setDidRefresh,
        refreshHandler
     } = researchersContext;



    useEffect(() => {
        window.addEventListener("beforeunload", refreshHandler);
        return () => {
            setDidRefresh(false);
            window.removeEventListener("beforeunload", refreshHandler);
        };
    }, []);

    if (!isLoaded) {
        return <h1 className="text-secondary">Carregando...</h1>
    }

    return (
        <>
            <div className="row mb-3 w-100 sticky-top bg-dark">
                <Link className="link-secondary" to="/"
                onClick={() => {
                    if (didRefresh) {
                        window.location.href="/";
                    }
                }}
                >&larr; Voltar</Link>
            </div>
            <div className="text-secondary text-break">
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">nome</span><br/>
                    <div className="py-2">{selectedResearcher.name}</div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">estado</span><br/>
                    <div className="py-2">{selectedResearcher.state}</div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">contacto</span><br/>
                    <div className="py-2">{selectedResearcher.contact}</div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">web</span><br/>
                    <div className="py-2"><a href={selectedResearcher.web} className="link-secondary" target="_blank">{selectedResearcher.web}</a></div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">universidade</span><br/>
                    <div className="py-2">{selectedResearcher.university}</div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">rol</span><br/>
                    <div className="py-2">{selectedResearcher.role}</div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">campo</span><br/>
                    <div className="py-2">{selectedResearcher.research_field}</div>
                </div>
                <div><span className="bg-secondary p-1 px-2 text-dark mb-3">palavras-chave</span><br/>
                    <div className="py-2">{selectedResearcher.keywords}</div>
                </div>
            </div>
        </>
    );
}
