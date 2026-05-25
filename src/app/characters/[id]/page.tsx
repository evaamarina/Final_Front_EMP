"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/api/api";
import { CharacterT } from "@/app/types/RicardoYMortirio";

const CharacterDetailPage = () => {
    const params = useParams();
    const router = useRouter();

    const id = params.id;
    const [personaje, setPersonaje] = useState<CharacterT | null>(null);

    useEffect(() => {
        api.get(`/character/${id}`).then((e) => {
            setPersonaje(e.data);
        });
    }, []);

    if (!personaje) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="ContainerCharacterDetail">
            <img src={personaje.image} />
            <div className="InfoCharacterDetail">
                <h1>{personaje.name}</h1>
                <p><strong>ID:</strong> {personaje.id}</p>
                <p><strong>Estado:</strong> {personaje.status}</p>
                <p><strong>Especie:</strong> {personaje.species}</p>
                <p><strong>Género:</strong> {personaje.gender}</p>
                <p><strong>Origen:</strong> {personaje.origin.name}</p>
                <p><strong>Location:</strong> {personaje.location.name}</p>

                <button className="BackButton" onClick={() => router.back()}>
                    Volver
                </button>

            </div>

        </div>
    );
};

export default CharacterDetailPage;