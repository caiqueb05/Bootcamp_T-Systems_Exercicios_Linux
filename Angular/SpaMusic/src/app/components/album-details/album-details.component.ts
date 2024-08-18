import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MusicService } from '../../service/music.service';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: any;

  constructor(private route: ActivatedRoute, private musicService: MusicService) {}

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.musicService.getAlbum(albumId).subscribe(data => {
        this.album = data;
      });
    } else {
      console.error('Album ID is null');
    }
  }
}