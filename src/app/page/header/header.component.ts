import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = Constant.COMPANY;
  public findPlaceholder = Constant.FIND_PLACEHOLDER;
  public environment = "(Ambiente de teste)";
  public UserLogin = "Usuário";

  private titlesize;

  constructor() {
  }

  header(){
    this.titlesize = this.title.length+2+"%";
    console.log(this.titlesize);
    document.getElementById("nav_title").style.width= this.titlesize;
  }

  ngOnInit() {
    this.header();
  }

}
