import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    categoria: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);


  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const withoutSpaces = user.nombre.trim();
    const nombrelIsValid = user.nombre.length > 3 && (user.nombre === withoutSpaces);
    const animalIsValid = user.animal.length > 6;

    if (!nombrelIsValid || !animalIsValid) {
      setError(true);

      if (!nombrelIsValid && !animalIsValid) {
        setErrorMessage("Por favor chequea que la información sea correcta");
      } else if (!nombrelIsValid) {
        setErrorMessage("Por favor chequea que la información sea correcta");
      } else {
        setErrorMessage("Por favor chequea que la información sea correcta");
      }

      return;
    }

    setIsLogged(true)
    console.log("data: ", user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={(e) => handleChange(e, "nombre")}
        />

        {error && errorMessage.includes("Por favor chequea que la información sea correcta") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}
        
    <input
          type="text"
          name="animal"
          onChange={(e) => handleChange(e, "animal")}
        />

        {error && errorMessage.includes("Por favor chequea que la información sea correcta") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <button type="submit">Ingresar</button>
      </form>

      {isLogged && (
        <Card nombre={user.nombre} animal={user.animal} />
      )}
    </div>
  );
};

export default Form;
