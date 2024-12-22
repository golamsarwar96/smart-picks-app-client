import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-4xl">{user.email}</h1>
    </div>
  );
};

export default MyQueries;
