import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 0;
  keyword = 'test';
  isHighlight = false;
  fontSize = 24;
  @Output() whenSearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.count += 1;
    this.fontSize += 2;
    this.isHighlight = !this.isHighlight;
    console.log(this.keyword);
    this.click.emit(this.keyword);

  }
}
