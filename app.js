function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum herói foi encontado</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  //Inicializa uma string vazia para armazenar os
  //resultados
  let resultados = "";
  let nome = "";
  let historia = "";

  // Itera sobre cada dado da lista de dados
  for (let heroi of herois) {
    nome = heroi.nome.toLowerCase()
    historia = heroi.historia.toLowerCase()
    // se títudo includes campoPesquisa

    if (
      nome.includes(campoPesquisa) ||
      historia.includes(campoPesquisa)
    ) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${heroi.nome}</a>
      </h2>
      <p class="descricao-meta">${heroi.historia}</p>
      <a href=${heroi.link} target="_blank">Mais informações sobre a heróina</a>
    </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nenhum herói foi encontrado</p>"

  }
  // Atribui os resultados gerados á seção HTML
  section.innerHTML = resultados;
}

//function exibirHeroi(heroi) {
// console.log("Nome:", heroi.nome);
//console.log("História:", heroi.historia);
//console.log("Habilidades:");
//for (const habilidade in heroi.habilidades) {
//console.log(`  ${habilidade}: ${heroi.habilidades[habilidade]}`);
//}
//console.log("Counters:", heroi.counters.join(", "));
//console.log("--------------------");
//}

// Exibindo as informações de todos os heróis
//herois.forEach(exibirHeroi);
