import React, { useState,useEffect,useRef } from 'react';
import styles from './FormImage.module.css'

function FormImage() {

    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({})
    const imgRef = useRef(null);

    const postImage = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

    function handleChange(e) {
        if(e.target.files) {
            const selectedArchive = e.target.files[0];
            setData({
                ...data, image: selectedArchive
            })
        } else {
            setData({
                ...data, title: e.target.value
            })
        }
    }
    function submitData(e) {
        e.preventDefault();

        fetch("http://localhost:3001/api/prueba/image", postImage)
            .then((res) => {
                if(!res.ok) {
                    console.log(res);
                    alert("Ha habido un error en la solicitud. Por favor, inténtelo de nuevo.")
                } else {
                    alert("Sus datos han sido cargados exitosamente.");            
                }
                })
        console.log("Archivo seleccionado:", data);
        setData({
            titulo: "",
            file:"",
        });
        setDisabled(true);
        imgRef.current.value = null;
    }

    useEffect(() => {
        if(data.title && data.image) {
            setDisabled(false);
        }
    },[data.title, data.image])

    return (
        <div className={styles.mainBox}>
            <form className={styles.formBox} onSubmit={submitData}>
                <div className={styles.inputBox}>
                    <label>Título de la imagen</label>
                    <input
                        className={styles.input}
                        value={data.title}
                        type="text"
                        name="title"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Imagen</label>
                    <input
                        className={styles.input}
                        type="file"
                        accept="image/*"
                        name="image"
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