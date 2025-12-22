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

interface Flight {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
  status: string;
  statusColor: string;
  arrivalMessage: string;
  origin: string;
  destination: string;
  destinationCode: string;
  scheduleLabel: string;
  eta: string;
  progressDots: number;
  totalDots: number;
  beltNumber: string;
  standNumber: string;
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

  flights: Flight[] = [
    {
      airlineCode: '6E',
      airlineName: 'IndiGo',
      flightNumber: '6E-1246',
      status: 'ARRIVED',
      statusColor: '#1DBF73',
      arrivalMessage: 'Arrived 5 mins ago',
      origin: 'Pune',
      destination: 'New Delhi',
      destinationCode: 'DEL',
      scheduleLabel: 'SCH',
      eta: '5:02 PM',
      progressDots: 12,
      totalDots: 20,
      beltNumber: 'Belt 4',
      standNumber: 'Stand 2L',
    },
    {
      airlineCode: '6E',
      airlineName: 'IndiGo',
      flightNumber: '6E-2347',
      status: 'ARRIVED',
      statusColor: '#1DBF73',
      arrivalMessage: 'Arrived 10 mins ago',
      origin: 'Mumbai',
      destination: 'Bangalore',
      destinationCode: 'BLR',
      scheduleLabel: 'SCH',
      eta: '6:15 PM',
      progressDots: 15,
      totalDots: 20,
      beltNumber: 'Belt 2',
      standNumber: 'Stand 1A',
    },
    {
      airlineCode: '6E',
      airlineName: 'IndiGo',
      flightNumber: '6E-5678',
      status: 'BOARDING',
      statusColor: '#f59e0b',
      arrivalMessage: 'Boarding Now',
      origin: 'Chennai',
      destination: 'Kolkata',
      destinationCode: 'CCU',
      scheduleLabel: 'SCH',
      eta: '9:30 PM',
      progressDots: 8,
      totalDots: 20,
      beltNumber: 'Belt 7',
      standNumber: 'Stand 3R',
    },
    {
      airlineCode: '6E',
      airlineName: 'IndiGo',
      flightNumber: '6E-9012',
      status: 'ON TIME',
      statusColor: '#3b82f6',
      arrivalMessage: 'On Time',
      origin: 'Hyderabad',
      destination: 'Goa',
      destinationCode: 'GOI',
      scheduleLabel: 'SCH',
      eta: '3:45 PM',
      progressDots: 5,
      totalDots: 20,
      beltNumber: 'Belt 5',
      standNumber: 'Stand 4C',
    },
  ];

  getDotArray(count: number): number[] {
    return Array(count).fill(0);
  }

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
