import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado: Professor;
  public modalRef: BsModalRef;


  public professores = [
    { id: 1, nome: 'Lauro', disciplina: 'Matemática' },
    { id: 2, nome: 'Roberto', disciplina: 'Física' },
    { id: 3, nome: 'Angela', disciplina: 'Português' },
    { id: 4, nome: 'Paulo', disciplina: 'Inglês' },
    { id: 5, nome: 'Rodrigo', disciplina: 'Informática' },
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  professorSelect(prof: Professor) {
    this.professorSelecionado = prof;
  }

  voltar() {
    this.professorSelecionado = null!;
  }

}
