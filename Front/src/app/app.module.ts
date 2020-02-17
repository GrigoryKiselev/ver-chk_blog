import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleFormComponent } from './blog-management/forms/article-form.component';
import { CommentFormComponent } from './blog-management/forms/comment-form.component';
import { ArticleListComponent } from './blog-management/lists/article-list.component';
import { CommentListComponent } from './blog-management/lists/comment-list.component';
import { CommentService } from './blog-management/services/comment.service';
import { ArticleService } from './blog-management/services/article.service';
import { MainPageComponent } from './main-page/main-page.component';
import { UserComponent } from './blog-management/lists/user.component';
import { UserService } from './blog-management/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticleFormComponent,
    CommentFormComponent,
    ArticleListComponent,
    CommentListComponent,
    UserComponent
  ],
  imports: [
    // Angular imports
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // Application imports
    AppRoutingModule,
  ],
  providers: [
    // Angular providers
    HttpClient,
    // Application providers
    ArticleService,
    CommentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
