import { Component,OnInit } from '@angular/core';
import { ServicePointService } from '../service-point.service';
import { Servicepoint } from '../service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicepoints:Servicepoint[]=[];
  error = '';
  success = '';
  servicepoint:Servicepoint={ 
    id: 0,
    name: '',
    description: '',
    image_path:'',
    status:0,
    icon:'',
  
  }

  constructor (private servicePoints: ServicePointService ){

  }

  ngOnInit(){
    this.getServices()
    
  }

  getServices(): void {
    this.servicePoints.getAll().subscribe(
      (data:Servicepoint[])=> {
        console.log(data);
      this.servicepoints = data; 
      }
    )
  } 

}
