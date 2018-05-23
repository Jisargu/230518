import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tituloDatosArticulo: string='Ingrese el producto';
  tituloTicket: string='Ticket de compra';
  tabla_fila_1: string='Cantidad';  
  tabla_fila_2: string='Precio';  
  tabla_fila_3: string='Subtotal';  
  tabla_fila_4: string='IVA';  
  tabla_fila_5: string='Total';  
  nombreArticulo: string='';
  cantidadArticulo: number;
  precioArticulo: number;
  IVA: number=16;
  constructor() { }

  ngOnInit() {

  }

}
