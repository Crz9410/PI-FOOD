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
    diets: [],
  });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    image: "",
    summary: "",
    healthy: "",
    steps: "",
  });

  // const changeHandler = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;

  //   setForm({ ...form, [property]: value });
  // };
  const handleChange = (event) => {
    // const selectedDiets = Array.from(event.target.selectedOptions, (option) => option.value);
    // setForm({ ...form, diets: selectedDiets });
    const propiedad = event.target.name
    const value = event.target.value
    if (propiedad === "diets") {
      if (form.diets.includes(value) || value === "") {
        if (form.diets.includes(value)) {
          alert(`La dieta ${value} ya fue seleccionada`)
        }
      } else {
        setForm({ ...form, diets: [...form.diets, value] })
      }
    } else {
      setForm({ ...form, [propiedad]: value })
    }
  };

  const borrarHandler = (dieta) => {
    const newDiet = form.diets.filter((d) => d !== dieta)
    setForm({ ...form, diets: newDiet })
    
  };


  const validate = () => {
    const newErrors = {
      id: "",
      name: "",
      image: "",
      summary: "",
      healthy: "",
      steps: "",
    };

    if (form.name.trim() === "") {
      newErrors.name = "Nombre vacío";
    } else if (form.name.length > 80) {
      newErrors.name = "El nombre debe ser MENOR o igual a 80 caracteres";
    } else if (form.name.length < 2) {
      newErrors.name = "El nombre debe ser MAYOR o igual a 2 caracteres";
    } else if (!/^[a-zA-ZñÑ]+(([',. -][a-zA-ZñÑ ])?[a-zA-ZñÑ]*)*$/.test(form.name)) {
      newErrors.name = "El nombre tiene algún carácter no permitido";
    }

    if (form.healthy !== "" && (isNaN(form.healthy) || form.healthy < 1 || form.healthy > 100)) {
      newErrors.healthy = "El Healthy debe ser un número entre 1 y 100";
    } else if (form.healthy.trim() === "") {
      newErrors.healthy = "Healthy vacío";
    }

    if (form.summary.trim() === "") {
      newErrors.summary = "Summary vacío";
    } else if (form.summary.length < 3) {
      newErrors.summary = "El Summary debe ser Mayor o igual a 3 caracteres";
    } else if (form.summary.length > 6) {
      newErrors.summary = "El Summary debe ser MENOR o igual a 6 caracteres";
    }

    if (form.steps.trim() === "") {
      newErrors.steps = "Steps vacío";
    } else if (form.steps.length > 6) {
      newErrors.steps = "El Steps debe ser MENOR o igual a 6 caracteres";
    } else if (form.steps.length < 3) {
      newErrors.steps = "El Steps debe ser Mayor o igual a 3 caracteres";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === ""); // Devuelve true si no hay errores
  };

  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      image: "",
      summary: "",
      healthy: "",
      steps: "",
      diets: [],
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validate()) {
      setMessage("Por favor, complete o corrija correctamente todos los campos");
      return;
    }

    axios
      .post("http://localhost:3001/recipe", form)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setMessage("La receta fue creada exitosamente");
          resetForm();
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
          <label>T</label>
          <input type="text" value={form.id} onChange={handleChange} name="id" />
        </div><div>
          <label>Tipos de dieta:</label>
          <select name="diets" onChange={handleChange} value={form.diets} multiple>
            <option value="">
              -- Seleccionar dieta/es --
            </option>
            <option name="gluten free" value="gluten free">Gluten free</option>
            <option name="dairy free" value="dairy free">Dairy free</option>
            <option name="vegan" value="vegan">Vegan</option>
            <option name="pescatarian" value="pescatarian">Pescatarian</option>
            <option name="lacto ovo vegetarian" value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
            <option name="paleolithic" value="paleolithic">Paleolithic</option>
            <option name="primal" value="primal">Primal</option>
            <option name="whole 30" value="whole 30">Whole 30</option>
          </select>
        </div>
        <div>
          {form.diets.map((diet) => (
            <div key={diet} className="selected-diets" value="diet">
              {diet} <button onClick={() => borrarHandler(diet)} name={diet}>x</button>
            </div>
          ))}
        </div>
        <div>
          <label>Nombre de la receta</label>
          <input type="text" value={form.name} onChange={handleChange} name="name" />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Imagen de la receta</label>
          <input type="text" value={form.image} onChange={handleChange} name="image" />
        </div>
        <div>
          <label>Summary</label>
          <input type="text" value={form.summary} onChange={handleChange} name="summary" />
          {errors.summary && <span>{errors.summary}</span>}
        </div>
        <div>
          <label>Healthy</label>
          <input type="text" value={form.healthy} onChange={handleChange} name="healthy" />
          {errors.healthy && <span>{errors.healthy}</span>}
        </div>
        <div>
          <label>Steps</label>
          <input type="text" value={form.steps} onChange={handleChange} name="steps" />
          {errors.steps && <span>{errors.steps}</span>}
        </div>
        {message && <span>{message}</span>}
        <button type="submit">Crear receta</button>
      </form>
    </>
  );
};

export default Form;

