import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { SignIn } from 'src/app/interfaces/SignIn';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: SignIn = { email: 'string', password: 'string' }
  formLogin!: FormGroup;
  constructor(private userService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  
  signIn() {
    this.data.email = this.formLogin.value.email;
    this.data.password = this.formLogin.value.password;

    this.userService.signIn(this.data).subscribe((response) => {
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['start']).then();
      }
      console.log(response);
    })
  }
}
