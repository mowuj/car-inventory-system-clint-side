import { useEffect, useState } from "react";

const useCars = () => {
    
    const [cars, setcars] = useState([]);
    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setcars(data))
    }, []);
    return[cars,setcars]
}
export default useCars;