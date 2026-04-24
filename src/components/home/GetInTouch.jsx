import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{message}</p>
      {email && <a href={email}>{email}</a>}
    </>
  );
};

export default GetInTouch;
