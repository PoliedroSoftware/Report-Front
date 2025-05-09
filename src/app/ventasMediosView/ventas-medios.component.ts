import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-medios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas-medios.component.html',
  styleUrl: './ventas-medios.component.css'
})
export class VentasMediosComponent implements OnInit {

  data = [
    { anio: 2025, metodoPago: 'efectivo', totalPagado: 7318833 },
    { anio: 2025, metodoPago: 'otros', totalPagado: 0 },
    { anio: 2025, metodoPago: 'tarjeta', totalPagado: 5098376 },
    { anio: 2025, metodoPago: 'transferencia', totalPagado: 9083616 }
  ];

  data2 = [
    { anio: 2025, mes: "Enero", metodoPago: 'efectivo', totalPagado: 7318833 },
    { anio: 2025, mes: "Enero", metodoPago: 'otros', totalPagado: 0 },
    { anio: 2025, mes: "Febrero", metodoPago: 'efectivo', totalPagado: 7318833 },
    { anio: 2025, mes: "Febrero", metodoPago: 'otros', totalPagado: 0 },
    { anio: 2025, mes: "Enero", metodoPago: 'tarjeta', totalPagado: 5098376 }
  ];

  data3 = [
    { anio: 2025, mes: 'Mayo', fecha: '2025-05-08', utilidad: 100000 },
    { anio: 2025, mes: 'Mayo', fecha: '2025-05-07', utilidad: 87000 },
    { anio: 2025, mes: 'Mayo', fecha: '2025-05-07', utilidad: 275000 },
  ];

  datosAgrupados: {
    anio: number;
    mes: string;
    items: {
      metodoPago: string;
      totalPagado: number;
    }[];
    totalMes: number;
  }[] = [];

  datosPorFecha: {
    anio: number;
    mes: string;
    fecha: string;
    items: {
      utilidad: number;
    }[];
    totalDia: number;
  }[] = [];

  ngOnInit() {
    // Agrupar data2 por año y mes
    const agrupado: { [key: string]: any } = {};

    for (const item of this.data2) {
      const key = `${item.anio}-${item.mes}`;
      if (!agrupado[key]) {
        agrupado[key] = {
          anio: item.anio,
          mes: item.mes,
          items: [],
          totalMes: 0,
        };
      }

      agrupado[key].items.push({
        metodoPago: item.metodoPago,
        totalPagado: item.totalPagado,
      });

      agrupado[key].totalMes += item.totalPagado;
    }

    this.datosAgrupados = Object.values(agrupado);

    // Agrupar data3 por fecha
    const agrupadoPorFecha: { [key: string]: any } = {};

    for (const item of this.data3) {
      if (!agrupadoPorFecha[item.fecha]) {
        agrupadoPorFecha[item.fecha] = {
          anio: item.anio,
          mes: item.mes,
          fecha: item.fecha,
          items: [],
          totalDia: 0,
        };
      }

      agrupadoPorFecha[item.fecha].items.push({
        utilidad: item.utilidad,
      });

      agrupadoPorFecha[item.fecha].totalDia += item.utilidad;
    }

    this.datosPorFecha = Object.values(agrupadoPorFecha);
  }

  getTotalPagado(): number {
    return this.data.reduce((acc, curr) => acc + curr.totalPagado, 0);
  }
}

