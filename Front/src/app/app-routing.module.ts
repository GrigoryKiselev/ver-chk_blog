import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleFormComponent } from './blog-management/forms/article-form.component';
import { CommentFormComponent } from './blog-management/forms/comment-form.component';
import { ArticleListComponent } from './blog-management/lists/article-list.component';
import { CommentListComponent } from './blog-management/lists/comment-list.component';
import { UserComponent } from './blog-management/lists/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'article', component: ArticleFormComponent },
  { path: 'article/:id', component: ArticleFormComponent },
  { path: 'article/:id/comments', component: CommentListComponent },
  { path: 'comment/:id', component: CommentFormComponent },
  { path: 'article/:articleId/comment/:id', component: CommentFormComponent},
  { path: 'article/:articleId/comment', component: CommentFormComponent},
  { path: 'users', component: UserComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
