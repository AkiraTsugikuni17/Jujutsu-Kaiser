// JavaScript para interatividade

  // Adicione interatividade ao elemento com a classe .texto-grande
  var textoGrandeElement = document.querySelector('.texto-grande');
  textoGrandeElement.addEventListener('click', function () {
    // Ao clicar no texto-grande, altere a cor de fundo aleatoriamente
    var coresDeFundo = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    var corAleatoria = coresDeFundo[Math.floor(Math.random() * coresDeFundo.length)];
    textoGrandeElement.style.backgroundColor = corAleatoria;
  });

  // Adicione interatividade ao elemento com a classe .outro-texto
  var outroTextoElement = document.querySelector('.outro-texto');
  outroTextoElement.addEventListener('mouseover', function () {
    // Ao passar o mouse sobre outro-texto, aumente o tamanho da fonte
    outroTextoElement.style.fontSize = '50px';
  });
  outroTextoElement.addEventListener('mouseout', function () {
    // Quando o mouse sai, volte ao tamanho da fonte original
    outroTextoElement.style.fontSize = '40px';
  });