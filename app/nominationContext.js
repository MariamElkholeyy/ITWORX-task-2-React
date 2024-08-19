import { createContext, useState, useEffect } from "react";

const NominationContext = createContext();

const NominationProvider = ({ children }) => {
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/nominees")
      .then(response => response.json())
      .then(data => setNominees(data));
  }, []);

  return (
    <NominationContext.Provider value={{ nominees }}>
      {children}
    </NominationContext.Provider>
  );
};

export { NominationProvider, NominationContext };