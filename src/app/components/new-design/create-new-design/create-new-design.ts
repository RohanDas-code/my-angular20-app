import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FlightSlide {
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  gate: string;
  stand: string;
  timeLabel: string;
  timeValue: string;
  timeUnit: string;
  origin: string;
  originCity: string;
  destination: string;
  destinationCity: string;
  scheduledTime: string;
  estimatedTime: string;
}

@Component({
  selector: 'app-create-new-design',
  imports: [CommonModule],
  templateUrl: './create-new-design.html',
  styleUrl: './create-new-design.scss',
})
export class CreateNewDesign implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  slides: FlightSlide[] = [
    {
      airline: 'AIR INDIA',
      airlineLogo: 'express',
      flightNumber: 'IX-234',
      gate: 'Belt 4',
      stand: 'Stand 2L',
      timeLabel: 'Arrival in',
      timeValue: '1h 23',
      timeUnit: 'min',
      origin: 'DEL',
      originCity: 'Delhi',
      destination: 'NMI',
      destinationCity: 'Navi Mumbai',
      scheduledTime: '16:02',
      estimatedTime: '15:33',
    },
    {
      airline: 'Akasa Air',
      airlineLogo: 'akasa',
      flightNumber: 'QP-234',
      gate: 'Gate 4',
      stand: 'Stand 2L',
      timeLabel: 'Departing in',
      timeValue: '23',
      timeUnit: 'min',
      origin: 'NMI',
      originCity: 'Navi Mumbai',
      destination: 'DEL',
      destinationCity: 'Delhi',
      scheduledTime: '16:02',
      estimatedTime: '15:33',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
