import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Martins', telefone: 32126361},
    { id: 2, nome: 'Paula', sobrenome: 'Silva', telefone: 3213123213},
    { id: 3, nome: 'Laura', sobrenome: 'Santos', telefone: 939939219},
    { id: 4, nome: 'Luiza', sobrenome: 'Correia', telefone: 919293912},
    { id: 5, nome: 'Lucas', sobrenome: 'Alves', telefone: 812882382},
    { id: 6, nome: 'Pedro', sobrenome: 'Santana', telefone: 718712732},
    { id: 7, nome: 'Paulo', sobrenome: 'Machado', telefone: 89126361},
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value)
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null!;
  }



}
