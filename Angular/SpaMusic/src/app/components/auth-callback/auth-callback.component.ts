import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAuthService } from '../../service/spotify-auth.service';

@Component({
  selector: 'app-auth-callback',
  template: '<p>Authenticating...</p>'
})
export class AuthCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private spotifyAuthService: SpotifyAuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code: any = params['code'];
      if (code) {
        this.spotifyAuthService.getAccessToken(code).subscribe(
          token => {
            if (token) {
              console.log('Access token:', token);
              // Now you can use the token to make API requests
            } else {
              console.error('Token is null');
            }
          },
          err => console.error('Error during token exchange', err)
        );
      } else {
        console.error('Code is null');
      }
    });
  }
}