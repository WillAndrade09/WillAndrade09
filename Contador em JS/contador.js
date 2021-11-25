var b2 = document.getElementsByClassName('buton')[1]
var cont = document.getElementById('inicio')
 var select = document.getElementById('seltab') 
 var valores = []   
var res = document.getElementById('res')
 function islist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return false                            //teste se o numero ta na lista

    }else{
        return true
}
}

function isNumero(n){
if ( Number (n) >= 1 && Number(n) <= 100){
    return true                                             //teste pra ver se o numero está em 1 a 100
}else{
    return false
    }
}
 function adicionar (){
  
     if(cont.value.length == 0 ){
        alert('Formulario em branco')
     }else if (isNumero(cont.value) && islist(cont.value, valores)){
        valores.push(Number(cont.value))                                //colocar valores na array
        item = document.createElement('option')
        item.text = `valor ${Number(cont.value)} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
        }else{
            alert('[error] Numero invalido')
        }  
        cont.value = ''
        cont.focus()   // foco do cursor
    } 
    
    function finalizar(){
        if (valores.length == 0){
            alert('[error] por favor adicione um numero')
        }else{
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores){                           //percorrer o valores da array
               soma += valores[pos]                            // recebe e soma     
               
               if (valores[pos] > maior){
                    maior = valores[pos]
                
                }if(valores[pos] < menor){
                     menor =  valores[pos]
                }
            }
            media += soma / valores.length
            
            res.innerHTML = ''
            res.innerHTML += `<p>O total de valores adicionados é : ${valores.length}</p>`
            res.innerHTML += `<p>O menor numero foi : ${menor}</p>`     //+= recebe e concatena
            res.innerHTML += `<p>O maior numero foi : ${maior}</p>`
            res.innerHTML += `<p>A soma de todos é : ${soma}</p>`
            res.innerHTML += `<p>A media é : ${media}</p>`
        }
    }
                   
  
    
    

