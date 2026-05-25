import "./styles.css";

const Paginador = ({next, prev, page, totalPages, setPage}: {
  next: boolean,
  prev: boolean,
  page: number,
  totalPages: number,
  setPage: (page: number) => void,
}) => {

  const paginas = [
      1,
      2,
      3,
      page,
      totalPages - 2,
      totalPages - 1,
      totalPages
  ];

  const paginasFinales = [...new Set(paginas)]
    .filter((e) => e > 0 && e <= totalPages);

  return(
      <div className="PaginadorContainer">
        {prev && <div className="arrowContainer" onClick={()=>{
            setPage(page-1);
        }}><p>{"<"}</p></div>}


        <div className="numeroContainer" onClick={()=>{ 
            setPage(1); 
        }}><p>1</p></div>

        {totalPages >= 2 && <div className="numeroContainer" onClick={()=>{ 
            setPage(2); 
        }}><p>2</p></div>}

        {totalPages >= 3 && <div className="numeroContainer" onClick={()=>{
            setPage(3); 
        }}><p>3</p></div>}

        {page > 3 && page < totalPages - 2 && (
            <div className="numeroContainer" onClick={()=>{ setPage(page); }}>
                <p>{page}</p>
            </div>
        )}

        {totalPages-2 > 3 && <div className="numeroContainer" onClick={()=>{ 
            setPage(totalPages-2); 
        }}><p>{totalPages-2}</p></div>}

        {totalPages-1 > 3 && <div className="numeroContainer" onClick={()=>{ 
            setPage(totalPages-1); 
        }}><p>{totalPages-1}</p></div>}

        {totalPages > 3 && <div className="numeroContainer" onClick={()=>{ 
            setPage(totalPages); 
        }}><p>{totalPages}</p></div>}



        {next && <div className="arrowContainer" onClick={()=>{
            setPage(page+1);
        }}><p>{">"}</p></div>}

      </div>
  )
}

export default Paginador;