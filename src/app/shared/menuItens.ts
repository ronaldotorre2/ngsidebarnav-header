export class MenuItens {
    public Id: number;
    public Name: string;
    public Url: string;

    AddItem(id: number, name: string, url: string){
      this.Id = id;
      this.Name = name;
      this.Url = url;
    }
}
