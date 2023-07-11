function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, add a img light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
