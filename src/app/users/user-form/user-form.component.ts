import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private usersService: UsersService) {
    this.initForm();
  }

  ngOnInit() {
  }

  cancel(): void {
    this.userForm.reset();
    this.router.navigate(['/users']);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      const user: User = User.fromJson(this.userForm.value);
      this.usersService.createUser(user).subscribe(response => {
        this.router.navigate(['/users']);
      });
    }
  }

  private initForm(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
