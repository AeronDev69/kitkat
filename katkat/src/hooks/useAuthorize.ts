import { useEffect, useState } from "react";
import { TState } from "../types";

export default () =>{
    const [isAuthorize, setIsAuthorize] = useState<TState>("pending");

    useEffect(() => {
        (async () => {
            const url = "http://localhost:5000/api/auth";
            const response = await fetch(url, {
                credentials: "include",
                method: "GET"
            });
            if(response.status === 200) setIsAuthorize("success")
            else setIsAuthorize("error");
        })();
    }, [])

    return isAuthorize;
}