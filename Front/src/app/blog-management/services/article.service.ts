import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleListItem } from '../models/article-list-item';
import { CommentListItem } from '../models/comment-list-item';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url = environment.apiUrl + 'api/article/';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Array<ArticleListItem>> {
    return this.http.get<Array<ArticleListItem>>(this.url);
  }

  getArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}${articleId}`);
  }

  getComments(articleId: number): Observable<Array<CommentListItem>> {
    return this.http.get<Array<CommentListItem>>(`${this.url}${articleId}/comments`);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.url}`, article);
  }

  updateArticle(article: Article) {
    return this.http.put<Article>(`${this.url}${article.id}`, article).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
      );
  }

  deleteArticle(articleId: string) {
    return this.http.delete<Object>(`${this.url}${articleId}`).subscribe(
        (msg) => console.log(msg),
        (error) => console.log(error)
        );
    };
}

  //deleteArticle(articleId: string):Observable<any>{
  //  return this.http.delete<Object>(`${this.url}/${articleId}`).subscribe(
  //    (msg) => console.log(msg),
  //    (error) => console.log(error)
  //    );
  //}

