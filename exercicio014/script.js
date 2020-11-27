function load(){
    var hor = new Date()
    var hora = document.getElementById('hora')
    var msg = document.getElementById('img')
    var body = document.getElementById('body')
   
    if(hor.getHours()>= 0 && hor.getHours()<12){
        hora.innerHTML=`<p>São ${hor.getHours()} horas da manhã</p>` 
        msg.innerHTML='<img src="./imagens/manha.png" alt="">'
        body.style.background='#ddd8b0'
    }
    else if(hor.getHours()>= 12 && hor.getHours()<18){
        hora.innerHTML=`<p>São ${hor.getHours()} horas da tarde</p>` 
        msg.innerHTML='<img src="./imagens/tarde.png" alt="">'
        body.style.background='#f39419'

    }
    else{
        hora.innerHTML=`<p>São ${hor.getHours()} horas da noite </p>` 
        msg.innerHTML='<img src="./imagens/tarde.png" alt="">'
        body.style.background='#0e5f8d'

    }

}