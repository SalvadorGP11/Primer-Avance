import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  nombre:any;
  nombreEncontrado = false;
  reservations: any = [];
constructor(private route:ActivatedRoute) {
}

ngOnInit() {
  let name = JSON.parse(localStorage.getItem('name') ?? '[]');
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
      if (name.includes(this.nombre)) {
        this.nombreEncontrado = true;
        Swal.fire({
          icon: 'success',
          title: 'You currently have a reservation ' + this.nombre,
        })
        this.reservations = JSON.parse(localStorage.getItem(this.nombre) ?? '[]');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'You did not have a reservation',
          text: 'Check-In again ' + this.nombre,
        })
      }
    });
}
}
