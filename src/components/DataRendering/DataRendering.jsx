import React, { useState,useEffect } from 'react';
import styles from './DataRendering.module.css'

function DataRendering() {

    const [userData, setUserData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [pdfData, setPdfData] = useState([]);


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
                {userData?.map((e) => {
                    return (<div key={e.id}>
                        <p>Nombre: {e.nombre}</p>
                        <p>Apellido: {e.apellido}</p>
                        <p>Teléfono: {e.numero}</p>
                        <p>Cumpleaños: {e.fecha}</p>
                    </div>)
                })}
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
                {pdfData?.map((e) => {
                    return (<div key={e.id}>
                        <p>PDF cargado: {e.titulo}</p>
                            <iframe
                                title="Vista previa del PDF"
                                src={e.path}
                            />
                        <a href={e.path} download>Descarga el PDF</a>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default DataRendering;