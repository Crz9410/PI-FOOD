import { useState } from "react";
import axios from "axios";
import styles from './Form.module.css';

const Form = () => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    id: "",
    name: "",
    image: "",
    summary: "",
    healthy: "",
    steps: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    image: "",
    summary: "",
    healthy: "",
    steps: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      image: "",
      summary: "",
      healthy: "",
      steps: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      form.id.trim() === "" ||
      form.name.trim() === "" ||
      form.image.trim() === "" ||
      form.summary.trim() === "" ||
      form.healthy.trim() === "" ||
      form.steps.trim() === ""
    ) {
      setMessage("Por favor, complete todos los campos");
      return;
    }

    axios
      .post("http://localhost:3001/recipe", form)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setMessage("La receta fue creada exitosamente");
          resetForm(); // Reiniciar el formulario después de una creación exitosa
        } else {
          setMessage("Verifique los datos ingresados");
        }
      })
      .catch((err) => {
        setMessage("Verifique los datos ingresados");
      });
  };

  return (
    <>
      <div className={styles.title_activities}>
        <h1>Recetas</h1>
      </div>

      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label>Id de la receta</label>
          <input type="text" value={form.id} onChange={changeHandler} name="id" />
        </div>
        <div>
          <label>Nombre de la receta</label>
          <input type="text" value={form.name} onChange={changeHandler} name="name" />
        </div>
        <div>
          <label>Imagen de la receta</label>
          <input type="text" value={form.image} onChange={changeHandler} name="image" />
        </div>
        <div>
          <label>Summary</label>
          <input type="text" value={form.summary} onChange={changeHandler} name="summary" />
        </div>
        <div>
          <label>Healthy</label>
          <input type="text" value={form.healthy} onChange={changeHandler} name="healthy" />
        </div>
        <div>
          <label>Steps</label>
          <input type="text" value={form.steps} onChange={changeHandler} name="steps" />
        </div>
        {message}
        <button type="submit">Crear receta</button>
      </form>
    </>
  );
};

export default Form
