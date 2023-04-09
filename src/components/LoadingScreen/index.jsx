import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "./loadingscreen.css";

import logo from "../../assets/img/logo.png";

export default function LoadingScreen({
  elements,
  elementsLoaded,
  loading,
  setLoading,
}) {
  const [progress, setProgress] = React.useState(0);
  const [show, setShow] = React.useState("show");

  useEffect(() => {
    if (loading) {
      setShow("show");
      if (elements > 0 && elementsLoaded === elements) {
        setTimeout(() => {
          setLoading(false);
          setShow("hide");
        }, 500);
      }
    } else {
      setShow("hide");
    }

    // console.log(elementsLoaded + "/" + elements);
  }, [loading, elementsLoaded, elements, setLoading]);

  useEffect(() => {
    setProgress(
      (elementsLoaded / elements) * 100 > 100
        ? 100
        : (elementsLoaded / elements) * 100
    );
  }, [elementsLoaded, elements]);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [loading]);

  React.useEffect(() => {
    if (elementsLoaded < elements && elements > 0) {
      setLoading(true);
    }
  }, []);

  const variantes = {
    hide: {
      // y: "-100%",
      opacity: 0,
    },
    show: {
      // y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="loadingscreen"
      variants={variantes}
      animate={show}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden", display: "flex" }}
    >
      <div className="loadingscreen__container">
        <img src={logo} alt="" />
      </div>
      <div className="loadingscreen__container__gradient"></div>
    </motion.div>
  );
}
