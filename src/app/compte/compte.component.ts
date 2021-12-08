import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  nom : string = "";
  prenom : string = "";
  adresse : string = "";
  cp : number = 0;
  ville : string = "";
  pays : string = "";
  tel : number = 0;
  mail : string = "";
  civilite : string = "";
  login : string = "";
  pwd : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('click');
  }

}
