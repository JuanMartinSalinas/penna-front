import React, { useState,useEffect } from 'react';
import styles from './DataRendering.module.css'

function DataRendering() {

    const [userData, setUserData] = useState([{id:1, name:"nombre",surname:"apellido",cellphone:"teléfono",birthday:"cum"}]);
    const [imageData, setImageData] = useState([]);
    const [pdfData, setPdfData] = useState([]);

    // function getUser() {
    //     fetch("http://localhost:3001/api/prueba/users")
    //         .then((response) => response.json())
    //         .then((user) => console.log(user))
    // }

    // function getImage() {
    //     fetch("http://localhost:3001/api/prueba/image")
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //     .catch(console.error);
    // }

    // function getPDF() {
    //     fetch("http://localhost:3001/api/prueba/pdf")
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //     .catch(console.error);
    // }

    // useEffect(() => {
    //     getUser();
    //     getImage();
    //     getPDF();
    // },[getUser,getImage,getPDF])


    return (
        <div className={styles.mainBox}>
            <h1 className={styles.title}>Información renderizada</h1>
            <div className={styles.renderingInfo}>
                {userData?.map((e) => {
                    return (<div key={e.id}>
                        <p>Nombre: {e.name}</p>
                        <p>Apellido: {e.surname}</p>
                        <p>Teléfono: {e.cellphone}</p>
                        <p>Cumpleaños: {e.birthday}</p>
                    </div>)
                })}
            </div>
            <div className={styles.renderingImage}>
                {imageData?.map((e) => {
                    return (<div>
                        <p>Imagen cargada: {e.title}</p>
                        <img src={e.image} alt={e.title}/>
                    </div>)
                })}
            </div>
            <div className={styles.renderingPDF}>
                {pdfData?.map((e) => {
                    return (<div>
                        <p>PDF cargado: {e.title}</p>
                        <p>{e.file}</p>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default DataRendering;