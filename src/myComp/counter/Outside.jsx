import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Inside from "./Inside";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";

const Outside = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  return (
    <> 
    <div className="flex items-center gap-4 ">
    <div className="m-12 p-12 w-1/2 bg-white">
        <h1 className="text-4xl font-bold">Vanilla Redux</h1>
        <p className="text-2xl">Counter and user Reducer</p>
    </div>
      <div className="m-12 mr-12 w-full p-12 bg-blue-100 rounded-2xl">
        <Inside />
        <Button className="w-24 text-2xl bg-green-300 hover:bg-green-400" variant="secondary" onClick={() => dispatch({ type: "INC" })}>
          {" "}
          +{" "}
        </Button>
        <Button className="ml-2 w-24 text-2xl bg-red-300 hover:bg-red-400" variant="secondary" onClick={() => dispatch({ type: "DEC" })}>
          {" "}
          -{" "}
        </Button>
        <h1 className="mt-4 text-6xl">{user.loggedIn}</h1>
        <Input
          className="w-2/4 bg-white"
          type="text"
          placeholder="Enter name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <div className="mt-4">
          <Button
            className="bg-blue-500"
            onClick={() => {
              dispatch({ type: "LOGIN", payload: userName });
              setUserName('');
            }}
          >
            LOGIN
          </Button>
          {user.loggedIn && (
            <Button
              className="ml-4 bg-blue-500"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              LOGOUT
            </Button>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Outside;
