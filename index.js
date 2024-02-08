const perguntasFutebol = [
    {
      pergunta: "Qual país sediou a Copa do Mundo de 2018?",
      respostas: [
        "Brasil",
        "Alemanha",
        "Rússia",
        "França",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o maior artilheiro da história da Copa do Mundo?",
      respostas: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Pelé",
        "Miroslav Klose",
      ],
      correta: 3
    },
    {
      pergunta: "Qual clube ganhou a Liga dos Campeões da UEFA em 2021?",
      respostas: [
        "Real Madrid",
        "Liverpool",
        "Bayern de Munique",
        "Chelsea",
      ],
      correta: 3
    },
    {
      pergunta: "Quantas Copas do Mundo a seleção brasileira de futebol já venceu?",
      respostas: [
        "3",
        "4",
        "5",
        "6",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é conhecido como 'O Rei' do futebol brasileiro?",
      respostas: [
        "Ronaldo Nazário",
        "Romário",
        "Zico",
        "Pelé",
      ],
      correta: 3
    },
    {
      pergunta: "Em que ano a Copa do Mundo de Futebol Feminino foi realizada pela primeira vez?",
      respostas: [
        "1991",
        "1999",
        "2003",
        "2007",
      ],
      correta: 0
    },
    {
      pergunta: "Qual país sediou a Copa do Mundo de Futebol Feminino em 2019?",
      respostas: [
        "Alemanha",
        "França",
        "Canadá",
        "Estados Unidos",
      ],
      correta: 1
    },
    {
      pergunta: "Quem ganhou o prêmio de Melhor Jogador da FIFA em 2020?",
      respostas: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Robert Lewandowski",
        "Neymar",
      ],
      correta: 2
    },
    {
      pergunta: "Quantos jogadores compõem uma equipe de futebol em campo durante uma partida?",
      respostas: [
        "9",
        "10",
        "11",
        "12",
      ],
      correta: 2
    },
    {
      pergunta: "Qual país é conhecido por sua famosa dança 'Haka' antes das partidas de rugby e futebol?",
      respostas: [
        "Austrália",
        "Nova Zelândia",
        "Fiji",
        "Samoa",
      ],
      correta: 1
    },
  ];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
  
const corretas = new Set()
const totalDePerguntas = perguntasFutebol.length
const mostrarTotal = document.querySelector ('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   
// o Link do html para o JS das perguntas e transcrever para as perguntas reais
for(const item of perguntasFutebol) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasFutebol.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true or false
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
   }
  
  quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  