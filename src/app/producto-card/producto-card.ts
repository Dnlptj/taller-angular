import { Component, HostBinding, Input } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  @Input() producto!: Producto;

  @HostBinding('class') clases = 'col-md-4 mb-3 d-block';
}
