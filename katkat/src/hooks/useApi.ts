import { useEffect, useState } from "react"
import { TState } from "../types";

export default (endpoint: string) => {
    const [data, setData] = useState();
    const [state, setState] = useState<TState>('pending');
    useEffect(() => {
        (async() => {
            try {
                const response = await fetch("http://localhost:5000" + endpoint, {
                    credentials: "include"
                })
                const data = await response.json();
                setData(data);
                setState('success')
            } catch (error) {
                setState('error')
                console.log(error)
            }
        })();
    }, [])

    return {data, state}
}