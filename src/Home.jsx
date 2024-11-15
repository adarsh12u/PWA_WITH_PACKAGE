import React, { useState, useEffect } from "react";

const Home = () => {
  const [token, setToken] = useState("");
console.log("some inside the data")
  // Fetch token from localStorage when the component mounts
  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem('msg_token');
    if (storedToken) {
      setToken(JSON.parse(storedToken)); // Parsing it if stored as JSON
    }
  }, []);

  // Function to copy the token to the clipboard
  const copyToClipboard = () => {
    if (token) {
      // Using Clipboard API for copying text
      navigator.clipboard.writeText(token)
        .then(() => {
          alert("Token copied to clipboard!");
        })
        .catch((err) => {
          console.error("Error copying token: ", err);
        });
    } else {
      alert("No token found in localStorage.");
    }
  };

  return (
    <div>
      <p>{token ? `Your Token: ${token}` : "No token available."}</p>
      <button onClick={copyToClipboard}>Copy Token</button>
    </div>
  );
};

export default Home;
