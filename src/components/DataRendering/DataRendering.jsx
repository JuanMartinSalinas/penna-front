import React, { useState,useEffect } from 'react';
import styles from './DataRendering.module.css'

function DataRendering() {

    const [userData, setUserData] = useState([]);
    // const [imageData, setImageData] = useState([]);
    const [pdfData, setPdfData] = useState([]);

    // function getImage() {
    //     fetch("http://localhost:3001/api/prueba/image")
    //         .then((res) => res.json())
    //         .then((data) => setImageData(data))
    //     .catch(console.error);
    // }

    function createBirthday(fecha) {
        let year = fecha.slice(0,4)
        let month = fecha.slice(5,7)
        let day = fecha.slice(8,10)
        
        let birthday = `${day}/${month}/${year}`
        return birthday;
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await fetch("http://localhost:3001/api/prueba/users")
                const body = await result.json();
                const users = body.users;
                const finalUsers = users.splice(-1)
                setUserData(finalUsers); 
            } catch (error) {
                console.log(error);
            }
        }
        const getPDF = async () => {
            try {
                const result = await fetch("http://localhost:3001/api/prueba/pdf")
                const body = await result.json();
                const pdf = body.files
                const finalPdf = pdf.splice(-1)
                setPdfData(finalPdf);
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
        getPDF();
    },[])

    return (
        <div className={styles.mainBox}>
            <h1 className={styles.title}>Información renderizada</h1>
            <div className={styles.renderingInfo}>
                {userData ? userData?.map((e) => {
                    return (<div className={styles.userBox} key={e.id}>
                        <p className={styles.userInfoText}>Nombre: {e.nombre}</p>
                        <p className={styles.userInfoText}>Apellido: {e.apellido}</p>
                        <p className={styles.userInfoText}>Teléfono: {e.numero}</p>
                        <p className={styles.userInfoText}>Cumpleaños: {createBirthday(e.fecha)}</p>
                    </div>)
                }): "Cargando última sesión"}
            </div>
            {/* <div className={styles.renderingImage}>
                {imageData?.map((e) => {
                    return (<div>
                        <p>Imagen cargada: {e.title}</p>
                        <img src={e.image} alt={e.title}/>
                    </div>)
                })}
            </div> */}
            <div className={styles.renderingPDF}>
                {pdfData ? pdfData?.map((e) => {
                    return (<div className={styles.pdfBox} key={e.id}>
                            <iframe
                                className={styles.pdfView}
                                title="Vista previa del PDF"
                                src={e.path}
                            />
                            <div className={styles.nameAndDownload}>
                                <p className={styles.pdfTitle}>PDF cargado: {e.titulo}</p>
                                <a className={styles.pdfDownload} href={e.path} download>Descarga el PDF</a>
                            </div>
                    </div>)
                }) : "Cargando última sesión"}
            </div>
        </div>
    );
}

export default DataRendering;
