import { useEffect, useState } from "react";

const useCars = () => {
    
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://polar-wildwood-53235.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);
    return[inventories,setInventories]
}
export default useCars;