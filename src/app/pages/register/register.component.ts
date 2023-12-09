import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
    if (this.userService.getUser(form.value.email)) {
      this.errorExists = true;
      this.errorText = "User with this email already exists";
      this.userService.currentUser = UserService.userList[0];
      return;
    }
    
    if (!this.userService.isPasswordConfirm(form.value.password, form.value.confirm)) {
      this.errorExists = true;
      this.errorText = "Enter the same password";
      this.userService.currentUser = UserService.userList[0];
      return;
    }

    this.errorExists = false;
    let newUser = this.userService.registerUser(
      form.value.nameSurname,
      form.value.email,
      form.value.phone,
      form.value.address,
      form.value.favoriteGenre,
      form.value.password,
      []
    );
    this.router.navigate(['']);
  }

}
