import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function List ({
    error,
    isLoaded,
    setIsLoaded,
    filteredData,
    renderData
}) {


    // let param = useParams();

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState();

    // if (param.length > 0) {
    //     useEffect(() => {
    //         setLoading(true);
    //         fetch("/api/researcher/search/" + param)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setData(data);
    //             })
    //             .catch((err) => {
    //                 setError(err);
    //             })
    //             .finally(() => {
    //                 setLoading(false);
    //             });
    //     }, []);
    // } else {
    //     useEffect(() => {
    //         setLoading(true);
    //         fetch("/api/researchers")
    //             .then(res => res.json())
    //             .then(data => {
    //                 setData(data.researchers);
    //             })
    //             .catch((err) => {
    //                 setError(err);
    //             })
    //             .finally(() => {
    //                 setLoading(false);
    //             });
    //     }, []);
    // }


    // if (loading) {
    //     return <h1 className="text-primary">Loading...</h1>
    // }

    // if (error || !Array.isArray(data)) {
    //     return <p className="text-primary">There was an error loading your data!</p>;
    // }

    if (error) {
        return (
            <>{error.message}</>
        );
    } else if (!isLoaded) {
        return (
            <h2 className="text-primary">Carregando...</h2>
            );
    } else {
        return (
        <>
            {!!filteredData.length ? (
                renderData(filteredData)
            ) : (
                <h4 className="text-primary">Nenhum resultado encontrado.</h4>
             )}
        </>
        );
    }
}
