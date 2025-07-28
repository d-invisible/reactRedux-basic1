import React from "react";
import { useSelector } from "react-redux";

const Inside = () => {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);
  return (
    <>
      <h1 className="mb-4 text-6xl text-blue-500">{user.name}</h1>
      <h1 className="mb-4 text-4xl">{counter.count}</h1>
    </>
  );
};

export default Inside;
