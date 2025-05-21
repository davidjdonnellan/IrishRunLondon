import { Component, OnInit } from '@angular/core';
import { InstagramService } from '@irish-run-london/data-access/services';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  media: any[] = [];

  constructor(private instagramService: InstagramService) {}

  ngOnInit(): void {
    this.instagramService.getUserMedia().subscribe(
      (response) => {
        this.media = response.data;
      },
      (error) => {
        console.error('Error fetching Instagram media', error);
      }
    );
  }
}