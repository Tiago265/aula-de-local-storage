function confirm(){
    let n = document.getElementById('numero').value
    let adi = document.getElementById('adivinhar numero').value = null;
    if(n === adi){
        alert('Parabéns, você acertou!')
    }
    if(n < adi){
        alert('tente um número menor')
    }
    if(n > adi){
        alert('tente um número maior')
    }
}


