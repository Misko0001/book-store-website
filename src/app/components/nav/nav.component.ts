import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from 'src/app/components/nav/profile/profile.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  profileOpened!: boolean;

  constructor(
    public userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  openProfile(userId: number) {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "40vw",
      data: { user: this.userService.getUserById(userId) }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = true;
    })

  }

  getClass() {
    return {
      'hidden': true,
      'highlight': false
    };
  }

  hideTag(user: 'hide when anonymous' | 'hide when logged in') {
    if (this.userService.currentUser.id == 0 && user == 'hide when anonymous') {
      return {
        'hidden': true,
        'highlight': false
      };
    } else if (this.userService.currentUser.id != 0 && user == 'hide when logged in') {
      return {
        'hidden': true,
        'highlight': false
      };
    }
    return;
  }

  logout() {
    this.userService.currentUser = UserService.userList[0];
    this.router.navigate(['']);
  }

}
