import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
    let param = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        setLoading(true);
        fetch("/api/researcher/" + param.id)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        console.log(data);
        // console.log("TEST: " + props.match.params.id);
        return <h1 className="text-primary">Loading...</h1>
    }

    // if (error || !Array.isArray(data)) {
    //     console.log(data);
    //     // console.log("TEST: " + props.match.params.id);
    //     return <p className="text-primary">There was an error loading your data!</p>;
    // }

    return (
        <>
            <div className="row mb-3 w-100 sticky-top bg-dark">
                <Link className="link-secondary" to="/">&larr; Voltar</Link>
            </div>
            <div className="text-primary text-break">
                <p><span className="fw-bold">Nome:</span><br/>
                    {data.name}
                </p>
                <p><span className="fw-bold">Estado:</span><br/>
                    {data.state}
                </p>
                <p><span className="fw-bold">Contacto:</span><br/>
                    {data.contact}
                </p>
                <p><span className="fw-bold">Web:</span><br/>
                    <a href={data.web} target="_blank">{data.web}</a>
                </p>
                <p><span className="fw-bold">Universidade:</span><br/>
                    {data.university}
                </p>
                <p><span className="fw-bold">Rol:</span><br/>
                    {data.role}
                </p>
                <p><span className="fw-bold">Campo:</span><br/>
                    {data.research_field}
                </p>
                <p><span className="fw-bold">Palavras chave:</span><br/>
                    {data.keywords}
                </p>
            </div>
        </>
    );
}
