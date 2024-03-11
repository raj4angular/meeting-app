import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    roomsArray: any[] = [];
    timeAr: any [] = [];
    bookingObj = {
      "roomId":0,
      "bookingDate":"",
      "fromTimeId":0,
      "toTimeId":0
  }
  findBookingAr: any[] = [];
  getAllBookingAr: any[] = [];

    constructor(private bookingService: BookingService){
      this.loadRooms();
    }

    ngOnInit(): void {
      this.getTimeList();
      this.getAllBooking();
    }

    getTimeList(){
      this.bookingService.getTimeList().subscribe((res:any)=>{
      this.timeAr = res;
      })
    }

    loadRooms(){
      this.bookingService.getAllRooms().subscribe((response:any)=>{
          this.roomsArray= response;
      })
    }

    openBooking(){
      const model = document.getElementById("myModal");
      if(model != null){
        model.style.display="block";
      }
    }

    closeBooking(){
      const model = document.getElementById("myModal");
      if(model != null){
        model.style.display="none";
      }
    }

    findBooking(){
      this.bookingService.findBooking(this.bookingObj).subscribe((resp: any)=>{
        this.findBookingAr = resp;
      })
    }
    
  saveBooking(){
  
      this.bookingService.createBooking(this.bookingObj).subscribe((resp: any)=>{
        alert(resp.message);
        this.getAllBooking();
      }) 
  }

  getAllBooking(){
    this.bookingService.getAllBookings().subscribe((response:any)=>{
        this.getAllBookingAr= response;
        console.log("this.getAllBookingAr"+this.getAllBookingAr);
    })
  }

  checkIfRoomBooked(roomId:number,timeId:number){
    console.log("checkIfRoomBooked=>roomId"+roomId);
    console.log("checkIfRoomBooked=>timeId"+timeId);
    const bookingData = this.getAllBookingAr.find(m => m.roomId == roomId && (m.fromTimeId == timeId || (m.toTimeId > 1 ? (m.toTimeId - 1) : 1  ) == timeId ));
    if(bookingData){
      return true;
    } else{
      return false;
    }
  }

    

}
