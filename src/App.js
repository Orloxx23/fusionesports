import React, { useEffect } from "react";
import Router from "./routes";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
