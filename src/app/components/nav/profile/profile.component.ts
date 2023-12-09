import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/services/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  hide: boolean = true;
  isEditing: boolean = false;
  profileForInput!: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
  ) {}

  ngOnInit() {
    this.profileForInput = {
      id: this.data.user.id,
      nameSurname: this.data.user.nameSurname,
      email: this.data.user.email,
      phone: this.data.user.phone,
      address: this.data.user.address,
      favoriteGenre: this.data.user.favoriteGenre,
      password: this.data.user.password,
      cartBooksId: []
    }
  }

  finishEditing(form: NgForm) {
    this.data.user.nameSurname = this.profileForInput.nameSurname;
    this.data.user.email = this.profileForInput.email;
    this.data.user.phone = this.profileForInput.phone;
    this.data.user.address = this.profileForInput.address;
    this.data.user.favoriteGenre = this.profileForInput.favoriteGenre;
    this.data.user.password = this.profileForInput.password;
    this.isEditing = true;
  }

}
