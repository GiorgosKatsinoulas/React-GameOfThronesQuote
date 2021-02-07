import React, { useState, useEffect } from 'react';


function House() {
    const [data, setData] = useState([]);
    const url = "https://game-of-thrones-quotes.herokuapp.com/v1/houses";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        Fetch();
    }, []);

    async function Fetch() {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setData(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
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
                                <th>Name</th>
                                <th>Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            <th>{d.name}</th>
                            <th style={{ width: "20rem" }}>
                                {d.members.map(m => (
                                    <tr>
                                        <th style={{ width: "20rem" }}>{m.name}</th>
                                    </tr>
                                ))}
                            </th>
                        </tbody>
                    </table>

                ))}

            </div>
        );
    }
}



export default House