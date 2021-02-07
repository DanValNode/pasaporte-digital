import {useState} from "react";

const valueInputs = ['text', 'number', 'email'];

const ManageEvents = ({initialState}) => {

    const [state, setState] = useState(initialState);

    const onchangeEntity = (event) => {
        try {
            if (event.target.type !== undefined) {
                let currentState = {...state};
                if(valueInputs.indexOf(event.target.type) >= 0)
                    state[event.target.name] = event.target.value;
                else if(event.target.type === 'checkbox')
                    state[event.target.name] = event.target.checked;
                setState(currentState);
            } else
                console.error("Evento no valido para el tipo de control");
        } catch (ex) {
            console.error(ex);
        }
    }

    const getValue = (event) => {
        return state[event.target.name];
    }

}

export default ManageEvents;