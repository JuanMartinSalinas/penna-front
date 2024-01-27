import React, { useState,useEffect } from 'react';
import styles from './FormUser.module.css';
import validations from './validations';

export default function FormUser() {

    // const [errors, setErrors] = useState({
    //     name:"",
    //     surname:"",
    //     cellphone:0,
    //     birthday:0,
    // });
    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({
        name:"",
        surname:"",
        cellphone:0,
        birthday:0,
    });

    useEffect(() => {
        if(data.name && data.surname && data.cellphone && data.birthday) {
            setDisabled(false);
        }
    },[data.name, data.surname, data.cellphone, data.birthday])


    // function validations(data) {
    //     if(!data.name) errors.name = "Esta casilla es obligatoria.";
    //     else errors.name = "";
    //     if(!data.surname) errors.surname = "Esta casilla es obligatoria.";
    //     else errors.surname = "";
    //     if(!data.cellphone) errors.cellphone = "Esta casilla es obligatoria.";
    //     else errors.cellphone = "";
    //     if(!data.birthday) errors.birthday = "Esta casilla es obligatoria.";
    //     else errors.birthday = "";
    // }
    
    function handleChange(e) {
        setData({
            ...data, [e.target.name]: e.target.value,
        })
        // setErrors(
        //     validations({
        //         ...data,
        //         [e.target.name]: e.target.value,
        //     })
        // );
    }
    function handleSubmit(e) {
        e.preventDefault();
            alert("Sus datos han sido cargados exitosamente.");
            setData({
                name: "",
                surname:"",
                cellphone:"",
                birthday:"",
            });
        // if (!errors.name && !errors.surname && !errors.cellphone && !errors.birthday) {
        //         alert("Sus datos han sido cargados exitosamente.");
        //         setData({
        //             name: "",
        //             surname:"",
        //             cellphone:"",
        //             birthday:"",
        // });
        // } else {
        //     return alert("Error en la carga de datos. Por favor, inténtelo de nuevo.");
        // }
    }


    return (
        <div className={styles.mainBox}>
            <form className={styles.formBox} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputBox}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={data.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Apellido</label>
                    <input
                        type="text"
                        value={data.surname}
                        name="surname"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Teléfono</label>
                    <input
                        type="tel"
                        value={data.cellphone}
                        name="cellphone"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        value={data.birthday}
                        name="birthday"
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