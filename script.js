function togglemode(){
  const html = document.documentElement
  html.classList.toggle('light')

  /*mostra onde ta a imagem*/
  const img = document.querySelector("#profile img")
  
  /*mudar a imagem do profile*/
  if (html.classList.contains("light")){
    img.setAttribute("src","./assets/avatar-light.png")
    img.setAttribute("alt","eu sem moletom")
  } else{
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "eu de moletom")
  }
}