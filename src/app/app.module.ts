import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetrikaModule } from 'projects/ng-yandex-metrika/src/public-api';
import { YandexCounterConfig } from 'projects/ng-yandex-metrika/src/lib/ng-yandex-metrika.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MetrikaModule.forRoot({
      id: 45631461,
      webvisor: true,
      lazyConfigModifier: (config: YandexCounterConfig) => {
        return Object.assign({}, config);
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
