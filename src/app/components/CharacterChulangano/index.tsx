"use client";

import { useRouter } from "next/navigation";
import { CharacterT } from "@/app/types/RicardoYMortirio";
import "./styles.css";

const CharacterChulangano = ({ personaje }: { personaje: CharacterT }) => {
    const router = useRouter();

    return (
        <div className="ContainerCharacterChulangano" onClick={() => router.push(`/characters/${personaje.id}`)}>
            <img src={personaje.image} />
            <div className="InfoCharacterContainer">
                <h1>{personaje.name}</h1>
                <p>Género: {personaje.gender}</p>
                <p>Estado: {personaje.status}</p>
                <p>Origen: {personaje.origin.name}</p>
            </div>
        </div>
    );
};

export default CharacterChulangano;