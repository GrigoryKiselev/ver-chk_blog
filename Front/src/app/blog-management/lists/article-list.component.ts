import { Component, OnInit } from '@angular/core';
import { ArticleListItem } from '../models/article-list-item';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  articles: ArticleListItem[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    //this.articleService.getArticles().subscribe(h => this.articles = h);

    this.articleService.getArticles().subscribe((data: any[])=>{
      console.log(data);
      this.articles = data;
  })
  }

  onDelete(articleId: string) {
    this.articleService.deleteArticle(articleId);
  }
  
}
