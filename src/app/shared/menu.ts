import {MenuItens} from '../shared/menuItens';

export class Menu {
  public Id: number;
  public Name: string;
  public Url: string;
  public Icon: string;
  public Class: string;
  public Itens: Array<MenuItens> = new Array<MenuItens>();

  AddMenu(id: number,name: string,url: string,icon: string,classtyle: string,item: Array<MenuItens>){
    this.Id = id;
    this.Name = name;
    this.Url = url;
    this.Icon = icon;
    this.Class = classtyle;

    if(item.length > 0){
      this.Itens = item;
    }
    else{
      this.Itens = new Array<MenuItens>();
    }

  }
}
