import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div class="row">
            <h1>
                <Link class="text-decoration-none link-dark" to="/">
                    Mapeamento de pesquisadores em arte no contexto brasilero
                </Link>
            </h1>
        </div>
    );
}
