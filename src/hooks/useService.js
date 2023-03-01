import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://star-furniture-server-lemon.vercel.app/products")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useService;