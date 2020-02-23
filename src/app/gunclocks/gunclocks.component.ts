import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gunclock } from '../share/models/gunclock';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gunclocks',
  templateUrl: './gunclocks.component.html',
  styleUrls: ['./gunclocks.component.css']
})
export class GunclocksComponent implements OnInit {

  gunclocks: Gunclock[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
//    this.http.get<Gunclock[]>('http://192.168.11.11:3000/gunclock')
//    this.http.get('http://192.168.11.11:3000/gunclock')
    this.http.get(environment.GUNCLOCK_API)
    .subscribe(o => {
      console.log(o);
      this.gunclocks = o['gunclocks'];
//      this.gunclocks = [new Gunclock(1, '#ffcccc', 15, '2020/01/01')];
    });

//    this.gunclocks = [
//      new Gunclock(1, '#ffcccc', 15, '2020/01/01'),
//      new Gunclock(2, '#ccffcc', 30, '2020/02/22'),
//      new Gunclock(3, '#ccccff', 25, '2020/03/21')
//    ]

  }

}
