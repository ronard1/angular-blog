import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = 'https://cdn.mos.cms.futurecdn.net/aTK8YBkBAbqCSzNGxt8adL.jpg'
  contentTitle:string='titulo contenido'
  contentDescription:string = 'Decripcion contenido'
}
