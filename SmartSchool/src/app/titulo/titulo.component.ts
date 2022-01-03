import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  // ou @input() titulo = ""
  @Input() titulo!: string;

  constructor() { }

  ngOnInit() {
  }

}
