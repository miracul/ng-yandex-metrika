import { Component } from '@angular/core';
import { Metrika } from 'ng-yandex-metrika';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private metrika: Metrika) {
    this.metrika.fireEvent('test');
  }
}
