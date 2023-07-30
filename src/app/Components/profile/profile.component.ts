import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Models/mensaje';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  mensaje: string = '¡Hola he visto tu pagina web! y estoy interesado(a) en contactarte.'

  constructor() { }

  ngOnInit(): void {
  }

  openWhatsApp(): void{
    const mensajeW = encodeURI(this.mensaje);
    const url = `https://wa.me/51902333032?text=${mensajeW}`;
    window.open(url, '_blank');
  }

  opeGitHub(): void{
    const url = 'https://github.com/axl-bit';
    window.open(url, '_blank');
  }

  openLinkedIn(): void{
    const url = 'https://www.linkedin.com/in/axel-dev/';
    window.open(url, '_blank');
  }

}
