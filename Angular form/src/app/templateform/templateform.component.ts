import { Component, OnInit } from '@angular/core';
import {User } from "../user";
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  topics=['react','angular','vue','node'];

 userModel =new User('','',null,'','',false );
 display(userdata){
   
   console.log("name:-",userdata.value.name );
   console.log("contact:-",userdata.value.phone);
   console.log("Email:-",userdata.value.email);
   console.log("options",userdata.value.subscribe);
   console.log("time prefrence:-",userdata.value.timepreference );
  }
}
