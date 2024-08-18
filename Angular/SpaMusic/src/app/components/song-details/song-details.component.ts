import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MusicService } from '../../service/music.service';

@Component({
  selector: 'app-song-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  song: any;

  constructor(private route: ActivatedRoute, private musicService: MusicService) {}

  ngOnInit() {
    const songId = this.route.snapshot.paramMap.get('id');
    if (songId) {
      this.musicService.getSongs(songId).subscribe(data => {
        this.song = data;
      });
    }
  }
}