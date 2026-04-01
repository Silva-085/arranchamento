(function() {
    if (!sessionStorage.getItem("logado")) { window.location.href = "login.html"; }
})();

function renderizarTabela(siglaBateria) {
    const perfil = sessionStorage.getItem("perfil");
    const corpoTabela = document.getElementById("corpoTabela");
    const listaGeral = JSON.parse(localStorage.getItem("arranchamento_2gac")) || [];
    
    // Trava de segurança com alerta
    if (perfil !== "ADMIN" && siglaBateria !== perfil) {
        alert("ACESSO NEGADO: Você só pode gerenciar a bateria " + perfil);
        return; 
    }

    document.querySelectorAll('.btn-filter').forEach(btn => {
        const textoBtn = btn.innerText.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
        btn.classList.toggle('active', textoBtn === siglaBateria.toUpperCase());
        if (perfil !== "ADMIN" && textoBtn !== perfil.toUpperCase()) {
            btn.style.opacity = "0.4";
        }
    });

    let filtrados = listaGeral.filter(reg => reg.bateria === siglaBateria);
    if (perfil !== "ADMIN") {
        filtrados = filtrados.filter(reg => reg.status !== "cancelado");
    }

    corpoTabela.innerHTML = "";
    let cafe = 0, almoco = 0, janta = 0;

    filtrados.forEach(item => {
        const isCancelado = item.status === "cancelado";
        if (!isCancelado) {
            const refs = item.refeicoes.map(r => r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            if(refs.includes("cafe")) cafe++;
            if(refs.includes("almoco")) almoco++;
            if(refs.includes("janta")) janta++;
        }

        let tr = document.createElement("tr");
        if (isCancelado) { tr.style.color = "#888"; tr.style.backgroundColor = "#f9f9f9"; }

        let acao = isCancelado 
            ? `<span style="color:#e74c3c; font-size:11px; font-weight:bold;">⚠️ Cancelado</span>`
            : `<button onclick="excluirRegistro(${item.id})" style="color:red; background:none; border:none; cursor:pointer;">❌</button>`;

        tr.innerHTML = `
            <td>${item.numero}</td>
            <td style="${isCancelado ? 'text-decoration:line-through' : ''}">${item.nome}</td>
            <td>${item.dias.join(", ")}</td>
            <td>${item.refeicoes.join(", ")} ${acao}</td>
        `;
        corpoTabela.appendChild(tr);
    });

    document.getElementById("count-Café").innerText = cafe;
    document.getElementById("count-Almoço").innerText = almoco;
    document.getElementById("count-Janta").innerText = janta;
}

function gerarPDF() {
    const perfil = sessionStorage.getItem("perfil") || "Relatorio";
    const tituloOriginal = document.title;
    document.title = `Arranchamento_2GAC_${perfil}`;
    window.print();
    document.title = tituloOriginal;
}

function excluirRegistro(id) {
    if (confirm("Deseja cancelar este arranchamento?")) {
        let lista = JSON.parse(localStorage.getItem("arranchamento_2gac")) || [];
        lista = lista.map(reg => reg.id === id ? { ...reg, status: "cancelado" } : reg);
        localStorage.setItem("arranchamento_2gac", JSON.stringify(lista));
        const btnAtivo = document.querySelector('.btn-filter.active');
        renderizarTabela(btnAtivo ? btnAtivo.innerText.replace(/[^a-zA-Z0-9]/g, "") : perfil);
    }
}

function limparTudo() {
    if (confirm("ADMIN: Apagar permanentemente todos os registros?")) {
        localStorage.removeItem("arranchamento_2gac");
        location.reload();
    }
}

window.onload = () => {
    const perfil = sessionStorage.getItem("perfil");
    const btnLimpar = document.querySelector('.btn-limpar');
    if (btnLimpar) btnLimpar.style.display = (perfil === "ADMIN") ? "block" : "none";
    renderizarTabela(perfil === "ADMIN" ? 'BC' : perfil);
};