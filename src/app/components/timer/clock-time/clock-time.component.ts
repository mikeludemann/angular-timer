import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'clock-time',
  templateUrl: './clock-time.component.html',
  styleUrls: ['./clock-time.component.css']
})
export class ClockTimeComponent implements OnInit {

  datetimer: Date;

  @ViewChild('clock') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.datetimer = new Date();
      this.el.nativeElement.innerHTML = this.datetimer.toLocaleTimeString();
    }, 1000);
  }
}
