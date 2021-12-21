import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Searched() {
    let param = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        setLoading(true);
        fetch("/api/researcher/search/" + param)
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
        <div className="border-bottom border-primary border-3 pb-3 text-primary">
            <h2>{data.length} pesquisadores encontrados.</h2>
        </div>
        <div className="text-primary mt-3">
            {data.map((item) => (
                <Link to={"researcher/" + item.id} key={item.id}>{item.name}<br/></Link>
            ))}
        </div>
        </>
    );
}
