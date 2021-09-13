import { Component, OnInit } from '@angular/core';
import { SiniestroService } from '../../../services/siniestro.service';
import { Siniestro } from '../../../shared/siniestro';

@Component({
  selector: 'app-list-siniestro',
  templateUrl: './list-siniestro.component.html',
  styleUrls: ['./list-siniestro.component.scss'],
})
export class ListSiniestroComponent implements OnInit {
  ListSiniestros!: Siniestro[];
  errMess!: string;
  constructor(private SiniestroService: SiniestroService) {}

  ngOnInit(): void {
    this.SiniestroService.getSiniestros().subscribe(
      (ListSiniestros) => (this.ListSiniestros = ListSiniestros),
      (errmess) => (this.errMess = <any>errmess)
    );
  }
}
