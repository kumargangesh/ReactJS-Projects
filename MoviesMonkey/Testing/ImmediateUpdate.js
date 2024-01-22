import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function ImmediateUpdate() {

  const [pageNumber, changePageNumber] = useState(1);

  const previous = () => {
    if (pageNumber > 1) {
      console.log("previous clicked");
      changePageNumber((parseInt(pageNumber)) - 1);
      console.log("pagenumber : "+setPageNumber(pageNumber, 1));
    } else {
      alert("can't go previous");
    }
  }

  const next = () => {
    if (pageNumber < 5) {
      console.log("next clicked");
      changePageNumber((parseInt(pageNumber)) + 1);
      console.log("pagenumber : "+setPageNumber(pageNumber, 0));
    } else {
      alert("can't go next");
    }
  }

  const setPageNumber =(page, operand) => {
    if(operand === 0){
      return (parseInt(page))+1;
    }else if(operand === 1){
      return (parseInt(page))-1;
    }
  }

  return (
    <div>
      <center><h1>{pageNumber}</h1></center>
      <div className="container d-flex justify-content-between">
        <button className="btn btn-outline-success" onClick={previous}>Previous</button>
        <button className="btn btn-outline-success" onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default ImmediateUpdate;
