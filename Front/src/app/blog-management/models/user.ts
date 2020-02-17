export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public email: string,
        public creationDate: Date,
        public lastAccessDate: Date
    ) { }
}