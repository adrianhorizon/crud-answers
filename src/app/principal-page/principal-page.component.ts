import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get('http://www.mocky.io/v2/5a663e0d2e0000002b323e0e').subscribe(data => {
      console.log(data);
    });
  }

}
