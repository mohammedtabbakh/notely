import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  path:string='../application.json';

  constructor() { }

  ngOnInit(): void {
    var fs = require('fs');
    var menObject;
    
    // Read the file, and pass it to your callback
    fs.readFile('../application.json, handleJSONFile');
    
    // Handle the data 
    var handleJSONFile = function (err, data) {
        if (err) {
            throw err;
        }
        menObject = JSON.parse(data);
    }
    console.log(menObject);
  }

}
