import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Gunclock } from '../share/models/gunclock';
//import { GUNCLOCK_API } from '../../environments/environment';
import { environment } from '../../environments/environment';

import { getGunClock } from './GunClock';

@Component({
  selector: 'app-gunclock',
  templateUrl: './gunclock.component.html',
  styleUrls: ['./gunclock.component.css']
})
export class GunclockComponent implements OnInit {

  gunclock: Gunclock = new Gunclock('','','','');

  gunclockString: string = "";

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get(environment.GUNCLOCK_API + '/' + id )
    .subscribe(o => {
      console.log(o);
      this.gunclock = o['gunclock'];
      this.gunclockString = getGunClock(this.gunclock.size);
    });
  }

}
