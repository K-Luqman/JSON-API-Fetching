import React, { useState, useEffect } from "react";
import "../App.css";

export default function FetchUsers() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [detailsType, setDetailsType] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
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

  const handleToggleDetails = (index, type) => {
    if (selectedUserIndex === index) {
      setSelectedUserIndex(null);
      setDetailsType(null);
    } else {
      setSelectedUserIndex(index);
      setDetailsType(type);
    }
  };

  return (
    <div className="fetch">
      <h1>USERS API</h1>

      <ol>
        {data.slice(0, value + 1).map((user, index) => (
          <li key={user.id}>
            <p>
              <b>ID:</b> {user.id}
            </p>
            <p>
              <b>NAME:</b> {user.name}
            </p>
            <p>
              <b>USERNAME:</b> {user.username}
            </p>
            <p>
              <b>EMAIL ID:</b> <span>{user.email}</span>
            </p>

            <p>
              <b>ADDRESS DETAILS</b>{" "}
              <button onClick={() => handleToggleDetails(index, "address")}>
                {detailsType === "address" ? "HIDE DETAILS" : "SHOW DETAILS"}
              </button>
            </p>

            {detailsType === "address" && selectedUserIndex === index && (
              <>
                <p>
                  <b>ADDRESS LINE 1:</b> {user.address.suite} {user.address.street}
                </p>
                <p>
                  <b>CITY:</b> {user.address.city}
                </p>
                <p>
                  <b>ZIPCODE:</b> {user.address.zipcode}
                </p>
              </>
            )}

            <p>
              <b>PERSONAL DETAILS</b>{" "}
              <button onClick={() => handleToggleDetails(index, "personal")}>
                {detailsType === "personal" ? "HIDE DETAILS" : "SHOW DETAILS"}
              </button>
            </p>

            {detailsType === "personal" && selectedUserIndex === index && (
              <>
                <p>
                  <b>PHONE NUMBER:</b> {user.phone}
                </p>
                <p>
                  <b>WEBSITE:</b> {user.website}
                </p>
              </>
            )}

<p>
              <b>COMPANY DETAILS</b>{" "}
              <button onClick={() => handleToggleDetails(index, "company")}>
                {detailsType === "personal" ? "HIDE DETAILS" : "SHOW DETAILS"}
              </button>
            </p>

            {detailsType === "company" && selectedUserIndex === index && (
              <>
                <p>
                  <b>NAME:</b> {user.company.name}
                </p>
                <p>
                  <b>TYPE:</b> {user.company.bs}
                </p>
                <p>
                  <b>SLOGAN:</b> {user.company.catchPhrase}
                </p>
              </>
            )}
          </li>
        ))}
      </ol>
      <button
        onClick={() => {
          if (value - 1 < 0) {
            setValue(0);
          } else {
            setValue(value - 1);
          }
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          if (value + 1 > 10) {
            setValue(9);
          } else {
            setValue(value + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}
