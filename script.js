function chamaNota(){
   let nome = prompt("Qual o nome do aluno?")
   let n1 = Number(prompt(`Primeira nota de ${nome}:`))
   let n2 = Number(prompt(`Segunda nota de ${nome}:`))
   let media = (n1+n2)/2
   let resultado1 = document.getElementById("res1")
   let resultado = document.getElementById("res")
   let analise = document.getElementById("analise")
   analise.innerHTML = `Analisando a situação de ${nome}`
   if (media>6){
    resultado1.innerHTML = `Com as notas ${n1} e ${n2} <strong> a média é ${media} </strong>`
    resultado.innerHTML = "Com média acima de 6, o aluno está <span class = 'aprovado'><strong>APROVADO</strong></span>"
   } else if (media>=3){
       resultado1.innerHTML = `Com as notas ${n1} e ${n2} <strong> a média é ${media} </strong>`
       resultado.innerHTML= "Com média entre 3 e 6, o aluno está em <span class = 'recuperar'><strong> RECUPERAÇÂO </strong></span>"
   } else{
       resultado1.innerHTML = `Com as notas ${n1} e ${n2} <strong> a média é ${media} </strong>`
       resultado.innerHTML = "Com média abaixo de 3, o aluno está <span class = 'reprovado'><strong>REPROVADO</strong></span>"
   }
}