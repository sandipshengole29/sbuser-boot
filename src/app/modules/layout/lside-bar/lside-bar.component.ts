import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lside-bar',
  templateUrl: './lside-bar.component.html',
  styleUrls: ['./lside-bar.component.css']
})
export class LsideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openHomePage(){
    alert('Click on load home page');
  }

  openAdminPage(){
    alert('Click on load admin page');
  }

}
