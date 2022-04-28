import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  _second = 1000;
  _minute = this._second * 60;
  end: any;
  now: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  @Output() secondsSaida: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('01/01/' + (this.now.getFullYear() + 1) + ' 00:00');
      this.showSecond();
    });
    this.secondsSaida.emit(this.seconds);
  }
  showSecond() {
    let distance = this.end - this.now;
    this.seconds = Math.floor((distance % this._minute) / this._second);

  }

}

