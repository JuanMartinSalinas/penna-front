import FormImage from "../FormImage/FormImage";
import FormPDF from "../FormPDF/FormPDF";
import FormUser from "../FormUser/FormUser";
import styles from "./AllForms.module.css"

import React from 'react';

function AllForms() {
    return (
        <div className={styles.mainBox}>
            <h1 className={styles.title}>Ingrese su información</h1>
            <div className={styles.formBox}>
                <FormUser/>
                <div className={styles.imgPdfBox}>
                    <FormImage/>
                    <FormPDF/>
                </div>
            </div>
        </div>
    );
}

export default AllForms;