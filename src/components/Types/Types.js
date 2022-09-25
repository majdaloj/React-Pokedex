import React from "react";
import Type from "../Type/Type";

const Types = ({ typesCollection }) => {
  return (
    <>
      {typesCollection.map((typeObject, index) => {
        return <Type typeObject={typeObject} key={index} />;
      })}
    </>
  );
};

export default Types;
