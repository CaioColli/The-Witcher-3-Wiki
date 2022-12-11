
// Menu Lateral Mobile

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Menu Lateral Mobile

// Mostrar mais

function leiaMais() {
  var pontos=document.getElementById("pontos");
  var maisTexto=document.getElementById("mais");
  var lerMais=document.getElementById("lerMais");

  if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maisTexto.style.display="none";
    lerMais.innerHTML="Ler Mais";
  }else{
    pontos.style.display="none";
    maisTexto.style.display="inline";
    lerMais.innerHTML="Ler Menos";
  }
}

function MaisEnredo() {
  var varPontos=document.getElementById("pontosEnredo");
  var varMaisEnredo=document.getElementById("maisEnredo");
  var btnEnredo=document.getElementById("btnEnredo");

  if(varPontos.style.display === "none"){
    varPontos.style.display="inline";
    varMaisEnredo.style.display="none";
    btnEnredo.innerHTML="Ler Mais";
  }else{
    varPontos.style.display="none";
    varMaisEnredo.style.display="inline";
    btnEnredo.innerHTML="Ler Menos";
  }
}



// Mostrar mais