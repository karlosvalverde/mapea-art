import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="row">
            <div className="col col-lg-9 border-bottom border-dark border-3 pb-3">
                <h1>
                    <Link className="text-decoration-none link-dark syne-b" to="/">
                        <span className="syne-xb">Mapeamento</span><br/>
                        de pesquisadores em arte no contexto <span className="syne-xb">brasilero</span>
                    </Link>
                </h1>
            </div>
        </div>
    );
}
