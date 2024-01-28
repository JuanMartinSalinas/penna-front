import React, { useState, useEffect,useRef } from 'react';
import styles from './FormPDF.module.css'

function FormPDF() {

    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({
        titulo:"",
        file:"",
    })
    const fileRef = useRef(null);

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

        const formData = new FormData();
        formData.append('titulo',data.titulo);
        formData.append('file', data.file);
        console.log(data.file);

        fetch("http://localhost:3001/api/prueba/pdf", {
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
        fileRef.current.value = null;
    }

    useEffect(() => {
        if(data.titulo && data.file) {
            setDisabled(false);
        }
    },[data.file, data.titulo])


    return (
        <div className={styles.mainBox}>
            <form className={styles.formBox} onSubmit={submitData}>
                <div className={styles.inputBox}>
                    <label>Título del PDF</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="titulo"
                        value={data.titulo}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Archivo PDF</label>
                    <input
                        className={styles.input}
                        type="file"
                        name="pdf"
                        accept=".pdf"
                        ref={fileRef}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <button type="submit"
                            disabled={disabled}
                            className={ disabled ?
                                        styles.submitButtonDisabled :
                                        styles.submitButton}>Enviar PDF</button>
                </div>
            </form>
        </div>
    );
}

export default FormPDF;