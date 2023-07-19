import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rutas: Ruta[]=[
{
  CiudadOrigen: "Pasaje",
  CiudadDestino: "Machala",
  PrecioRuta: "60",
  Descripcion: "viaje directo",
  Tipo: "interno"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino: "SantaRosa",
  PrecioRuta: "60",
  Descripcion: "viaje tranquilo",
  Tipo: "interno"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino: "Guayaquil",
  PrecioRuta: "60",
  Descripcion: "viaje largo",
  Tipo:"externo"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino:"Cuenca",
  PrecioRuta:"60",
  Descripcion:"Viaje largo pero tranquilo",
  Tipo:"externo"
},
{
  CiudadOrigen:"Pasaje",
  CiudadDestino:"Huaquillas",
  PrecioRuta:"60",
  Descripcion:"viaje medio largo",
  Tipo:"interno"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino:"Cuenca",
  PrecioRuta:"60",
  Descripcion:"Viaje largo pero tranquilo",
  Tipo:"externo"
},
{
  CiudadOrigen:"Pasaje",
  CiudadDestino:"Huaquillas",
  PrecioRuta:"60",
  Descripcion:"viaje medio largo",
  Tipo:"interno"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino:"Cuenca",
  PrecioRuta:"60",
  Descripcion:"Viaje largo pero tranquilo",
  Tipo:"externo"
},
{
  CiudadOrigen:"Pasaje",
  CiudadDestino:"Huaquillas",
  PrecioRuta:"60",
  Descripcion:"viaje medio largo",
  Tipo:"interno"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino:"Cuenca",
  PrecioRuta:"60",
  Descripcion:"Viaje largo pero tranquilo",
  Tipo:"externo"
},
{
  CiudadOrigen:"Pasaje",
  CiudadDestino:"Huaquillas",
  PrecioRuta:"60",
  Descripcion:"viaje medio largo",
  Tipo:"interno"
},
{
  CiudadOrigen: "Pasaje",
  CiudadDestino:"Cuenca",
  PrecioRuta:"60",
  Descripcion:"Viaje largo pero tranquilo",
  Tipo:"externo"
},
{
  CiudadOrigen:"Pasaje",
  CiudadDestino:"Huaquillas",
  PrecioRuta:"60",
  Descripcion:"viaje medio largo",
  Tipo:"interno"
}
  ];

  getRutas(){
    return this.rutas;
  }

  getRuta(idx:number):Ruta{
    return this.rutas[idx];
  }

  constructor() {
    console.log("servicio listo para usar...");
   }

   rutaOrigenBuscada(corigen: string):number{
    let rb = -1;
    for (let i = 0; i < this.rutas.length; i++){
      if (this.rutas[i].CiudadOrigen.toLowerCase() == corigen.toLowerCase()) {
        rb = i;
      }
    }
    return rb;
  }
}
export interface Ruta{
  CiudadOrigen: string;
  CiudadDestino: string;
  PrecioRuta: string;
  Descripcion: string;
  Tipo: string;
}




