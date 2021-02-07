import React, { useState, useEffect } from 'react';


function QuoteFive() {
    const [data, setData] = useState([]);
    const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random/5";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Fetch();
    }, []);

    async function Fetch() {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
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
                {data.map(d => (
                    <table className="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th>Quote</th>
                                <th>Name</th>
                                <th>House</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >

                                <th style={{ width: "20rem" }} >
                                    {d.sentence}
                                </th>
                                <th style={{ width: "20rem" }}>
                                    {d.character.name}
                                </th>
                                <th style={{ width: "20rem" }}>
                                    {d.character.house.name}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                ))}

                <button className="btn btn-primary" onClick={Generate} >Generate</button>
            </div>
        );
    }
}


export default QuoteFive