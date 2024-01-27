import React, { useState, useEffect,useRef } from 'react';
import styles from './FormPDF.module.css'

function FormPDF() {

    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({
        title:"",
        file:"",
    })
    const fileRef = useRef(null);

    useEffect(() => {
        if(data.title && data.file) {
            setDisabled(false);
        }
    },[data.file, data.title])

    function handleChange(e) {
        if(e.target.files) {
            const selectedArchive = e.target.files[0];
            setData({
                ...data, file: selectedArchive
            })
        } else {
            setData({
                ...data, title: e.target.value
            })
        }
    }

    function submitData(e) {
        e.preventDefault()
        console.log("Archivo seleccionado:", data);
        setDisabled(true);
        setData({
            title: "",
            file:"",
        });
        fileRef.current.value = null;
    }

    return (
        <div className={styles.mainBox}>
            <form className={styles.formBox} onSubmit={submitData}>
                <div className={styles.inputBox}>
                    <label>Título del PDF</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="title"
                        value={data.title}
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