import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Gunclock } from '../share/models/gunclock';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gunclock-delete',
  templateUrl: './gunclock-delete.component.html',
  styleUrls: ['./gunclock-delete.component.css']
})
export class GunclockDeleteComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.delete(environment.GUNCLOCK_API + '/' + id )
    .subscribe(o => {
      console.log(o);
      this.router.navigate(["/gunclocks"])
    });

  }

}
