import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Cliente } from './cliente';
import { MatIcon } from '@angular/material/icon';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
     MatCardModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIcon
      
    ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cliente: Cliente =  Cliente.newCliente();

  constructor(private service: ClienteService){

  }

  salvar(){
    this.service.salvar(this.cliente);
  }
}
