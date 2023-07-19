import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  ruta:any=[];
constructor(private activatedRoute:ActivatedRoute, private _userService: UserService){
this.activatedRoute.params.subscribe(params =>{
  this.ruta=_userService.getRuta(params['CiudadOrigen']);
console.log(this.ruta);
})
}

}
