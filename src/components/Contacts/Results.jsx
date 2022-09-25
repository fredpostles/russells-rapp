import React from "react";
import Contact from "./Contact";

const Results = ({ results }) => {
  return results.map((result) => {
    return <Contact key={result.id} result={result} />;
  });
};

export default Results;
