import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string = 'https://cdn.mos.cms.futurecdn.net/aTK8YBkBAbqCSzNGxt8adL.jpg'
  contentTitle:string='titulo contenido'
  contentDescription:string = 'Decripcion contenido'

  constructor(
    private route:ActivatedRoute
  ){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value =>
      console.log(value.get("id"))
    )
  }
}
