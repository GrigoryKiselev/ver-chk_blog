export class ArticleListItem {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public createdUser: string,
        public createdDate: boolean,
        public category: string
    ) { }
}
