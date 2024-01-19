import React, {useState,useEffect} from "react";
import "./Fetch.css"

export default function FetchComments() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
            } catch (err) {
                setData(null);
            }
        };
        getData();
    }, []);


    return (

    <div className="fetch">

        <h1>USER COMMENT API</h1>

            <ol>

                {data.slice(0, value + 10).map(({ postId,id,name,email, body }) => (
                    <li>

                        <p>
                            <b>POST ID:</b> {postId}
                        </p>
                        <p>
                            <b>ID:</b> {id}
                        </p>
                        <p>
                            <b>TITLE:</b> {name}
                        </p>
                        <p>
                            <b>EMAIL ID:</b> <span>{email}</span>
                        </p>
                        <p>
                            <b>BODY TEXT:</b> {body}
                        </p>
                        {/* <button onClick="User">edit</button> */}
                    </li>

                ))}
            </ol>
            <button
                onClick={() => {
                    if (value - 10 < 0) {
                        setValue(0);
                    } else {
                        setValue(value - 10);
                    }
                }}
            >
                Back
            </button>
            <button
                onClick={() => {
                    if (value + 10 > 100) {
                        setValue(90);
                    } else {
                        setValue(value + 10);
                    }
                }}
            >
                Next
            </button>


        </div>
    );
}