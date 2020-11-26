function somar(){
    var num1 = document.getElementById('txtn1')
    var num2 = document.getElementById('txtn2')
    var resul=document.getElementById('resultado')
    soma= Number(num1.value)+Number(num2.value)
    resul.value=(soma)
}