import { useEffect, useState } from "react";

const useCars = () => {
    
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);
    return[inventories,setInventories]
}
export default useCars;