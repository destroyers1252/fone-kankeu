import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convertisseur';
  resultat=""
  val=10
  startdevise="FCFA"
  finaldevise="FCFA"

  
}
