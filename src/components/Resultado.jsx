import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima();
  const { name, main } = resultado;

  const kelvin = 273.15

  return (
    <section>
      <h5 className="text-center">El Clima de {name}: es</h5>

      <p className="text-center fw-bold fs-1 pt-2">
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>

    </section>
  )
}

export default Resultado