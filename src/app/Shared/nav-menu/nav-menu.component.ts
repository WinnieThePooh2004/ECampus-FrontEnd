import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  public role: string | null = null;

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }
}
