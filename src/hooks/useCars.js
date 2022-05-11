import { useEffect, useState } from "react";

const useCars = () => {
    
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);
    return[inventories,setInventories]
}
export default useCars;