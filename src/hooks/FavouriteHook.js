import { useEffect, useState } from "react";

const useFavorites = ()=>{
    const [favorites, setFavorites] = useState("");
    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem("favorites")) || []
        setFavorites(stored)
    }, [])
    const toggleFavorite  =(id)=>{
        let updated;
        if(favorites.includes(id)){
            updated = favorites.filter((favId)=> favId !== id)
        }
        else{
            updated = [...favorites, id]
        }
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated))

    }
    return {
        favorites, 
        toggleFavorite
    }
}

export default useFavorites;