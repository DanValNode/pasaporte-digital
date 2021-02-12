import validator from "validator";

const letters = /^[a-zA-Z\s]*$/;
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;

const commonValidators = {

    emailValidate: (email) => validator.isEmail(email),

    letterValidate: (text) => text.match(letters),

    numberValidate: (text) => validator.isNumeric(text),

    passwordValidate: (text) => {
        //validate strength password
        const capitalLetters = text.match(upperCaseLetters);
        const letters = text.match(lowerCaseLetters);
        const length = text.length > 15;
        return capitalLetters && letters && length;
    }

}

export default commonValidators;