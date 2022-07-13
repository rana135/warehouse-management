import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://tranquil-beyond-66752.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useService;