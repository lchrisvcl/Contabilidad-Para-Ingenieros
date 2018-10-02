import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cuentas = [
    { idFactura: 'HS333', proveedor: 'Comercial ACME, S.A. DE C.V.', ordenCompra: '0000314', fecha: '17/08/2018', fechaPago: '17/08/2018', itbis: 0.00, Total: 40008.40, moneda: 'RD$ pesos' },
    { idFactura: 'HSC887', proveedor: 'La Comercial S.A.', ordenCompra: '0000317', fecha: '21/08/2018', fechaPago: '21/08/2018', itbis: 0.00, Total: 1015.00, moneda: 'RD$ pesos' },
    { idFactura: 'S34', proveedor: 'La Comercial S.A.', ordenCompra: '0000319', fecha: '01/09/2018', fechaPago: '01/09/2018', itbis: 0.00, Total: 1006.25, moneda: 'RD$ pesos' },
    { idFactura: 'AS332', proveedor: 'CIA. ACME, S.A. DE C.V.', ordenCompra: 'Directa', fecha: '12/09/2018', fechaPago: '12/09/2018', itbis: 165.52, Total: 1200.00, moneda: 'RD$ pesos' },
    { idFactura: 'AS324', proveedor: 'CIA. ACME, S.A. DE C.V.', ordenCompra: 'Directa', fecha: '12/09/2018', fechaPago: '12/09/2018', itbis: 165.52, Total: 1200.00, moneda: 'RD$ pesos' },
  ]

  proveedores = [
    { idEmpresa: 1, nombreProveedor:  'Comercial ACME, S.A. DE C.V.'},
    { idEmpresa: 2, nombreProveedor:  'La Comercial S.A.'}, 
    { idEmpresa: 3, nombreProveedor:  'CIA. ACME, S.A. DE C.V.'}  
  ]

  ordenes = ['0000314', '0000317', '0000319']
}

