import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCard } from '../producto-card/producto-card';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, FormsModule, ProductoCard],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
  titulo = 'Listado de productos';

  productos: Producto[] = [
    { nombre: 'Teclado mecánico', descripcion: 'Switches rojos, retroiluminado', precio: 180000 },
    { nombre: 'Mouse inalámbrico', descripcion: 'Sensor de 16000 DPI', precio: 95000 },
    { nombre: 'Monitor 24"', descripcion: 'Full HD 75 Hz', precio: 620000 }
  ];

  agregarProducto(nombre: string, descripcion: string, precio: string): void {
    if (!nombre.trim()) {
      return;
    }
    this.productos.push({
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      precio: Number(precio) || 0
    });
  }
}
