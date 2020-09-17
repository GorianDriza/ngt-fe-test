import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() isOpened = new EventEmitter<boolean>(true);
  menuClass = true;

  constructor() { }

  ngOnInit(): void {}

  closeMenu() {
    this.menuClass = !this.menuClass;
    this.isOpened.emit(this.menuClass);
  }
}
