
class UserModel {

    initialState = {
        id: 0,
        contraseña: "",
        apellidos: "",
        nombres: "",
        tipoDocumento: "",
        cedula: "",
        direccion: "",
        email: "",
        rolName: "",
        rolId:"",
        numeroCelular: "",
        ciudadLaboro:"",
        eps: "",
        arl: "",
        empresaLabora: "",
        fechaNacimiento:"",
        genero: "",
        observaciones:"",
        idUserInstalacion:""
    }

    filterModel = {
        items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
    };

    constructor(userData) {
        this.id = userData.id;
        this.contraseña = userData.contraseña;
        this.apellidos = userData.apellidos;
        this.nombres = userData.nombres;
        this.tipoDocumento = userData.tipoDocumento;
        this.cedula = userData.cedula;
        this.direccion = userData.direccion;
        this.email = userData.email;
        this.rolName = userData.rolName;
        this.rolId = userData.rolId;
        this.numeroCelular = userData.numeroCelular;
        this.ciudadLaboro = userData.ciudadLaboro;
        this.eps = userData.eps;
        this.arl = userData.arl;
        this.empresaLabora = userData.empresaLabora;
        this.fechaNacimiento = userData.fechaNacimiento;
        this.genero = userData.genero;
        this.observaciones = userData.observaciones;
        this.idUserInstalacion = userData.idUserInstalacion;
    }

}

export default UserModel;