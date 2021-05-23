import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

 nombreLower : string = "ciapparelli";
 nombreUpper : string = "CIAPPARELLI";
 nombreCompleto : string = "CiapPareLli";

 fecha: Date = new Date();


}
