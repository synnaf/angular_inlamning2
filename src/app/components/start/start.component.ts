import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  searchString = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {

    this.searchString = event.target.value;
    console.log(event);
  }

}
