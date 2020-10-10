import { useState, useEffect } from 'react';
const api = '.'; // URL de la base!

const useGetPets = () => {
    const [pets, setPets] = useState([]); 

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setPets(data))
    }, []);

    return pets;
}

export default useGetPets;