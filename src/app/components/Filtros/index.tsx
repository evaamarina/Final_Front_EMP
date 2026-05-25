import "./styles.css";

const Filtros = ({status, setStatus, gender, setGender, nombre, setNombre, buscarNombre, setPage}: {
    status: string,
    setStatus: (status: string) => void,
    gender: string,
    setGender: (gender: string) => void,
    nombre: string,
    setNombre: (nombre: string) => void,
    buscarNombre: () => void,
    setPage: (page: number) => void
}) => {

    const cambiarStatus = () => {
        setPage(1);
        if(status === "Dead"){
            setStatus("Alive");
        } else if(status === "Alive"){
            setStatus("unknown");
        } else{
            setStatus("Dead");
        }
    };

    const cambiarGender = () => {
        setPage(1);
        if(gender === "Female"){
            setGender("Male");
        } else if(gender === "Male"){
            setGender("Genderless");
        } else if(gender === "Genderless"){
            setGender("unknown");
        } else{
            setGender("Female");
        }
    };

    return (
        <div className="ContainerFiltros">
            <button className="BotonFiltro" onClick={cambiarStatus}>
                Estado: {status}
            </button>

            <button className="BotonFiltro" onClick={cambiarGender}>
                Género: {gender}
            </button>

            <input
                placeholder="Buscar personaje"
                value={nombre}
                onChange={(e)=>{
                    setNombre(e.target.value);
                }}
            />

            <button className="BotonFiltro" onClick={buscarNombre}>
                Buscar
            </button>

        </div>

    );
};

export default Filtros;