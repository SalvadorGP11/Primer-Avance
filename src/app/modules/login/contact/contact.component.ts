import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  satisfaction: { rating: number, comment: string } = { rating: 0, comment: '' };
  checkInDate: Date;
  checkOutDate: Date;
  numGuests: string ;
  name: string;
  checkInTime: string;
  checkOutTime: string ;
  reservationIn: string = "";
  reservationOut: string = "";

  array1: any[] = [];
  array2: any[] = [];
  array3: any[] = [];
  array4: any[] = [];
  array5: any[] = [];
  array6: any[] = [];

  numAdults: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  band: number = 0;
  send: number = 0;
  nombre: string="";
  constructor(private router: Router) {
    this.checkInDate = new Date('');
    this.checkOutDate = new Date('');
    this.name = "";
    this.numGuests = "";
    this.checkInTime = "16:00";
    this.checkOutTime = "11:00";
  }
  enviarNombre() {
    console.log(this.nombre);
    this.router.navigate(['reservations', this.nombre]);
  }
  ngOnInit(): void {
  }

  onSatisfactionSubmit(satisfaction: { rating: number, comment: string }) {
    this.satisfaction = satisfaction;
  }

  onSubmit() {

    this.send = 0;
    this.satisfaction.rating = 0;
    this.satisfaction.comment = '';

    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;

    let checkInD = new Date(this.checkInDate);
    let Year = checkInD.getFullYear();
    let Month = String(checkInD.getMonth() + 1).padStart(2, "0");
    let Day = String(checkInD.getDate()).padStart(2, "0");
    let checkInDateString = `${Year}-${Month}-${Day}`;

    let checkOutD = new Date(this.checkOutDate);
    let YeaR = checkOutD.getFullYear();
    let MontH = String(checkOutD.getMonth() + 1).padStart(2, "0");
    let DaY = String(checkOutD.getDate()).padStart(2, "0");
    let checkOutDateString = `${YeaR}-${MontH}-${DaY}`;
    /*const checkInDateString = this.checkInDate.toLocaleString();
    const checkOutDateString = this.checkOutDate.toLocaleString();*/


    this.band = 0;

    const array1Str = localStorage.getItem('checkIn');
    if (array1Str) {
      this.array1 = JSON.parse(array1Str);
      //console.log(this.array1[0]);
      //console.log(this.array1[2]);
    }
    const array2Str = localStorage.getItem('checkOut');
    if (array2Str) {
      this.array2 = JSON.parse(array2Str);
    }
    const array3Str = localStorage.getItem('checkInTime');
    if (array3Str) {
      this.array3 = JSON.parse(array3Str);
      //console.log(this.array1[0]);
      //console.log(this.array1[2]);
    }
    const array4Str = localStorage.getItem('checkOutTime');
    if (array4Str) {
      this.array4 = JSON.parse(array4Str);
    }
    const array5Str = localStorage.getItem('name');
    if (array5Str) {
      this.array5 = JSON.parse(array5Str);
    }
    const array6Str = localStorage.getItem('numGuests');
    if (array6Str) {
      this.array6 = JSON.parse(array6Str);
    }

    if (checkInDateString < formattedDate || checkOutDateString < formattedDate) {

      this.band = 1;
    } else if (checkInDateString >= checkOutDateString) {
      this.band = 2;
    } else {
      for (let i = 0; i <= this.array1.length; i++) {
        if (checkInDateString >= this.array1[i] && checkInDateString < this.array2[i]) {
          this.band = 3;
          break;
        } else if (checkOutDateString > this.array1[i] && checkOutDateString <= this.array2[i]) {
          this.band = 4;
          break;
        } else if (checkInDateString < this.array1[i] && checkOutDateString > this.array2[i]) {
          this.reservationIn = this.array1[i];
          this.reservationOut = this.array2[i];
          this.band = 5;
          break;
        }

      }
    }


    switch (this.band) {
      case 0:
        this.array1.push(checkInDateString);
        this.array2.push(checkOutDateString);
        this.array3.push(this.checkInTime);
        this.array4.push(this.checkOutTime);
        this.array5.push(this.name);
        this.array6.push(this.numGuests);

        localStorage.setItem('checkIn', JSON.stringify(this.array1));
        localStorage.setItem('checkOut', JSON.stringify(this.array2));
        localStorage.setItem('checkInTime', JSON.stringify(this.array3));
        localStorage.setItem('checkOutTime', JSON.stringify(this.array4));
        localStorage.setItem('name', JSON.stringify(this.array5));
        localStorage.setItem('numGuests', JSON.stringify(this.array6));
        Swal.fire({
          icon: 'success',
          title: 'Your reservation has been made...',
        })
        this.send = 1;
        this.name = ' ';
        this.numGuests = '';
        this.checkInDate = new Date('');
        this.checkOutDate = new Date('');
        break;
      case 1:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Reservations must be done after current date!',
        })
        break;
      case 2:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You can not make a reservation in these dates!',
        })
        break;
      case 3:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Check-In date occupied!',
        })
        break;
      case 4:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Check-Out date occupied!',
        })
        break;
      case 5:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Date occupied:' + this.reservationIn + 'a' + this.reservationOut,
        })
        break;
    }
  }

  /* contactForm: FormGroup = new FormGroup({});
 
   constructor(private formBuilder: FormBuilder) { }
 
   numGuests: string = "";
   numAdults: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
 
   ngOnInit(): void {
     this.contactForm = this.formBuilder.group({
       name: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       phone: ['', Validators.required],
       message: ['', Validators.required]
     });
   }
   
   onSubmit() {
     if (this.contactForm.valid) {
       console.log(this.contactForm.value);
       // Enviar el formulario a través de una petición HTTP
     } else {
       console.log("Formulario inválido");
     }
   }*/
}
