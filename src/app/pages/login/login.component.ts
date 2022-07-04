import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  error:string="";
  button:number=0;
  constructor(private service:AuthService , private router :Router) { 
    console.log('login');
  }

  ngOnInit(): void {
  }
  onClick(btn:number){
    this.button=btn;
  }
  onSubmit(){
    if(this.username.trim().length===0){
      this.error="Please enter username"
    }
    else if(this.password.trim().length===0){
      this.error="Please enter password"
    }
    else{
    const res=this.service.login(this.username,this.password,this.button);
    if(res===101)
      this.router.navigate(['admin']);
    else if(res===202){
      alert("Your account is already created");
    }
    else if(res===303){
      this.router.navigate(['home'])
      alert("successfully logged in");
    }
    else if(res===400)
    {
      this.router.navigate(['home'])
      alert("successfully signed up");
    }
    else
      alert("Please sign up first");
    }
  }

}
