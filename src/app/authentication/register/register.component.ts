import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  registro = {
    firstName: '',
    lastName: '',
    phone: '',
    image: 'string',
    college: '',
    email: '',
    password: '',
  }
  constructor(private userService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }
  
  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      college: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmEmail: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', Validators.required],
    })
  }
  signUp() {
    if (this.formRegister.value.email === this.formRegister.value.email &&
      this.formRegister.value.password === this.formRegister.value.password) {
      this.passData();
      console.log(this.registro)
      console.log(JSON.stringify(this.registro))
      this.userService.signUp(this.registro).subscribe(response => {
        if (response)
          this.router.navigate(['login']).then();
        if(response.message === "Email is already taken")
        console.log(response)
      })
    }
  }
  passData() {
    this.registro.firstName = this.formRegister.value.firstName;
    this.registro.lastName = this.formRegister.value.lastName;
    this.registro.phone = this.formRegister.value.phone;
    this.registro.college = this.formRegister.value.college;
    this.registro.email = this.formRegister.value.email;
    this.registro.password = this.formRegister.value.password;
  }
}
