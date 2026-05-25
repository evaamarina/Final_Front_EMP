"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { ResultCharactersT } from "../types/RicardoYMortirio";
import api from "@/api/api";
import CharacterChulangano from "../components/CharacterChulangano";
import Paginador from "../components/Paginador";
import Filtros from "../components/Filtros";

const CharactersPage = () => {
    const [resultCharacters, setResultCharacters] = useState<ResultCharactersT | null>(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const [status, setStatus] = useState("Dead");
    const [gender, setGender] = useState("Female");
    const [nombre, setNombre] = useState("");
    const [nombreBuscado, setNombreBuscado] = useState("");

    const buscarNombre = () => {
        setNombreBuscado(nombre);
        setPage(1);
    }

    const fetchCharacters = () => {
        try{
            api.get(`/character?page=${page}&status=${status}&gender=${gender}&name=${nombreBuscado}`).then((e)=>{
                const {data} : {data: ResultCharactersT} = e;
                setResultCharacters(data);
            }).catch(()=>{
                setResultCharacters(null);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e){
            alert(String(e));
        }
    }

    useEffect(()=>{
        fetchCharacters();
    },[page, status, gender, nombreBuscado]);

    if(loading){
        return(<h1>Loading...</h1>)
    }

    return (
        <div className="ContainerCharacters">
            <Filtros
                status={status}
                setStatus={setStatus}
                gender={gender}
                setGender={setGender}
                nombre={nombre}
                setNombre={setNombre}
                buscarNombre={buscarNombre}
                setPage={setPage}
            />

            {resultCharacters && <h2>Total personajes: {resultCharacters.info.count}</h2>}
            {!resultCharacters && <h1>No existen resultados</h1>}

            {resultCharacters && resultCharacters.results.map((e)=>(
                <CharacterChulangano key={e.id} personaje={e}/>
            ))}

            {resultCharacters && (
                <Paginador
                    next={!!resultCharacters.info.next}
                    prev={!!resultCharacters.info.prev}
                    page={page}
                    totalPages={resultCharacters.info.pages}
                    setPage={(e)=>{ setPage(e); }}
                />
            )}

        </div>
    )
};

export default CharactersPage;