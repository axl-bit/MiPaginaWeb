import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  //varibale
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  //for responsive
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  navbarfixed:boolean = false;


}
