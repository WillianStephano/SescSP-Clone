//Array com as imagens
const colecaoImg = [
   {
      id: 1,
      img: 'Conteudo/teste.png',
      titulo: 'Garantia de direitos e proteção',
      txt: 'Guia orienta educadoras e educadores na identificação de sinais de violência contra crianças e adolescentes'
      
   },
   
   {
      id: 2,
      img: 'Conteudo/com-máscara-ou-sem.png',
      titulo: 'Com ou sem máscara?',
      txt: 'Mesmo não sendo mais obrigatório, o uso de máscaras em locais fechados segue recomendado. Saiba o por quê!'
   }
]


//Seleciono os elementos no HTML
const titulo = document.querySelector('.titulo__carrosel')
const txt = document.querySelector('.txt__carrosel')
const img = document.querySelector('.img__carrosel')

const btProximo = document.querySelector('.bt__proximo')

let imgAtual = 0

//Ao carregar a pagina
window.addEventListener('DOMContentLoaded', function () {
   mostrarImg()
   
})

//
function mostrarImg() {
   var item = colecaoImg[imgAtual]
   img.src = item.img
   titulo.textContent = item.titulo
   txt.textContent = item.txt
}

//
function proximoConteudo(){
   imgAtual--
  if (imgAtual < 0) {
    imgAtual = colecaoImg.length - 1
  }
   mostrarImg()
}

//
setInterval(proximoConteudo, 6000)

