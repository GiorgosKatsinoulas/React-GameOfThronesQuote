import React, { useState, useEffect } from 'react';

function Quote() {

    const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random";
    const [data, setData] = useState({
        sentence: "",
        character: {
            name: "", slug: "",
            house: {
                name: "", slug: ""
            }
        }
    });
    const [isLoaded, setIsloaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        Fetch();
    }, []);

    async function Fetch() {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsloaded(true);
                    setData(result);
                },
                (error) => {
                    setIsloaded(true);
                    setError(error);
                }
            )
    }


    function Generate() {
        Fetch();
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (

            <div>
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Quote</th>
                            <th>Name</th>
                            <th>House</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ width: "20rem" }}>
                                {data.sentence}
                            </th>
                            <th style={{ width: "20rem" }}>
                                {data.character.name}
                            </th>
                            <th style={{ width: "20rem" }}>
                                {data.character.house.name}
                            </th>
                        </tr>
                    </tbody>
                </table>

                <button className="btn btn-primary" onClick={Generate}>Generate</button>
            </div>

        )
    }
}


export default Quote









