import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Gunclock } from '../share/models/gunclock';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gunclock-new',
  templateUrl: './gunclock-new.component.html',
  styleUrls: ['./gunclock-new.component.css']
})
export class GunclockNewComponent implements OnInit {

  gunclock: Gunclock = new Gunclock('','','','');

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
//    this.router.navigate(["/gunclock/create"])

    var post_body = { 
      "color" : this.gunclock.color,
      "size"  : this.gunclock.size
    }

//    this.http.post('http://192.168.11.11:3000/gunclock', post_body )
    this.http.post(environment.GUNCLOCK_API, post_body )
    .subscribe(o => {
      console.log(o);
//      this.gunclocks = o['gunclocks'];
      this.router.navigate(["/gunclocks"])
    });

  }

}
