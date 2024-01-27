export default function validations(data) {

    let err = {};

    // Nombre del usuario
    if(!data.name) err.name = "Esta casilla es obligatoria.";
    else err.name = "";
    // Apellido del usuario
    if(!data.surname) err.surname = "Esta casilla es obligatoria.";
    else err.surname = "";
    // Teléfono del usuario
    if(!data.cellphone) err.cellphone = "Esta casilla es obligatoria.";
    else err.cellphone = "";
    // Fecha de nacimiento del usuario
    if(!data.birthday) err.birthday = "Esta casilla es obligatoria.";
    else err.birthday = "";
}