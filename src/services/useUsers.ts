import { useState, useEffect } from "react";
import { CanceledError } from "./api-client";
import userService, { ResData } from "./userService";


const useUsers = () => {
    const [users, setUsers] = useState<ResData[]>([]);
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const { request, cancel } = userService.getAll<ResData>();
      request
        .then((data) => {
          setUsers(data.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrMsg(err.message);
        });
  
      return () => cancel();
    }, []);

    return {users, errMsg, loading, setUsers, setErrMsg,setLoading}

}

export default useUsers;