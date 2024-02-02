import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const paises = [
    { value: "US", label: "Estados Unidos" },
    { value: "MX", label: "México" },
    { value: "AR", label: "Argentina" },
    { value: "BR", label: "Brasil" },
    { value: "CO", label: "Colombia" },
    { value: "PE", label: "Perú" },
    { value: "CR", label: "Costa Rica" },
    { value: "ES", label: "España" },
  ];

  const [alerta, setAlerta] = useState("");
  const { pais, setPais, ciudad, setCiudad, consultarClima } = useClima();

  const datos = {
    pais: pais,
    ciudad: ciudad,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([pais, ciudad].includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarClima(datos);

    setPais("");
    setCiudad("");
  };

  return (
    <section className="py-5">
      {alerta && <p>{alerta}</p>}

      <Form className="bg-white p-3 shadow rounded" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            id="ciudad"
            name="ciudad"
            placeholder="Ingrese una ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pais</Form.Label>
          <Form.Select
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          >
            <option value="">-- Seleccione un País</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="CO">Colombia</option>
            <option value="PE">Perú</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" className="w-100" type="submit">
          Consular Clima
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
