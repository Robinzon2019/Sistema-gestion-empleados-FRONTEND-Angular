import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(data => {
      console.log(data);
      Swal.fire(
        'Empleado registrado',
        `El empleado ${this.empleado.nombre} ha sido registrado con exito`,
        'success'
      )
      this.irAListaDeEmpleados();
    },
    error => console.log(error));
  }

  irAListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(): void{
    console.log(this.empleado);
    this.guardarEmpleado();
  }

}
