
import React, { useContext } from "react";
import AuthContext from "../Contax/AuthContext";
const useAuth = () => {

    return useContext(AuthContext);

};

export default useAuth;