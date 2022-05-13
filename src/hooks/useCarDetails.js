import { useEffect, useState } from "react";

const useCarDetail = inventoryId => {
    const [car, setCar] = useState({});
    useEffect(() => {
        const url = `https://polar-wildwood-53235.herokuapp.com/cars/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [inventoryId]);
    return [car]
}
export default useCarDetail;