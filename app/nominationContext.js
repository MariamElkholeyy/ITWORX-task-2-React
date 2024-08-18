import { createContext, useState } from 'react';

const NominationContext = createContext({
  nominees: [], // Initialize nominees as an empty array
  setNominees: () => {} // Initialize setNominees as an empty function
});

const NominationProvider = ({ children }) => {
  const [nominees, setNominees] = useState([]);

  return (
    <NominationContext.Provider value={{ nominees, setNominees }}>
      {children}
    </NominationContext.Provider>
  );
};

export { NominationProvider, NominationContext }; 