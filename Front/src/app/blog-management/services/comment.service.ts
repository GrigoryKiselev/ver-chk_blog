import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { CommentListItem } from '../models/comment-list-item';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = environment.apiUrl + 'api/comments/';

  constructor(private http: HttpClient) { }

  getComments(): Observable<Array<CommentListItem>> {
    return this.http.get<Array<CommentListItem>>(`${this.url}`);
  }

  getComment(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.url}${commentId}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.url}`,comment);
  }

  updateComment (comment: Comment) {
    return this.http.put<Comment>(`${this.url}${comment.id}`, comment).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
      );
  }

  deleteComment(commentId: string) {
    return this.http.delete<Object>(`${this.url}${commentId}`).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
      );
  };
}

