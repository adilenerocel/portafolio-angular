import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:ProductoDescripcion={};
  productoID:string='';

  constructor(private route:ActivatedRoute,
              public ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(parametros=>{
          // console.log(parametros['productoID']);

          this.ProductosService.getProducto(parametros['productoID'])
              .subscribe((producto :ProductoDescripcion)=>{
                  this.producto=producto;
                  this.productoID=parametros['productoID'];
              });
        })
  }

}
