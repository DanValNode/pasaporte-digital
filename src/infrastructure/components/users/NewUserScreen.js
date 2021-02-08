import React from 'react';
import FormScreen from "../dynamics/FormScreen";
import {FaUserTie} from "react-icons/fa";
import moment from 'moment';

const NewUserScreen = () => {
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    const autocompletes = [
        {
            value: 'v1',
            label: 'godzilla',
        },
        {
            value: 'v2',
            label: 'King kong',
        },
        {
            value: 'v3',
            label: 'Algo',
        },
        {
            value: 'v4',
            label: 'Sky',
        },
    ];
    const genders = [
        { value: 'Male',label: 'Male' },
        { value: 'Female',label: 'Female' },
        { value: 'NA',label: 'Otro' },
    ]
    const entity = [
        { label:'Nombre', name: 'name', type: 'text', required: true, validator: ['letter'], size: {lg: 6} },
        { label:'Apellido', name: 'lastname', type: 'text', required: true, validator: ['letter'], size: {lg: 6} },
        { label:'Correo', name: 'email', type: 'email', required: true, validator: ['email'], info: 'Debe ser un correo valido' },
        { label:'Direccion', name: 'address', type: 'text', required: true, info: 'Dirección de residencia' },
        { label:'check', name: 'value', type: 'checkbox', required: true, info: 'Tienes algo' },
        { label:'sel', name: 'select', type: 'select', required: true, info: 'Seleccione moneda', values: currencies },
        { label:'autocom', name: 'autocomplete', type: 'autocomplete', required: true, info: 'Seleccione pelicula', values: autocompletes },
        { label:'fecha', name: 'date', type: 'date', required: true, info: 'Fecha nacimiento', minDate: new Date() },
        { label:'Hota', name: 'tiempo', type: 'time', required: true, info: 'Hora' },
        { label:'Genero', name: 'gender', type: 'radio', required: true, info: 'Hora', values: genders },
        { label:'fecha I', name: 'dateI', type: 'date', required: true, info: 'Fecha inicial', maxDate: 'dateF', minDate: new Date() },
        { label:'fecha F', name: 'dateF', type: 'date', required: true, info: 'Fecha final', maxDate: moment(new Date(), "dd/MM/yyyy").add(1, 'years'), minDate: 'dateI' },
        { label:'clave', name: 'pass', type: 'password', required: true, info: 'minimo 8 caracteres' }
    ];

    const handleSubmit = (event, state) => {
        event.preventDefault();
        alert("externo");
    }

    return(
        <FormScreen entity={entity}
                    title="Nuevo usuario"
                    icon={<FaUserTie className="icon-title"/>}
                    handleSubmit={handleSubmit}
        />
    )
}

export default NewUserScreen;