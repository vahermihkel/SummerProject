import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
