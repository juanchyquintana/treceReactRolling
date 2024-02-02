import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"

const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()

  return (
    <>
        <main className="row">
            <div className="col-md-6">
                <Formulario />
            </div>

            <div className="col-md-6">
                <div className="bg-white my-5 p-3">
                    { cargando ? <Spinner /> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p className="text-center fw-bold">Realice una busqueda, por favor.</p> 
                    }
                </div>
            </div>
        </main>
    </>
  )
}

export default AppClima