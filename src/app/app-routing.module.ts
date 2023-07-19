import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RutasComponent } from './components/rutas/rutas.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'acercade', component:AcercadeComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'ruta', component:RutasComponent},
  {path: 'rutas', component:RutasComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
