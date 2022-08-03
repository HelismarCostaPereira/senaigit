// Declara lista de alunos
let listaDeAlunos = ['Wanderly', 'Marcelo', 'Mateus', 'Miquéias', 'Nelson','Ayrton']

// Conta numero de alunos
let numeroDeAlunos = listaDeAlunos.length

// Verifica os números 0, par e ímpar por FOR
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
  if (contador === 0) {
    console.log('O número atual é zero')
  } else if (contador % 2 === 0) {
    console.log('O numero atual, ' + contador + ' é par')
  } else {
    console.log('O numero atual, ' + contador + ' é ímpar')
  }
}