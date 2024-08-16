import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { CommonModule } from '@angular/common';
import { ProdutoComponenteComponent } from './components/produto-componente/produto-componente.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,CommonModule, PrimeiroComponenteComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'projeto-01';
//   user = {
//     nome:"Mauro",
//     email:"maumau@gmail.com",
//     idade: 18,
//     hasCarteira: false,
//     image_url: "https://pbs.twimg.com/media/CsUzcXqWYAARYZm.jpg"
//   }
//   frutas = ["maracuja","mamão","laranja","limão"]

//   tirarCarteira():void{
//     this.user.hasCarteira = true
//   }

//   mudarTitle():void{
//     this.title = "Novo Titulo"
//     this.user.nome = "ABLUBLÈ"
//   }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProdutoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  produtos = [
    {
      nome: 'Produto 1',
      preco: 100,
      avaliacao: 4.5,
      imagem: 'path/to/image1.jpg',
    },
    {
      nome: 'Produto 2',
      preco: 200,
      avaliacao: 4.0,
      imagem: 'path/to/image2.jpg',
    },
    {
      nome: 'Produto 3',
      preco: 300,
      avaliacao: 5.0,
      imagem: 'path/to/image3.jpg',
    },
  ];
}
