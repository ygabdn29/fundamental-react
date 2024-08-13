import { useEffect, useState } from "react";

function VerifyEmail() {
  const pathName = window.location.pathname;
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    async function verifyEmail() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/account${pathName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setStatus(data.message);
      } catch (error) {
        setStatus(error);
      }
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
