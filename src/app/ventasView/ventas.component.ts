import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  imports: [CommonModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
  data = [
    { anio: 2025, utilidad: '77.831.294' },
    { anio: 2024, utilidad: '284.598.893' },
    { anio: 2023, utilidad: '291.807.805' },
    { anio: 2022, utilidad: '261.216.464' },
    { anio: 2021, utilidad: '204.585.135' },
    { anio: 2020, utilidad: '140.700.110' },
    { anio: 2019, utilidad: '31.690.032' }
  ];

  data2 = [
    { anio: 2025, mes: "Enero", utilidad: '77.831.294' },
    { anio: 2024, mes: "Enero", utilidad: '284.598.893' },
    { anio: 2023, mes: "Enero", utilidad: '291.807.805' },
    { anio: 2022, mes: "Enero", utilidad: '261.216.464' },
    { anio: 2021, mes: "Enero", utilidad: '204.585.135' },
    { anio: 2020, mes: "Enero", utilidad: '140.700.110' },
    { anio: 2019, mes: "Enero", utilidad: '31.690.032' }
  ];

  data3 = [
    { anio: 2025, mes: "Enero", fecha: "Viernes", utilidad: '77.831.294' },
    { anio: 2024, mes: "Enero", fecha: "Viernes", utilidad: '284.598.893' },
    { anio: 2023, mes: "Enero", fecha: "Viernes", utilidad: '291.807.805' },
    { anio: 2022, mes: "Enero", fecha: "Viernes", utilidad: '261.216.464' },
    { anio: 2021, mes: "Enero", fecha: "Viernes", utilidad: '204.585.135' },
    { anio: 2020, mes: "Enero", fecha: "Viernes", utilidad: '140.700.110' },
    { anio: 2019, mes: "Enero", fecha: "Viernes", utilidad: '31.690.032' }
  ];
}
