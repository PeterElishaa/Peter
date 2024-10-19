import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = {};

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout() {
    this.aboutService.getAbout().subscribe(data => {
      this.about = data;
    });
  }
}
