import validator from "validator";

const letters = /^[a-zA-Z\s]*$/;

const commonValidators = {

    emailValidate: (email) => validator.isEmail(email),

    letterValidate: (text) => text.match(letters),

    numberValidate: (text) => validator.isNumeric(text)

}

export default commonValidators;