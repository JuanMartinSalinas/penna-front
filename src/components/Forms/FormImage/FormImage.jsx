import React, { useState,useEffect,useRef } from 'react';
import styles from './FormImage.module.css'

function FormImage() {

    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({})
    const imgRef = useRef(null);

    function handleChange(e) {
        if(e.target.files) {
            const selectedArchive = e.target.files[0];
            setData({
                ...data, file: selectedArchive
            })
        } else {
            setData({
                ...data, titulo: e.target.value
            })
        }
    }
    function submitData(e) {
        e.preventDefault();
        // console.log(data);

        const formData = new FormData();
        formData.append('titulo',data.titulo);
        formData.append('file', data.file);
        console.log(data.file);

        fetch("http://localhost:3001/api/prueba/image", {
            method: 'POST',
            body: formData,
          })
            .then((res) => {
                if(!res.ok) {
                    alert("Ha habido un error en la solicitud. Por favor, inténtelo de nuevo.")
                } else {
                    alert("Sus datos han sido cargados exitosamente.");            
                }
            })
        setData({
            titulo: "",
            file:"",
        });
        setDisabled(true);
        imgRef.current.value = null;
    }

    useEffect(() => {
        if(data.titulo && data.file) {
            setDisabled(false);
        }
    },[data.titulo, data.file])

    return (
        <div className={styles.mainBox}>
            <form className={styles.formBox} onSubmit={submitData}>
                <div className={styles.inputBox}>
                    <label>Título de la imagen</label>
                    <input
                        className={styles.input}
                        value={data.titulo}
                        type="text"
                        name="titulo"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Imagen</label>
                    <input
                        className={styles.input}
                        type="file"
                        accept="image/*"
                        name="file"
                        ref={imgRef}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <button
                        type="submit"
                        disabled={disabled}
                        className={ disabled ?
                                    styles.submitButtonDisabled :
                                    styles.submitButton}>Enviar datos</button>
                </div>
            </form>
        </div>
    );
}

export default FormImage;