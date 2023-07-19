import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ruta: number=0;
  ngOnInit(): void {}
   constructor(private _userService:UserService,private router:Router){

   }
   buscaruta(CiuOri: string) {
     console.log(CiuOri);
     this.ruta = this._userService.rutaOrigenBuscada(CiuOri);
     this.VerRuta(this.ruta);
   }
   VerRuta(idx: number){
     console.log(idx);
     this.router.navigate(['/ruta',idx]);
   }
}
