export class Usuario {
    constructor(
        public id: string,
        public nombre: string,
        public email: string,
        public estado: string,
        public keycloak_id: string,
        public telefono: string,
        public ocupacion: string,

    ) { }
}
