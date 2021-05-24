import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

 nombreLower : string = "programacion";
 nombreUpper : string = "PROGRAMACION";
 nombreCompleto : string = "ProGraMacIOn";

 fecha: Date = new Date();


}
