import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div class="row">
            <div class="col col-lg-9 border-bottom border-dark border-3 pb-3">
                <h1>
                    <Link class="text-decoration-none link-dark syne-b" to="/">
                        <span class="syne-xb">Mapeamento</span><br/>
                        de pesquisadores em arte no contexto <span class="syne-xb">brasilero</span>
                    </Link>
                </h1>
            </div>
        </div>
    );
}
