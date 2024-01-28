import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCoverSmall:string = ""
  @Input()
  cardTitleSmall:string = ""

  constructor(){}
  
  ngOnInit(): void {    
  }

}
