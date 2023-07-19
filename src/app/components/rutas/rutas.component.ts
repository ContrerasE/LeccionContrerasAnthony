import { Component } from '@angular/core';
import { UserService, Ruta} from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas: Ruta[]=[];
   ngOnInit(): void {
    this.rutas = this._userService.getRutas();
    console.log(this.rutas);
   }
    constructor(private _userService:UserService, private router:Router){

    }
    VerRutas(idx: number){
      console.log(idx);
      this.router.navigate(['/rutas',idx]);
    }

}
