import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  @Input() date: string;
  @Input() time: string;

  @ViewChild('countdown') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let setCountdown;

    if (this.time == null || this.time == "") {

      setCountdown = new Date(this.date).getTime();

    } else if ((this.date != null || this.date != "") && (this.time != null || this.time != "")) {

      setCountdown = new Date(this.date + "T" + this.time + "Z").getTime();

    } else {

      console.log("Date and/or time format is wrong!");

    }

    var x = setInterval(() => {

      var now = new Date().getTime();

      var distance = setCountdown - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var daysText,
        hoursText,
        minutesText,
        secondsText;

      if (days == 1) { daysText = " day " } else { daysText = " days " }
      if (hours == 1) { hoursText = " hour " } else { hoursText = " hours " }
      if (minutes == 1) { minutesText = " minute " } else { minutesText = " minutes " }
      if (seconds == 1) { secondsText = " second " } else { secondsText = " seconds " }

      var elementExist = this.el.nativeElement;

      if (distance < 0) {

        clearInterval(x);

        elementExist.innerHTML = "EXPIRED";

      } else {

        elementExist.innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + secondsText;

      }
    }, 1000);

  }

}
