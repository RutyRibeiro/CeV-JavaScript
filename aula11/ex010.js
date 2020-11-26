function verificar() {
    
    var vel = document.getElementById('txtvel')
    var resp = document.getElementById('resp')
    resp.innerHTML=`<p>Sua velocidade máxima ${vel.value} KM/h!</p>`
    if (Number(vel.value) > 50){
        resp.innerHTML+='<p>Você foi multado!</p>'
    }
    else{
        resp.innerHTML+='<p>Você <strong>não</strong> foi multado!</p>'
    }
}