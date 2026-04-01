document.getElementById("formRefeicao").addEventListener("submit", function(e) {
    e.preventDefault();

    const numero = document.getElementById("numero").value;
    const bateria = document.querySelector('input[name="bateria"]:checked').value;
    const diasSelecionados = Array.from(document.querySelectorAll('.grid-dias input:checked')).map(el => el.value);
    const refeicoesSelecionadas = Array.from(document.querySelectorAll('.grid-refeicoes input:checked')).map(el => el.value);

    let bancoDeDados = JSON.parse(localStorage.getItem("arranchamento_2gac")) || [];

    // LÓGICA DE VALIDAÇÃO (DIA + REFEIÇÃO)
    let jaPossuiAlguma = false;
    let detalheErro = "";

    // Percorre o que o militar está tentando marcar agora
    diasSelecionados.forEach(dia => {
        refeicoesSelecionadas.forEach(refeicao => {
            
            // Procura arranchamento duplicado
            const duplicado = bancoDeDados.find(reg => 
                reg.numero === numero && 
                reg.bateria === bateria && 
                reg.dias.includes(dia) && 
                reg.refeicoes.includes(refeicao)
            );

            if (duplicado) {
                jaPossuiAlguma = true;
                detalheErro = `O militar já está arranchado para: ${dia} (${refeicao})`;
            }
        });
    });

    if (jaPossuiAlguma) {
        alert(`Erro: ${detalheErro}. Verifique os dados ou procure o Furriel.`);
        return; // Bloqueia o registro
    }

  
    const novoRegistro = {
        nome: document.getElementById("nome").value.toUpperCase(),
        numero: numero,
        bateria: bateria,
        dias: diasSelecionados,
        refeicoes: refeicoesSelecionadas,
        id: Date.now()
    };

    bancoDeDados.push(novoRegistro);
    localStorage.setItem("arranchamento_2gac", JSON.stringify(bancoDeDados));

    alert("Arranchado com sucesso!");
    this.reset();
});