import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {
  id: any;
  servicios : any;
  editForm: FormGroup;
  constructor(private activedRoute: ActivatedRoute,
              private router: Router,
              private servicio: BasededatosService,
              private toastr: ToastrService,
              private fb: FormBuilder) {
    this.editForm = this.fb.group({
      nombre: ['' , Validators.required],
      descripcio: ['', Validators.required],
      precio: [ , Validators.required]
    })
   }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getServicioId(this.id)
      .subscribe(
        res =>{
          this.servicios = res;
        },
        error => console.log(error)
      )
    })
  }
  editarServicio(){
    this.servicio.updateServicio(this.id,this.editForm.value)
    .subscribe(
      res =>{
        this.toastr.success('Servicio actualizado correctamente!','Se Editó Servicio');
        this.router.navigate(['/servicio/table']);
      },
      error => console.log(error)
    )
  }
  cancelar(){
    this.router.navigate(['/servicio/card',this.id])
  }

}
