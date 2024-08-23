function toggleMode(){
    const html = document.documentElement
       html.classList.toggle("Light")
       

       const img = document.querySelector('#profile img')

       if (html.classList.contains("Light")){
        img.setAttribute('src', './assets/meu avatar-light.png')
      
    } else {

        img.setAttribute('src', './assets/meu avatar.png')
    
    } 

}

       //achei desnecessario colocar todos os comentarios do curso, mas em si e so colocar
       //tudo em ordem, no caso do html e css, em ordem de cima pra baixo
       //e no JAVASC colocar em ondem de acao/funcao que e dado ao comando
       //como por exemplo, colocar o toggle em cima de tudo
       // por que ele e o principal, ja que e a mudanca de tela, e sem ele nem precisaria dos outros comandos
       //acho que e isso, nao consegui explicar mas entendi kkkk