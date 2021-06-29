import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-enfermera-edit',
  templateUrl: './enfermera-edit.component.html',
  styleUrls: ['./enfermera-edit.component.css']
})
export class EnfermeraEditComponent implements OnInit {

  id: any;
  nurse : any;
  editForm: FormGroup;
  constructor(private activedRoute: ActivatedRoute,
              private router: Router,
              private servicio: BasededatosService,
              private toastr: ToastrService,
              private fb: FormBuilder) { 
               this.editForm = this.fb.group({
                  user_id:[ , Validators.required],
                  nombre: ['', Validators.required],
                  ci_enfermera: ['', Validators.required],
                  telefono: ['', Validators.required],
                  direccion: ['', Validators.required],
                  sueldo: [ , Validators.required]
                })
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getEnfermera(this.id)
      .subscribe(
        res =>{
          this.nurse = res;
        },
        error => console.log(error)
      )
    })
    
  }
  
  editarEnfermera(){
    this.servicio.updateEnfermera(this.id,this.editForm.value)
    .subscribe(
      res =>{
        console.log(this.editForm);
        this.toastr.success('Enfermera actualizada correctamente!','Se Agregó enfemera');
        this.router.navigate(['/enfermeras/table']);
      },
      error => console.log(error)
    )
  }
  cancelar(){
    this.router.navigate(['/enfermeras/card',this.id])
  }


}
