import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import { Observable } from 'rxjs';
import { Medico } from '../../model/medico';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.page.html',
  styleUrls: ['./crear-medico.page.scss'],
})
export class CrearMedicoPage implements OnInit {

  medico: Medico = new Medico();
  constructor(private medicosService: MedicosService,
    private toastController: ToastController) { }

  ngOnInit() {}

  cerarMedico() {
  }

}
