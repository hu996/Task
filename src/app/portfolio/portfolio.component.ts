import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

images:string[]=["./assets/Images/poert1.png",
"./assets/Images/port2.png",
"./assets/Images/port3.png"]

imageIcone:string="fa-solid fa-plus fa-5x";

 overlayImage:string="";

ChangeImage(imagePath:string){

 this.overlayImage=imagePath;



}


}


