import { useState } from "react"
import axios from "axios"
import styles from './Form.module.css';
const Form = () => {

    const [form, setform] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        body: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        body: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        // validate({...form, [property]:value})

        setform({ ...form, [property]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/activities", form)
            .then(res => {
                console.log(res, "h")
            })
            .catch(err => {
                console.log(err, "ño")
            })
    };

    return (
        <> <div className={styles.title_activities}>
            <h1>Actividades</h1>

        </div>

            <form  className={styles.form} onSubmit={submitHandler}>
                <div>
                    <label>Nombre de la actividad</label>
                    <input type="text" value={form.name} onChange={changeHandler} name="name" />
                </div>
                <div>
                    <label>Dificultad</label>
                    <input type="text" value={form.dificultad} onChange={changeHandler} name="dificultad" />
                </div>
                <div>
                    <label>Duracion</label>
                    <input type="text" value={form.duracion} onChange={changeHandler} name="duracion" />
                </div>
                <div>
                    <label>Temporada</label>
                    <input type="text" value={form.temporada} onChange={changeHandler} name="temporada" />
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type="text" value={form.body} onChange={changeHandler} name="body" />
                </div>
                <button type="submit">Crear actividad</button>
            </form>
        </>
    )
}

export default Form;