import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  private map: any;

  ngOnInit() {
    // Загружаем скрипт API 2ГИС
    const script = document.createElement('script');
    script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
    document.body.appendChild(script);

    script.onload = () => {
      DG.then(() => {
        this.map = DG.map('map', {
          center: [54.98, 82.89],
          zoom: 13
        });

        DG.marker([54.98, 82.89]).addTo(this.map).bindPopup('Вы кликнули по мне!');
      });
    };
  }

  ngOnDestroy() {
    // Очистка карты при уничтожении компонента
    if (this.map) {
      this.map.remove();
    }
  }
}
