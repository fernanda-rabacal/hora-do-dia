function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if(hora>= 0 && hora<12) {
        img.src = 'manhã.jpg' //img se refere à variavel
        document.body.style.background = 'rgb(255, 146, 240)'
    }
    else if (hora>=12 && hora<=18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(239, 255, 96)'
    } 
    else {
        img.src= 'noite.jpg'
        document.body.style.background = 'rgb(32, 4, 134)'
    }
}   





