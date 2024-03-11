import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllRooms(){
    return this.http.get("http://localhost:8080/api/v1/rooms")
  }

  getAllBookings(){
    return this.http.get("http://localhost:8080/api/v1/GetAllBooking")
  }

  getTimeList(){
    return this.http.get("http://localhost:8080/api/v1/getTimeList")
  }

  createBooking(obj: any){
    return this.http.post("http://localhost:8080/api/v1/bookings",obj)
  }

  findBooking(obj: any){
    return this.http.post("http://localhost:8080/api/v1/findBooking",obj)
  }
}
