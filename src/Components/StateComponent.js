// Use state need to import usestate first
import React, { useState } from "react";
import { sculptureList } from "../data";

export default function PortraitGallery() {
  // useState(0) means init index with 0
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h1>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h1>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt}></img>
    </>
  );
}
