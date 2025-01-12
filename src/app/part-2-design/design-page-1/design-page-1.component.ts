import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-design-page-1',
  imports: [DatePipe],
  templateUrl: './design-page-1.component.html',
  styleUrl: './design-page-1.component.scss',
})
export class DesignPage1Component {
  date = new Date();
}
