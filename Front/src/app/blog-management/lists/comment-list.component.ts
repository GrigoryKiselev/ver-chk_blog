import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentListItem } from '../models/comment-list-item';
import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {

  articleId: number;
  comments: Array<CommentListItem>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService, 
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.articleId = p['id'];
      this.articleService.getComments(this.articleId).subscribe(s => this.comments = s);
    })
  }
}

