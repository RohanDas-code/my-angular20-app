import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-third-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-third-design.html',
})
export class CreateThirdDesignComponent {
  confetti = Array.from({ length: 70 }).map(() => ({
    x: Math.random() * 100,
    delay: Math.random() * 2,
    color: ['#22d3ee', '#a855f7', '#ec4899'][Math.floor(Math.random() * 3)]
  }));
}
