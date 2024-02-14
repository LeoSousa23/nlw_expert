const questions = [
  {
    question: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
    answers: [
      "var",
      "let",
      "const"
    ],
    correta: 2
  },
  {
    question: "Qual dos seguintes métodos converte uma string para um número inteiro em JavaScript?",
    answers: [
      "parseInt()",
      "parseFloat()",
      "toInteger()"
    ],
    correta: 0
  },
  {
    question: "Como você chama uma função que é passada como argumento para outra função em JavaScript?",
    answers: [
      "Chamada de volta (Callback)",
      "Execução condicional",
      "Chamada recursiva"
    ],
    correta: 0
  },
  {
    question: "O que o operador '===' faz em comparações em JavaScript?",
    answers: [
      "Compara valores e tipos de dados",
      "Compara apenas valores",
      "Compara apenas tipos de dados"
    ],
    correta: 0
  },
  {
    question: "Como você escreve um comentário de uma linha em JavaScript?",
    answers: [
      "// Comentário",
      "# Comentário",
      "/* Comentário */"
    ],
    correta: 0
  },
  {
    question: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
    answers: [
      "push()",
      "append()",
      "addToEnd()"
    ],
    correta: 0
  },
  {
    question: "Qual é a função do método 'map()' em arrays JavaScript?",
    answers: [
      "Modificar cada elemento do array",
      "Filtrar elementos do array",
      "Remover o último elemento do array"
    ],
    correta: 0
  },
  {
    question: "O que o método 'querySelector()' faz em JavaScript?",
    answers: [
      "Seleciona elementos por classe",
      "Seleciona elementos por ID",
      "Seleciona elementos por tag"
    ],
    correta: 0
  },
  {
    question: "Como você verifica se uma variável é do tipo array em JavaScript?",
    answers: [
      "isArray()",
      "isTypeOf('array')",
      "checkArray()"
    ],
    correta: 0
  },
  {
    question: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
    answers: [
      "for (let i = 0; i < 10; i++)",
      "for (i = 0; i < 10; i++)",
      "for (i < 10; i++)"
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for (const item of questions) {
  //pra cada item ele clona o template
  const quizItem = template.content.cloneNode(true)

  //modifica o h3 do template pela propriedade question
  quizItem.querySelector('h3').textContent = item.question

  // para cada 'resposta' do 'item resposta' clone o dt e muda o conteudo do span pela resposta
  for(let response of item.answers){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = response

    quizItem.querySelector('dl').appendChild(dt)
  }
  // remove o Resposta A que foi clonado
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}