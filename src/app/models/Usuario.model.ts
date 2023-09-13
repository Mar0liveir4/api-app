export class Usuario
{
  id?: number;
  nome!: string;
  email!: string;
  senha!: string;

}

// 1 : o id é indefinido( number | undefined)(caso seja nulo)
// 2 : por uma ! para indicar que futuramente terá valor(campo obrigatorio)
// 3 :  por uma ? para indicar que não é necessario, ou seja, pode ser nulo
