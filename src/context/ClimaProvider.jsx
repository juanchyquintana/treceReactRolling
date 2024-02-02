import { createContext, useState } from "react";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [ pais, setPais ] = useState('')
    const [ ciudad, setCiudad ] = useState('')
    
    const [ resultado, setResultado ] = useState({})
    const [ cargando, setCargando ] = useState(false)
    const [ noResultado, setNoResultado ] = useState(false)

    const consultarClima = async (datos) => {
        setCargando(true)
        setNoResultado(false)

        try {
            const { ciudad, pais } = datos
            const appId = 'e28b71fb14c46e4c7ff9dfe09c383d9e'
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const respuesta = await fetch(url)
            const data = await respuesta.json()
            const { lat, lon } = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const respuestaClima = await fetch(urlClima)
            const dataClima = await respuestaClima.json()

            setResultado(dataClima)
        } catch (error) {
            setNoResultado('No hay resultados')
        } finally {
            setCargando(false)
        }

    }
  return (
    <ClimaContext.Provider
        value={{
            consultarClima,
            resultado,
            cargando,
            noResultado,
            setCiudad,
            ciudad,
            pais,
            setPais
        }}
    >
        {children}
    </ClimaContext.Provider>
  )
}

export { 
    ClimaProvider
}

export default ClimaContext
