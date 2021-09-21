import { Component, OnInit } from '@angular/core';
import { UserApi } from 'src/app/utils/api/module/Users';

interface ItemData {
  id: string;
  name: string;
  Age: number;
  lastName: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  constructor(private userService:UserApi,){}

  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  async saveEdit(id: string) {
    const index = this.listOfData.findIndex(item => item.id === id);
    console.log(index);
    
    const response = await this.userService.put(id,this.editCache[id].data)
    location.reload();
    
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  async remove(id:string){
    const response = await this.userService.remove(id);
    console.log(response);
    location.reload();
  }

  ngOnInit(): void {
    this.getAll();
  }


  async getAll(){
    const response = await this.userService.getAll();
    const data =response.data.map((item:any)=>item={id:item._id,...item});
    
    this.listOfData = data;
    this.updateEditCache();
  }
}
