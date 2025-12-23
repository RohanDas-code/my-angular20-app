import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-third-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-third-design.html',
})
export class CreateThirdDesignComponent {
  @Input() designType: number = 1;

  get assets() {
    const defaults = {
      logo: '/image 504.svg',
      plane: '/6E.svg',
    };
    const configs: any = {
      1: defaults,
      2: { logo: '/image 507.svg', plane: '/IX.svg',  },
      3: { logo: '/image 506.svg', plane: '/QP.svg', },
      4: { logo: '/Star Air.svg', plane: '/S5.svg'},
    };
    return configs[this.designType] || defaults;
  }

  confetti = Array.from({ length: 70 }).map(() => ({
    x: Math.random() * 100,
    delay: Math.random() * 2,
    color: ['#22d3ee', '#a855f7', '#ec4899'][Math.floor(Math.random() * 3)]
  }));
}
