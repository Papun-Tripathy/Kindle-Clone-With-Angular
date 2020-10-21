import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {
    if(screen.width <= 768 )
      this.smallscr = true;
  }
  smallscr = false;
  ngOnInit(): void {}
  onSearchClicked() {
    let searchIcon = document.getElementById('searchIcon');
    let cancleIcon = document.getElementById('cancleIcon');

    searchIcon.classList.toggle('d-none');
    cancleIcon.classList.toggle('d-inline');
  }
}
