import { Aluno } from './../models/aluno';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public  modalRef?: BsModalRef;
  public alunoForm: FormGroup;
public titulo = 'Alunos'
public alunoSelecionado: Aluno ;
public textSimple : string ;
  alunos = [
    {id:1, nome:'jessica', sobrenome:'alves', telefone:'1129545'},
    {id:2, nome:'paula', sobrenome:'santos', telefone:'2134545'},
    {id:3, nome:'laura', sobrenome:'ferreira', telefone:'1129893'},
    {id:4, nome:'maria', sobrenome:'araujo', telefone:'1123425'},
    {id:5, nome:'joao', sobrenome:'alves', telefone:'1129533'},
  ];


    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }
criarForm(){
  this.alunoForm = this.fb.group({
    nome : ['', Validators.required],
    sobrenome : ['',Validators.required],
    telefone : ['', Validators.required]
  });
}
alunoSubmit(){
  console.log(this.alunoForm.value)
}


  alunoSelect(aluno: Aluno){
this.alunoSelecionado = aluno ;
this.alunoForm.patchValue(aluno);
}
voltar(){
  this.alunoSelecionado = null;
}
}
