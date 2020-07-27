import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import { Medico } from '../../model/medico';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.page.html',
  styleUrls: ['./listar-medicos.page.scss'],
})
export class ListarMedicosPage implements OnInit {

  constructor(private medicosService: MedicosService) { }

  medicos: Observable<Medico[]>;

  ngOnInit() {
    this.medicos = this.medicosService.getMedicos();
  }

}
