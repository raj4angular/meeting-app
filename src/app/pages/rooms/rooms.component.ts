import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../core/service/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  locationId : number = 0;
  buildingId : number = 0;
  floor : number = 0;
  roomsArray: any[] = [];
  roomObj =  {
    "roomName": "",
    "roomLocationId": 0,
    "roomBuildingId": 0,
    "roomFloor": 0,
    "roomSeatingCapacity": 0,
    "roomDescription": ""
}
  locationArray: any[] = [];
  buildingArray: any[] = [];
  floorArray: any[] = [];

  constructor(private roomsService: RoomsService){
  }

  ngOnInit(): void {
    this.loadRooms();
    this.loadLocations();
    this.loadFloors();
  }

  loadRooms(){
    this.roomsService.getAllRooms().subscribe((response:any)=>{
        this.roomsArray= response;
        console.log("this.roomsArray"+this.roomsArray);
    })
  }


  addRoom(){
    //alert(this.locationId +"==11=="+this.locationId);
   // debugger;
   this.roomObj.roomLocationId = this.locationId;
   this.roomObj.roomBuildingId = this.buildingId;
    this.roomsService.createRoom(this.roomObj).subscribe((resp: any)=>{
     // debugger;
     //alert(resp.roomLocationId +"==22=="+resp.roomBuildingId);
      this.loadRooms();
      alert("Room added successfully.");
    }) 
  }

  loadLocations(){
    this.roomsService.getAllLocations().subscribe((response:any)=>{
        this.locationArray= response;
        console.log("this.locationArray"+this.locationArray);
    })
  }

 

  loadBuildingsByLocation(){
    this.roomsService.getAllBuildingsByLocationId(this.locationId).subscribe((response:any)=>{
        this.buildingArray= response;
        console.log("this.buildingArray"+this.buildingArray);
    })
  }


  loadFloors(){
    this.roomsService.getAllFloors().subscribe((response:any)=>{
        this.floorArray= response;
        console.log("this.floorArray"+this.floorArray);
    })
  }


  getLocationNameById(location_id:number){
    this.roomsService.getLocationByLocationId(location_id).subscribe((response:any)=>{
        return response.locationName;
    })
  }




}
