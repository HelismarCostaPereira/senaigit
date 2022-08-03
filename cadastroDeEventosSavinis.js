// LISTA DE EVENTO SAVINIS


var Evento = new Object()
Evento.palestrante = 'Wanderly'
Evento.participantes = ['Ismar', 'Mateus', 'Leonardo','Ana Julia']
Evento.data = '20/08/2022'




let idade = 25


if (idade < 18) {
  console.log('Menores de 18 anos não são permitidos no evento!')
 
    return 0
}

else {
  console.log('Idade válida!')
}


let dataDoEvento = '20/08/2022'
let partesData = dataDoEvento.split('/')
let data = new Date(partesData[2], partesData[1] - 1, partesData[0])

if (data < new Date()) {
    console.log('Impossível cadastrar! (Data excedida)')
  
    return 0
}

else if (dataDoEvento !== Evento.data) {
    console.log('Impossível cadastrar! (Data excedida)')
 
    return 0
}

else {
    console.log('A data é valida!')
}


let nome = 'Helismar'


if (dataDoEvento == Evento.data && Evento.participantes.length < 10) {
  Evento.participantes.push(nome)
  console.log('O nome do palestrante é: ' + Evento.palestrante)
  console.log(
    'Os participantes do evento são: ' + Evento.participantes.join(', ')
  )
  console.log('A data do evento é: ' + Evento.data)
}

else if (Evento.participantes.length >= 10) {
  console.log('Limite de participantes atingido')
 
    return 0
} 