import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherData } from 'src/app/shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  @Input () public weather! : WeatherData;
  public BASE_URL = 'http://openweathermap.org/img/wn'

}
