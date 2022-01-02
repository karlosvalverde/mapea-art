import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ResearchersContext } from "../../context";

export default function Header() {
    const researchersContext = useContext(ResearchersContext);
    const {
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

    return (
        <div className="row">
            <div className="col col-lg-9 border-bottom border-dark border-3 pb-3">
                <h1>
                    <Link className="is-header syne-b" to="/"
                        onClick={() => {
                            if (didRefresh) {
                                window.location.href="/";
                            }
                        }}
                    >
                        <span className="syne-xb">Mapeamento</span><br/>
                        de pesquisadores em arte no contexto <span className="syne-xb">brasilero</span>
                    </Link>
                </h1>
            </div>
        </div>
    );
}
