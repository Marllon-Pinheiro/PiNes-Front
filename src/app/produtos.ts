export interface iProduto {
  id: number;
  name: string;
  descricao: string;
  preco: number;
  imagem: string;
}



export const produtos: iProduto[] = [
{id: 1, name:"HeadSet", descricao:"HV-H2232d", preco:110.00, imagem:"./assets/headset.png"},
{id: 2, name:"Notebook", descricao:"intel i5", preco:750.54, imagem:"./assets/notebook.png"},
{id: 3, name:"Samsung s21", descricao:"128GB - 6GB RAM", preco:2550.49, imagem:"./assets/celular.png"},

]

