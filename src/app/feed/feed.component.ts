import { Component, OnInit } from '@angular/core';
import { Video } from 'src/mock';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  video?: Video
  constructor(private service: DataService) { }

  ngOnInit() {
    this.video = this.service.currentVideo
  }

  like = (title: string): void=>{
    this.service.updateLike(title)
 }

}
