function load(){
    var hor = new Date()
    var hora = document.getElementById('hora')
    var msg = document.getElementById('img')
    var body = document.getElementsByTagName('body')
    hora.innerHTML=`<p>São ${hor.getHours()} horas </p>` 

    if(hor.getHours()>= 0 && hor.getHours()<12){
        msg.innerHTML=`<p>Bom dia</p>` 
        body.style.background='black'
    }
    else if(hor.getHours()>= 12 && hor.getHours()<18){
        msg.innerHTML=`<p>Boa Tarde</p>`
        body.style.background='black'

    }
    else{
        msg.innerHTML=`<p>Boa noite</p>`
    }

}