import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'hub-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  private usuarios:Usuario[];

  constructor(private _usuariosService: UsuariosService,private router : Router,private dialog:   MatDialog ) {
    
   }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  // obtenerUsuarios(){
  //   this._usuariosService.obtener().subscribe(
  //     result =>{
  //       this.usuarios=result.datos;
  //       console.log (result);
  //     },
  //     err =>{
  //       console.log(err);
  //     }
  //   )
  // }
  // Recibe de respuesta un objeto de tipo Usuarios
  obtenerUsuarios(){
    this._usuariosService.obtener().subscribe(
      result =>{
        this.usuarios=result;
        console.log (result);
      },
      err =>{
        console.log(err);
      }
    )
  }

  editarUsuario(usuario:Usuario){
    console.log(usuario);
    if (usuario) {
      this.router.navigate(['/usuarios/editar', usuario._id]);
    } 
  }
  adicionarUsuario(){
      this.router.navigate(['/usuarios/adicionar']);
  }

  eliminarUsuario(usuario:Usuario):void{
    console.log(usuario);
    let dialogRef = this.dialog.open(ModalEliminarUsuario, {
      width: '350px',
      data: usuario 
    });

    dialogRef.afterClosed().subscribe(result => {

      this._usuariosService.deleteUserById(result._id).subscribe(
            res => {
              this.obtenerUsuarios();
              this.router.navigate(['/usuarios']);
              console.log('done');
            }
      );
    });
  }
 
}

@Component({
  selector: 'modal-eliminar-usuario',
  templateUrl: 'modal-eliminar-usuario.html',
})
export class ModalEliminarUsuario {

  constructor(
    public dialogRef: MatDialogRef<ModalEliminarUsuario>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cancelarClick(): void {
    this.dialogRef.close();
  }

}