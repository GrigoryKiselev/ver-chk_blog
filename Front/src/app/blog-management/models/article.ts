export class Article {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public createdUser: string,
        public createdDate: string,
        public category: string
    ) { }
}
