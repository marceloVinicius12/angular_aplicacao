import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from './../models/professor';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public modalRef: BsModalRef;
 public professorForm : FormGroup
  public titulo = 'Professor'
  public professorSelecionado: Professor ;
public textSimple : string

  professores = [
  {id:1, nome:' rogerio', disciplina:'portugues'},
  {id:2, nome: 'joao', disciplina:'historia'},
  {id:3, nome: 'michael', disciplina:'ingles'},
  {id:4, nome: 'maria', disciplina:'artes'},
  {id:5, nome: 'guto', disciplina:'informatica'},
  {id:6, nome: 'ana', disciplina:'geografia'},
]

  constructor(private fb : FormBuilder, private modalService: BsModalService) {}
      openModal(Template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(Template);
      }
    
    professorSubmit(){
      console.log(this.professorForm.value)
    }
  professorSelect(professor: Professor){
    this.professorSelecionado = professor ;
    this.professorForm.patchValue(professor);
    }
    voltar(){
      this.professorSelecionado = null;
    }

    ngOnInit(): void {
    }



}
