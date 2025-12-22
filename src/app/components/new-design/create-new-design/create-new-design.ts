import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class CreateNewDesign {
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
      standNumber: 'Stand 2L'
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
      standNumber: 'Stand 1A'
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
      standNumber: 'Stand 3R'
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
      standNumber: 'Stand 4C'
    }
  ];

  getDotArray(count: number): number[] {
    return Array(count).fill(0);
  }
}