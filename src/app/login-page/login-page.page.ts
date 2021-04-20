import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  // formGroup: FormGroup;
  loginVal = {
    userName:"",
    password:""
  };
  validateUsername:boolean = false;
  validatePassword:boolean = false;
  loginClicked: boolean = false;

  constructor(
    public router : Router
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.reset();
  }

  reset() {
    this.loginVal = {
      userName:"",
      password:""
    };
    this.validateUsername = false;
    this.validatePassword = false;
    this.loginClicked = false;
  }

  login() {
    this.loginClicked = true;
    if(this.validate()){
      this.router.navigate(['/create-invoice']);
    }
    console.log(this.loginVal);
  }

  validate() {
    if(this.loginClicked){
      if(this.loginVal.userName == "" || this.loginVal.userName == undefined || this.loginVal.userName == null ||
    this.loginVal.password == "" || this.loginVal.password == undefined || this.loginVal.password == null){
      if(this.loginVal.userName == "" || this.loginVal.userName == undefined || this.loginVal.userName == null) {
        this.validateUsername = true;
      }else{
        this.validateUsername = false;
      }
      if(this.loginVal.password == "" || this.loginVal.password == undefined || this.loginVal.password == null) {
        this.validatePassword = true;
      }else{
        this.validatePassword = false;
      }
      return false;
    }
    this.validateUsername = false;
    this.validatePassword = false;
    return true;
    }
  }

}
