import React from 'react';
import events from '../events/manageEvents';
import FormScreen from "../dynamics/FormScreen";

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
    const entity = [
        { name: 'name', type: 'text', required: true, validator: 'letter' },
        { name: 'lastname', type: 'text', required: true, validator: 'letter' },
        { name: 'email', type: 'email', required: true, validator: 'email', info: 'Debe ser un correo valido' },
        { name: 'address', type: 'text', required: true, info: 'Dirección de residencia' },
        { name: 'value', type: 'checkbox', required: true, info: 'Tienes algo' },
        { name: 'select', type: 'select', required: true, info: 'Seleccione moneda', values: currencies },
        { name: 'autocomplete', type: 'autocomplete', required: true, info: 'Seleccione pelicula', values: autocompletes }
    ];
    return(
        <FormScreen entity={entity} />
    )
}

export default NewUserScreen;