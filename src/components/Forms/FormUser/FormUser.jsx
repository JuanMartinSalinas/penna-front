import React, { useState,useEffect } from 'react';
import styles from './FormUser.module.css';

export default function FormUser() {

    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({
        nombre:"",
        apellido:"",
        numero:0,
        fecha:"",
    });
    // const [userData, setUserData] = useState([]);

    function handleChange(e) {
        setData({
            ...data, [e.target.name]: e.target.value,
        })
    }

    // async function submitData(name) {
    //     try {
    //         const result = await fetch("http://localhost:3001/api/prueba/users");
    //         const body = await result.json();
    //         setUserData([body]);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    function handleSubmit(e) {
        try {
            fetch("http://localhost:3001/api/prueba/users", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
            .then((res) => {
                if(!res.ok) {
                    alert("Ha habido un error en la solicitud. Por favor, inténtelo de nuevo.")
                } else {
                    alert("Sus datos han sido cargados exitosamente.");            
                }
            })
        } catch (error) {
            console.log(error);    
        }
        setData({
            nombre: "",
            apellido:"",
            numero:"",
            fecha:"",
        });
    }

    useEffect(() => {
        if(data.nombre && data.apellido && data.numero && data.fecha) {
            setDisabled(false);
        }
    },[data.nombre, data.apellido, data.numero, data.fecha])


    return (
        <div className={styles.mainBox}>
            <form className={styles.formBox} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputBox}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={data.nombre}
                        name="nombre"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Apellido</label>
                    <input
                        type="text"
                        value={data.apellido}
                        name="apellido"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Teléfono</label>
                    <input
                        type="tel"
                        value={data.numero}
                        name="numero"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        value={data.fecha}
                        name="fecha"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <button 
                            disabled={disabled}
                            className={ disabled ?
                                        styles.submitButtonDisabled :
                                        styles.submitButton}>Enviar</button>
                </div>
            </form>
        </div>
    );
}