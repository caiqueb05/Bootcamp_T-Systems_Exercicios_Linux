import { Component, Input } from '@angular/core';

@Component({
  selector: 'produto-componente',
  standalone: true,
  templateUrl: './produto-componente.component.html',
  styleUrls: ['./produto-componente.component.css'],
})
export class ProdutoComponenteComponent {
  @Input() nome: string = '';
  @Input() preco: number = 0;
  @Input() avaliacao: number = 0;
  @Input() imagem: string = '';
}
