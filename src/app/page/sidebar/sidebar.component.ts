import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';
import { Menu } from 'src/app/shared/menu';
import { MenuItens } from 'src/app/shared/menuItens';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public title = Constant.APP_INITIAL;
  public menu: Array<Menu> = new Array<Menu>();

  public sidebarOpen = false;
  public sidebarClose = true;

  constructor() {
    this.createMenu();
  }

  sidebar(){
    if(this.sidebarOpen == false){
      this.sidebarOpen = true;
      this.sidebarClose = false;
      document.getElementById("navbar").style.width="94.2%";
      document.getElementById("navSpace").style.width="40%";
    }
    else{
      this.sidebarOpen = false;
      this.sidebarClose = true;
      document.getElementById("navbar").style.width="83.9%";
      document.getElementById("navSpace").style.width="40%";
    }
  }

  createMenu() {
    let listMenu = new Array<Menu>();
    let listItem = new Array<MenuItens>();

    let menuaux = new Menu();
    let menuitem = new MenuItens();

    menuaux.AddMenu(1,"Home", "#", "fa fa-home", null, new Array<MenuItens>());
    menuitem.AddItem(1,"Submenu 1","#");
    listItem.push(menuitem);
    menuitem = new MenuItens();
    menuitem.AddItem(2,"Submenu 2","#");
    listItem.push(menuitem);
    menuitem = new MenuItens();
    menuitem.AddItem(3,"Submenu 3","#");
    listItem.push(menuitem);
    menuitem = new MenuItens();
    menuitem.AddItem(4,"Submenu 4","#");
    listItem.push(menuitem);
    menuaux.Itens = listItem;
    listMenu.push(menuaux);

    menuaux = new Menu ();
    menuaux.AddMenu(2,"Documentos", "#", "fa fa-folder", null, new Array<MenuItens>());
    listMenu.push(menuaux);

    menuaux = new Menu ();
    menuaux.AddMenu(3,"Configuração", "#", "fa fa-cogs", null, new Array<MenuItens>());
    listMenu.push(menuaux);


    this.menu = listMenu;
  }

  ngOnInit() {
  }

}
