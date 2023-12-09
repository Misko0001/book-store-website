import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  hide = true;
  errorExists = false;
  errorText = "";

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.userService.currentUser.id > 0) {
      this.router.navigate(['']);
    }
  }

  onSubmit(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    let user = this.userService.getUser(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user with that email";
      return;
    }

    if (!this.userService.isPasswordCorrect(email, password)) {
      this.errorExists = true;
      this.errorText = "Password is incorrect";
      this.userService.currentUser = UserService.userList[0];
      return;
    }

    this.errorExists = false;
    this.router.navigate(['']);
  }

}
