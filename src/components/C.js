import React from "react";
import { useContext } from "react";
import { Fname } from "../App";

const C = () => {
  const fName = useContext(Fname);
  return (
    <>
      <h1>{fName}</h1>
    </>
  )
};

export default C;
