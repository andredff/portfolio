import { LandingService } from './../../services/landing.service';
import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private landingService: LandingService) { }

  user;
  repos;

  ngOnInit() {
    this.getUser();
    this.getRepos();
  }

  getUser(){
    this.landingService.getList().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  getRepos(){
    this.landingService.getRepos().subscribe(data => {
      this.repos = data;
      console.log(this.repos);
    })
  }



}
