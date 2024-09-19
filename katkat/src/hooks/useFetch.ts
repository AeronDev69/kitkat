import { useEffect, useState } from "react"
import { TState } from "../types";

export default (url: string, options: Partial<Request>) => {
    const [state, setState] = useState<TState>("pending");
    const [data, setData] = useState<any>();

    useEffect(() =>{
        (async() =>{
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                if(response.status !== 200) {
                    setState("error");
                    return;
                }
                setState("success");
                setData(data);
            } catch (err) {
                setState("error")
                return console.log(err)
            }
        })();

    }, [])
    return {state, data};
}