const questions = [
  {
    question: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
    answers: [
      "var",
      "let",
      "const"
    ],
    correct: 2
  },
  {
    question: "Qual dos seguintes métodos converte uma string para um número inteiro em JavaScript?",
    answers: [
      "parseInt()",
      "parseFloat()",
      "toInteger()"
    ],
    correct: 0
  },
  {
    question: "Como você chama uma função que é passada como argumento para outra função em JavaScript?",
    answers: [
      "Chamada de volta (Callback)",
      "Execução condicional",
      "Chamada recursiva"
    ],
    correct: 0
  },
  {
    question: "O que o operador '===' faz em comparações em JavaScript?",
    answers: [
      "Compara valores e tipos de dados",
      "Compara apenas valores",
      "Compara apenas tipos de dados"
    ],
    correct: 0
  },
  {
    question: "Como você escreve um comentário de uma linha em JavaScript?",
    answers: [
      "// Comentário",
      "# Comentário",
      "/* Comentário */"
    ],
    correct: 0
  },
  {
    question: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
    answers: [
      "push()",
      "append()",
      "addToEnd()"
    ],
    correct: 0
  },
  {
    question: "Qual é a função do método 'map()' em arrays JavaScript?",
    answers: [
      "Modificar cada elemento do array",
      "Filtrar elementos do array",
      "Remover o último elemento do array"
    ],
    correct: 0
  },
  {
    question: "O que o método 'querySelector()' faz em JavaScript?",
    answers: [
      "Seleciona elementos por classe",
      "Seleciona elementos por ID",
      "Seleciona elementos por tag"
    ],
    correct: 0
  },
  {
    question: "Como você verifica se uma variável é do tipo array em JavaScript?",
    answers: [
      "isArray()",
      "isTypeOf('array')",
      "checkArray()"
    ],
    correct: 0
  },
  {
    question: "Qual é a sintaxe correct para um loop 'for' em JavaScript?",
    answers: [
      "for (let i = 0; i < 10; i++)",
      "for (i = 0; i < 10; i++)",
      "for (i < 10; i++)"
    ],
    correct: 0
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const certain = new Set()

for (const item of questions) {
  //pra cada item ele clona o template
  const quizItem = template.content.cloneNode(true)

  //modifica o h3 do template pela propriedade question
  quizItem.querySelector('h3').textContent = item.question

  // para cada 'resposta' do 'item resposta' clone o dt e muda o conteudo do span pela resposta
  for(let response of item.answers){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = response
    // dentro do dt, vou buscar o input e mudar o atributo name
    dt.querySelector('input').setAttribute('name', 'pergunta-' + questions.indexOf(item))
    // dentro do dt, estou selecionando o value do input e atribuindo o indice(0, 1, 2) de cada resposta
    dt.querySelector('input').value = item.answers.indexOf(response)
    // escutador de evento onde verifica qualquer mudanca no input
    dt.querySelector('input').onchange = (event) => {
      const itsCorrect = event.target.value == item.correct

      certain.delete(item)
      if(itsCorrect){
         certain.add(item)
      }
    }

    quizItem.querySelector('dl').appendChild(dt)
  }
  // remove o Resposta A que foi clonado
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}