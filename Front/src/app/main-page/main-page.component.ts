import { Component, OnInit } from '@angular/core';
import { UserService } from '../blog-management/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  userName: string;
  userPassword: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onRegister(){
    
  }

  loginUser(userName: string, userPassword: string){
    return this.userService.loginUser(userName, userPassword).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
      );
  }
}
