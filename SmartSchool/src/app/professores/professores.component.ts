import { ProfessorService } from './professor.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado: Professor;
  public modalRef: BsModalRef;
  public professorForm: FormGroup;

  public professores: Professor[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarProfessores();
  }

  criarForm() {
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
    });
  }

  salvarProfessor(professor: Professor){
    this.professorService.put(professor.id, professor).subscribe(
      (retorno: any) => {
        console.log(retorno);
        this.carregarProfessores();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  professorSubmit(){
    this.salvarProfessor(this.professorForm.value);
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  carregarProfessores(){
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  voltar() {
    this.professorSelecionado = null!;
  }

}
