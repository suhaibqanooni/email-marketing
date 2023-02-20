import axios from "axios";
import React, { useEffect, useState } from "react";

function PlaidAuth({ publicToken }) {
  const [accessToken, setAccessToken] = useState();
  const [authUser, setAuthUser] = useState();
  axios.defaults.baseURL = "http://localhost:5873";
  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhIjp0cnVlLCJlIjoianVuYWlkQGdtYWlsLmNvbSIsImQiOiI2M2M4MzdlMzQzNDdmNjA3MDRhMDY4YjQiLCJwIjoiL3VwbG9hZHMvZHAvZGVmYXVsdC5wbmciLCJyIjoiX2EiLCJpYXQiOjE2NzQwNjU5NDZ9.BaWhg-9bD7nWopRS8DgmuCjog5VTLLBSzeB8Ml-m7fw";

  const fetchAccessToken = async () => {
    await axios
      .post("/transactions/exchange_public_token", {
        public_token: publicToken,
      })
      .then((accessToken) => {
        console.log("Access Token: ", accessToken.data);
        setAccessToken(accessToken.data.accessToken);
      });
  };
  const getAuth = async () => {
    await axios
      .post("/transactions/auth", {
        access_token: accessToken,
      })
      .then((userAuth) => {
        console.log(userAuth);
        console.log("Auth User: ", userAuth.data.data);
        setAuthUser(userAuth.data.data);
      });
  };
  return (
    <div>
      <h1>{publicToken}</h1>
      <button onClick={() => fetchAccessToken()}>Get Access Token</button>
      {accessToken ? <button onClick={() => getAuth()}>Get Auth</button> : null}
      {authUser ? (
        <>
          <h1>Accounts Details</h1>
          <p>
            <strong>Total Accounts: </strong>
            {authUser.accounts.length}
          </p>
          <p>
            <strong>Account ID: </strong>
            {authUser.accounts[0].account_id}
          </p>
          <p>
            <strong>Account Name: </strong>
            {authUser.accounts[0].name} ({authUser.accounts[0].official_name})
          </p>
          <p>
            <strong>Account Type: </strong>
            {authUser.accounts[0].type}
          </p>
          <p>
            <strong>Available Balance: </strong>
            {authUser.accounts[0].balances.available}
          </p>
          <p>
            <strong>Current Balance: </strong>
            {authUser.accounts[0].balances.current}
          </p>
          <p>
            <strong>Currency: </strong>
            {authUser.accounts[0].balances.iso_currency_code}
          </p>

          <p>
            <strong>Total Products: </strong>
            {authUser.item.available_products.length}
          </p>
        </>
      ) : null}
    </div>
  );
}

export default PlaidAuth;
