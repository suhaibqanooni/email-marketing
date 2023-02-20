import axios from "axios";
import React, { useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import PlaidAuth from "./PlaidAuth";
function PlaidTesting(props) {
  const [publicToken, setPublicToken] = useState();
  const [linkToken, setLinkToken] = useState();

  let data = {}
  axios.defaults.baseURL = "http://localhost:5873";
  axios.defaults.headers.common["Content-Type"] = "application/json"
  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhIjp0cnVlLCJlIjoiamFtc2hhaWRzYWJpcjQxMTk4MEBnbWFpbC5jb20iLCJkIjoiNjNjOWI3NDU0NjRlYWE3MmUwMzNlN2ZhIiwicCI6Ii91cGxvYWRzL2RwL2RlZmF1bHQucG5nIiwiciI6Il9hIiwiaWF0IjoxNjc2OTEyNjkzfQ.AtugHWXbB_ZPtZQsSou-Pr0vlTXfpscrhX_TBjgDlgw";

  const createLinkToken = async () => {
    console.log("createLinkToken called")
    await axios.post("/transactions/create_link_token", data).then((response) => {
      console.log("Response: ", response.data);
      setLinkToken(response.data.link_token);
    });
  };

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      console.log("useplaidLink success called")
      setPublicToken(public_token);
      console.log("Public Token: ", public_token, metadata);
    },
  });

  return publicToken ? (
    <PlaidAuth publicToken={publicToken} />
  ) : (
    <div
      style={{
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => createLinkToken()}>create_link_token</button>

      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
    </div>
  );
}

export default PlaidTesting;

// "expiration": "2023-02-09T23:35:26Z",
// "link_token": "link-sandbox-99028df0-9320-4c3c-a564-ffda1443ef71",
// "request_id": "8klYlvIJ8bOtKse"

//Public Token: public-sandbox-48ca3fa5-4c97-40f4-a026-e252e8f3bd1f
