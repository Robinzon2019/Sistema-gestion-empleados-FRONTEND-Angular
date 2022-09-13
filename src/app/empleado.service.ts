import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private http: HttpClient) { }

  //Este método nos sirve para obtener los empleados
  obtenerListaDeEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.baseURL}`);
  }

  //Este método sirve para registrar un empleado
  registrarEmpleado(empleado: Empleado): Observable<Object>{
    return this.http.post(`${this.baseURL}`, empleado);
  }

  //Este método sirve para obtener o buscar un empleado por id
  obtenerEmpleadoPorId(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.baseURL}/${id}`);
  }

  //Este método sirve para actualizar un empleado
  actualizarEmpleado(id: number, empleado: Empleado){
    return this.http.put(`${this.baseURL}/${id}`, empleado)
  }

  eliminarEmpleado(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
