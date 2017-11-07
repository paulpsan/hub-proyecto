export class Usuario {
    constructor(
        public id: string,
        public nombre: string,
        public datos: string,
        public email: string,
        public fecha_creacion: string,
        public fecha_modificacion: string,
        public fk_organizacion: string,

    ) { }
}
