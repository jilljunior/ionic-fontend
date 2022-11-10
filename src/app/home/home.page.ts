import { Component, OnInit } from '@angular/core';
import { Video } from 'src/mock';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    direction: 'vertical'
  }
  play = false
  videoList?: Video[]
  indexVideo?: number = 0
  constructor(private data:DataService) {}
  ngOnInit() {
    this.data.getVideoList().subscribe(response=>{
        this.videoList=response
        this.data.currentVideo = this.videoList[0]
        document.querySelectorAll('video')[0].autoplay = true
    })
  }

  puReadVideoList = ()=>{
    const videos = document.querySelectorAll('video')
    this.indexVideo ++
    this.data.currentVideo = this.videoList[this.indexVideo]
    videos.forEach(video=>{
      video.autoplay = false
      video.pause()
      video.muted = true
    })
    videos[this.indexVideo].autoplay = true
    videos[this.indexVideo].muted = false
    videos[this.indexVideo].play()
    setTimeout(() => {
      this.data.getVideoList_By_pref(this.data.currentVideo.categories).subscribe(
        updateVideo=>updateVideo.forEach(video=>{
          this.videoList.push(video)
        })
      )
    }, 15000);
  }

  popReadVideoList = ()=>{
    this.data.currentVideo = this.videoList[this.indexVideo]
    const videos = document.querySelectorAll('video')
    this.indexVideo --
    this.data.currentVideo = this.videoList[this.indexVideo]
    videos.forEach(video=>{
      video.autoplay = false
      video.pause()
      video.muted = true
    })
    videos[this.indexVideo].autoplay = true
    videos[this.indexVideo].muted = false
    videos[this.indexVideo].play()
    setTimeout(() => {
      this.data.getVideoList_By_pref(this.data.currentVideo.categories).subscribe(
        updateVideo=>updateVideo.forEach(video=>{
          this.videoList.push(video)
        })
      )
    }, 15000);
  }

  playingAndStop = ()=>{
    this.data.currentVideo = this.videoList[this.indexVideo]
    if(this.play){
      this.play = false
      const videos = document.querySelectorAll('video')[this.indexVideo].pause()
    }else{
      const videos = document.querySelectorAll('video')[this.indexVideo].play()
      this.play = true
    }
  }
  
}