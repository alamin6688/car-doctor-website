import axios from "axios";
import { useEffect, useState } from "react";


const useNumber = () => {
    const [number, setNumbers] = useState(0);
    useEffect(()=>{
        axios.get('/getNumber')
        .then(res =>{
            setNumbers(res.data);
        })
    },[])
    return number;
};

export default useNumber;