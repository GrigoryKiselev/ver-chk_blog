import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form-component.html' 
})
export class CommentFormComponent implements OnInit {
  public comment = new Comment("", "", "", "", "");
  public existed = false;

   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) { }

   ngOnInit() : void {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) {
        this.comment.articleId = p['articleId'];
        return;
      }
       this.commentService.getComment(p['id']).subscribe(h => {
         this.comment = h;
        this.comment.articleId = p['articleId'];
       });
      this.existed = true;
    });  
  }

   navigateToComments() : void {
    this.router.navigate([`/article/${this.comment.articleId}/comments`]);
  }

   onCancel() : void {
    this.navigateToComments();
  }

   onSubmit() : void {
    if (this.existed) {
      this.commentService.updateComment(this.comment);
    } else {
      this.commentService.addComment(this.comment).subscribe(p => this.navigateToComments());
    }
  }

   onPurge() : void {
    this.commentService.deleteComment(this.comment.id);
  }
}
