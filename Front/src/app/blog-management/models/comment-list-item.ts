export class CommentListItem {
    constructor(
        public articleId: string,
        public id : string,
        public content: string,
        public createdUser: string,
        public createdDate: string
    ) { }
}
