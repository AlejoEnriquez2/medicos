import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import { Observable } from 'rxjs';
import { Medico } from '../../model/medico';
import { data } from 'jquery';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.page.html',
  styleUrls: ['./crear-medico.page.scss'],
})
export class CrearMedicoPage implements OnInit {

  constructor(private medicosService: MedicosService) { }

  medico: Medico = new Medico();

  ngOnInit() {
  }
/*
  crearMedico(){
    this.medicosService.sendMedico(this.medico).subscribe(data =>{
      console.log(data);
      if(data.code='1')
        this.toast("Guardado Satisfactorio");
    });
  }*/

}
