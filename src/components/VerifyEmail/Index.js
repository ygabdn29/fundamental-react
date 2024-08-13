import { useEffect, useState } from "react";

function VerifyEmail() {
  const pathName = window.location.pathname;
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    function verifyEmail() {
      fetch(`http://localhost:8080/api/account${pathName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setStatus(data.message));
    }
    verifyEmail();
  }, []);

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
}

export default VerifyEmail;
