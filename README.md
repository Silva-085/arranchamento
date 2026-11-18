# 📋 Sistema de Arranchamento — 2º GAC

Sistema web desenvolvido para digitalizar e facilitar o gerenciamento de arranchamento de militares, substituindo processos manuais por uma aplicação com controle de acesso, gerenciamento de registros e geração de relatórios.

## 🌐 Aplicação

**[Acessar o Sistema](https://arranchamento-2gac.web.app/)**

## 🚀 Funcionalidades

- **Cadastro de militares:** registro de número, nome, bateria, dias da semana e refeições.
- **Controle de acesso:** diferentes níveis de permissão para Furriéis e Administrador.
- **Gestão por bateria:** gerenciamento dos registros de cada subunidade.
- **Gerenciamento de registros:** visualização e cancelamento de solicitações.
- **Relatórios automáticos:** contabilização de café da manhã, almoço e jantar.
- **Exportação em PDF:** geração de relatórios otimizados para impressão.

## 🔐 Níveis de acesso

O sistema possui diferentes perfis de utilização:

| Perfil | Permissão |
|---|---|
| Furriel BC | Gerenciamento da BC |
| Furriel 1ª BO | Gerenciamento da 1ª BO |
| Furriel 2ª BO | Gerenciamento da 2ª BO |
| Furriel 3ª BM | Gerenciamento da 3ª BM |
| Administrador | Gerenciamento geral do sistema |

*As credenciais de acesso não são disponibilizadas publicamente.*

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura da aplicação.
- **CSS3:** estilização e responsividade.
- **JavaScript (ES6+):** lógica e funcionalidades do sistema.
- **Firebase Firestore:** armazenamento e gerenciamento dos dados.
- **Firebase Hosting:** hospedagem e publicação da aplicação.

## 📂 Estrutura do projeto

```text
arranchamento/
├── index.html
├── login.html
├── visualizar.html
├── js/
├── css/
├── img/
├── screenshots/
└── README.md
```

## 🖥️ Demonstração do sistema

### 1. Tela inicial

Interface principal para cadastro de arranchamento.

![Tela inicial](arranchamento.img/telaInicial.png)

### 2. Acesso administrativo

Tela de autenticação para os perfis de gerenciamento.

![Acesso administrativo](arranchamento.img/acessoAdm.png)

### 3. Preenchimento de informações

Interface de preenchimento dos dados e seleção das refeições.

![Preenchimento](arranchamento.img/preenchendoInfo.jpeg)

### 4. Confirmação de cadastro

Demonstração do retorno de confirmação após o registro.

![Registro realizado](arranchamento.img/registrado.jpeg)

### 5. Painel de relatórios

Visualização dos quantitativos e registros de arranchamento.

![Painel de relatórios](arranchamento.img/RelatorioArranchamento.jpeg)

### 6. Relatório PDF

Exemplo do relatório gerado pelo sistema.

![Relatório PDF](arranchamento.img/pdfArranchados.png)

## 🎯 Objetivo do projeto

Aplicar conhecimentos de desenvolvimento de software na construção de uma solução funcional para organização e gerenciamento de informações, buscando digitalizar processos administrativos e facilitar o controle de arranchamento.

---

**Status:** Aplicação publicada e disponível para acesso.
