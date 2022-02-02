import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-ville',
  templateUrl: './get-ville.component.html',
  styleUrls: ['./get-ville.component.scss']
})
export class GetVilleComponent implements OnInit {

  value : string = ''
  subMenu : any[] = []
  items = [
    {
      nom: 'Paris', 
      check: false,
      sub:[
        {nom: 'Seine-et-Marne (77)', check: false},
        {nom: 'Yvelines (78)', check: false},
        {nom: 'Essonne (91)', check: false},
        {nom: 'Hauts-de-Seine (92)', check: false},
        {nom: 'Seine-Saint-Denis (93)', check: false},
      ]
    },
    {
      nom: 'Lille', 
      check: false,
      sub:[]
    },
    {
      nom: 'Nantes', 
      check: false,
      sub:[]
    },
    {
      nom: 'Bordeaux', 
      check: false,
      sub:[]
    },
    {
      nom: 'Rennes', 
      check: false,
      sub:[]
    },
  ]
  constructor(
    private modalCtrl : MatDialogRef<GetVilleComponent>, @Inject(MAT_DIALOG_DATA) public id: string,
  ) { }

  showSubMenu(items : any, index:number){
    items.forEach((item : any, i : number) => {
      item.check = false
      if(i == index){
        console.log(item)
        item.check = !item.check
        if(item.sub.length == 0){
          return this.value = item.nom
        }
      }
    });
  }

  getValue(items : any, index:number){
    items.forEach((item : any, i : number) => {
      item.check = false
      if(i == index){
        item.check = !item.check
        return this.value = item.nom
      }
    });
  }

  close(){
    this.modalCtrl.close()
  }

  ngOnInit(): void {
  }

}

