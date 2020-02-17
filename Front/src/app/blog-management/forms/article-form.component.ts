import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form-component.html'
})
export class ArticleFormComponent implements OnInit {

  article = new Article("", "", "", "", "", "");
  existed = false; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      //this.articleService.getArticle(p['id']).subscribe(h => this.article = h);
      this.articleService.getArticle(p['id']).subscribe((data: any)=>{
        console.log(data);
        this.article = data;
    })
      this.existed = true;
    });
  }

  navigateToArticles() {
    this.router.navigate(['/articles']);
  }

  onCancel() {
    this.navigateToArticles();
  }

  
  onSubmit() {
    if (this.existed) {
      this.articleService.updateArticle(this.article);
    } else {
      this.articleService.addArticle(this.article).subscribe(c => this.navigateToArticles());
    }
  }
}
