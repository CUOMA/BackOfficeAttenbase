import { Component, Input, OnInit, HostListener } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'bdc-bo-line-chart-metrics',
  templateUrl: './line-chart-metrics.component.html',
  styleUrls: ['./line-chart-metrics.component.scss'],
})
export class LineChartMetricsComponent implements OnInit {
  ngOnInit() {
    let id = document.getElementById('myChart');
    if (id) {
      const chart = echarts.init(id);
      chart.setOption({
        title: {
          text: 'Rendimiento últimos 7 días',
        },
        color: ['#5470C6', '#FAC858', '#EE6666', '#91CC75'],

        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        },
        yAxis: {
          type: 'value',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '40px',
          containLabel: true,
        },
        series: [
          {
            name: 'Búsquedas sin resultados',
            type: 'line',
            stack: 'Total',
            data: [120, 60, 101, 134, 90, 230, 210],
          },
          {
            name: 'Búsquedas realizadas',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 55, 234, 290, 330, 310],
          },
          {
            name: 'Valoraciones positivas',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 2010, 35, 190, 330, 410],
          },
          {
            name: 'Valoraciones negativas',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 250, 334, 390, 330, 320],
          },
        ],
      });
      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  }
}
