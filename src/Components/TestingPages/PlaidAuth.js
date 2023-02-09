import axios from "axios";
import React, { useEffect, useState } from "react";

function PlaidAuth({ publicToken }) {
  const [accessToken, setAccessToken] = useState();
  axios.defaults.baseURL = "http://localhost:5873";
  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhIjp0cnVlLCJlIjoianVuYWlkQGdtYWlsLmNvbSIsImQiOiI2M2M4MzdlMzQzNDdmNjA3MDRhMDY4YjQiLCJwIjoiL3VwbG9hZHMvZHAvZGVmYXVsdC5wbmciLCJyIjoiX2EiLCJpYXQiOjE2NzQwNjU5NDZ9.BaWhg-9bD7nWopRS8DgmuCjog5VTLLBSzeB8Ml-m7fw";

  const fetchAccessToken = async () => {
    await axios
      .post("/stripePayment/exchange_public_token", {
        public_token: publicToken,
      })
      .then((accessToken) => {
        console.log("Access Token: ", accessToken.data);
        setAccessToken(accessToken.data.accessToken);
      });
  };
  const getAuth = async () => {
    await axios
      .post("/stripePayment/auth", {
        access_token: accessToken,
      })
      .then((userAuth) => {
        console.log(userAuth);
      });
  };
  return (
    <div>
      <h1>{publicToken}</h1>
      <button onClick={() => fetchAccessToken()}>Get Access Token</button>
      {accessToken ? <button onClick={() => getAuth()}>Get Auth</button> : null}
    </div>
  );
}

export default PlaidAuth;
