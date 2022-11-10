import { Component, OnInit } from '@angular/core';
import { Video } from 'src/mock';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  video?: Video
  constructor(private service: DataService) { }

  ngOnInit() {
    this.video = this.service.currentVideo
  }

}
