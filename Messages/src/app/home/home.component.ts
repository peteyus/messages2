import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private jwtHelper: JwtHelperService, private router: Router) {
}

isUserAuthenticated() {
  const token = localStorage.getItem("jwt");
  if (token && !this.jwtHelper.isTokenExpired(token)) {
    return true;
  }
  else {
    return false;
  }
}

public logOut = () => {
  localStorage.removeItem("jwt");
}
}
