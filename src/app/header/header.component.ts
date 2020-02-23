import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.count += 1;
    console.log('test');
  }

}
