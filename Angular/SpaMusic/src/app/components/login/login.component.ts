import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../service/spotify-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private spotifyAuthService: SpotifyAuthService) {}

  login() {
    this.spotifyAuthService.login();
  }
}