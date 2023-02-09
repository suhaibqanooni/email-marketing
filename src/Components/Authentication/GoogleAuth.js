import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import AppleLogin from "react-apple-login";
import axios from "axios";
import {
  saveAppleUser,
  saveFacebookUser,
  saveGoogleUser,
} from "../../Api/Authentication";

function GoogleAuth() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState();

  const signin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  const signinApple = () => {
    alert("Apple Signin");
    saveAppleUser("Apple User");
  };
  const signinFacebook = () => {
    alert("Facebook Signin");
    saveFacebookUser("Facebook User");
  };
  const getUserDetails = async () => {
    if (user) {
      await axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .then(() => {
          console.log("User Profile: ", profile);
          saveGoogleUser(profile);
          // window.location.replace("/");
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [profile]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Verified: {profile.verified_email ? "Yes" : "No"}</p>
          <p>Family Name: {profile.family_name}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div>
            <button
              style={{
                background: "none",
                border: "none",
                margin: 0,
              }}
              onClick={() => signin()}
            >
              <img
                width={70}
                height={35}
                src="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Clipart.png"
                alt="google logo"
              />
            </button>
          </div>
          <div>
            <AppleLogin
              clientId="YOUR_CLIENT_ID"
              redirectURI="YOUR_REDIRECT_URL"
              usePopup={true}
              callback="" // Catch the response
              scope="email name"
              responseMode="query"
              render={(
                renderProps //Custom Apple Sign in Button
              ) => (
                <button
                  onClick={() => signinApple()}
                  style={{
                    background: "none",
                    border: "none",
                    margin: 0,
                  }}
                >
                  <img
                    width={70}
                    height={30}
                    src="https://www.pngmart.com/files/10/Apple-Logo-PNG-Photos.png"
                    alt="apple logo"
                  />
                </button>
              )}
            />
          </div>
          <div>
            <button
              style={{
                background: "none",
                border: "none",
                margin: 0,
              }}
              onClick={() => signinFacebook()}
            >
              <img
                width={80}
                height={40}
                src="https://www.pngmart.com/files/3/Facebook-Logo-PNG-Pic.png"
                alt="facebok logo"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default GoogleAuth;
