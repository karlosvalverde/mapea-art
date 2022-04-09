import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResearchersContext } from "../../context";

export default function Header() {
    const researchersContext = useContext(ResearchersContext);
    const {
        authed,
        setAuthed,
        didRefresh,
        setDidRefresh,
        refreshHandler
    } = researchersContext;
    const navigate = useNavigate();

    // let button;


    useEffect(() => {
        window.addEventListener("beforeunload", refreshHandler);
        return () => {
            setDidRefresh(false);
            window.removeEventListener("beforeunload", refreshHandler);
        };
    }, []);

    // if (auth) {
    //     button =
    // }

    return (
        <div className="row">
            <div className="col col-lg-9 border-bottom border-dark border-3 pb-3">
                {authed &&
                    <h5 className="text-secondary bg-dark p-3 d-flex align-items-center justify-content-between">Administrador / <span><button className="btn btn-outline-secondary is-btn" onClick={() => { navigate("/dashboard") }}>Dashboard</button> <button className="btn btn-outline-primary is-btn" onClick={() => { setAuthed(false) }}>Logout</button></span></h5>
                }
                <h1>
                    <Link className="is-header syne-b" to="/"
                        onClick={() => {
                            if (didRefresh) {
                                window.location.href="/";
                            }
                        }}
                    >
                        <span className="syne-b">
                            Mapeamento de pesquisadores em Artes no Brasil</span>
                    </Link>
                </h1>
            </div>
        </div>
    );
}
