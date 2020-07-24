import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  expected: any;
  actual: any;

  public ngOnInit (): void {
    const p = {a: 1, b: 2};
    const { a, ...rest} = p;

    this.expected = {b: 2};
    this.actual = rest;
  }
}
