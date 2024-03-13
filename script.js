let panelsList = document.querySelectorAll(".panels__panel");

let imgRetrato = [
  "img/Genshim retrato.jpg",
  "img/Grand Chase retrato.png",
  "img/Honkai Impact retrato.jpg",
  "img/Elsword retrato.png",
  "img/Honkai Star Rail retrato.png",
];

function backgroundPanel() {
  for (let i = 0; i < panelsList.length; i++) {
    let panel = panelsList[i];
    let imgPanel = imgRetrato[i];

    panel.style.cssText =
      "background: #fff no-repeat center; background-size: cover;";
    panel.style.backgroundImage = `url("${imgPanel}")`;
  }
}

backgroundPanel();

function panelClick() {
  let painelAnterior = "";
  let contClick = 0;

  panelsList.forEach(function (painel) {
    painel.addEventListener("click", function (e) {
      let painelAtual = e.currentTarget;

      if (painelAtual !== painelAnterior) {
        if (painelAnterior === "") {
          painelAtual.style.flexGrow = "5";
          painelAtual.style.transition = "0.9s";
          mostrarParagrafos(painelAtual);

        } else {
          painelAtual.style.flexGrow = "5";
          painelAtual.style.transition = "0.9s";

          painelAnterior.style.flexGrow = "1";

          mostrarParagrafos(painelAtual);
          esconderParagrafos(painelAnterior);
        }

        contClick = 0;
      } 
      
      else if (painelAtual === painelAnterior) {
        painelAtual.style.flexGrow = "1";

        contClick += 1;


        if (contClick >= 1) {
          if (contClick % 2 === 0) {
            painelAtual.style.flexGrow = "5";
            painelAtual.style.transition = "0.9s";
            mostrarParagrafos(painelAtual);
          } 
          
          else {
            painelAtual.style.flexGrow = "1";
            painelAtual.style.transition = "0.9s";
            painelAtual.style.transitionDelay = "0.9s";
            esconderParagrafos(painelAtual);
          }
        }
      }

      painelAnterior = e.currentTarget;

    });
  });
}

panelClick();

function mostrarParagrafos(painel){
  painelAtualParagrafos = painel.querySelectorAll("p:nth-child(odd)");

  painelAtualParagrafos.forEach(function(p){
    p.style.display = "block";
  });

  painelAtualParagrafos[0].style.animation = "backInDown 1.2s";
  painelAtualParagrafos[1].style.animation = "backInUp 1.2s";
  
}

function esconderParagrafos(painel){
  let painelAnteriorParagrafos = painel.querySelectorAll("p:nth-child(odd)");

  painelAnteriorParagrafos.forEach(function(p){
    setTimeout(()=>{p.style.display = "none"}, 900);
  });

  painelAnteriorParagrafos[0].style.animation = "bounceOutUp 1s forwards";
  painelAnteriorParagrafos[1].style.animation = "bounceOutDown 1s forwards";

}