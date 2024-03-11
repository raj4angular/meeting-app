import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getAllRooms(){
    return this.http.get("http://localhost:8080/api/v1/rooms")
  }

  createRoom(obj: any){
    return this.http.post("http://localhost:8080/api/v1/rooms",obj)
  }

  getAllLocations(){
    return this.http.get("http://localhost:8080/api/v1/locations")
  }

  getAllBuildingsByLocationId(location_id :number){
    return this.http.get("http://localhost:8080/api/v1/buildingsByLocation?location_id="+location_id)
  }

  getAllFloors(){
    return this.http.get("http://localhost:8080/api/v1/floors")
  }

  getLocationByLocationId(location_id :number){
    return this.http.get("http://localhost:8080/api/v1/locations/"+location_id)
  }


}
