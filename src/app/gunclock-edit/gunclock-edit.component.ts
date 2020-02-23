import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Gunclock } from '../share/models/gunclock';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gunclock-edit',
  templateUrl: './gunclock-edit.component.html',
  styleUrls: ['./gunclock-edit.component.css']
})
export class GunclockEditComponent implements OnInit {

  gunclock: Gunclock = new Gunclock('','','','');

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get(environment.GUNCLOCK_API + '/' + id )
    .subscribe(o => {
      console.log(o);
      this.gunclock = o['gunclock'];
    });
  }

  submit() {
//    this.router.navigate(["/gunclock/create"])

    var put_body = { 
      "color" : this.gunclock.color,
      "size"  : this.gunclock.size
    }

    this.http.put(environment.GUNCLOCK_API + '/' + this.gunclock._id, put_body )
    .subscribe(o => {
      console.log(o);
//      this.gunclocks = o['gunclocks'];
      this.router.navigate(["/gunclocks"])
    });

  }

}
