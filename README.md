# arranchamento

📋 Sistema de Arranchamento - 2º GAC 
Sistema digital desenvolvido para a gestão de arranchamento de militares, substituindo formulários físicos por uma interface ágil, segura e com geração de relatórios automáticos para o rancho.

🚀 Funcionalidades
Interface de Cadastro: Formulário intuitivo para militares informarem Número, Nome, Bateria, Dias da semana e Refeições.

Controle de Acesso: Níveis de permissão distintos para Furriéis e Administrador (Rancho).

Gestão por Bateria: Furriéis visualizam e gerenciam apenas os dados da sua própria Subunidade.

Segurança de Dados: Bloqueio de acesso entre baterias e sistema de cancelamento de registros.

Relatórios Automáticos: Contagem em tempo real de Café, Almoço e Janta.

Exportação: Geração de relatórios em PDF otimizados para impressão.

Perfil,Senha,Permissão
Furriel BC,bc123,Gerenciar apenas BC
Furriel 1ª BO,bo1123,Gerenciar apenas 1ª BO
Furriel 2ª BO,bo2123,Gerenciar apenas 2ª BO
Furriel 3ª BM,bm3123,Gerenciar apenas 3ª BM
ADMIN (Rancho),admin77,"Visão total, exclusão global e relatórios de todas as baterias"

🛠️ Tecnologias Utilizadas
HTML5 & CSS3: Estrutura e estilização moderna com foco em usabilidade.

JavaScript (ES6+): Lógica do sistema, filtros de segurança e manipulação de dados.

LocalStorage: Banco de dados local persistente no navegador (dispensa servidor externo).

Impressão Nativa: Otimização via CSS @media print para geração de documentos PDF sem cortes.

📂 Estrutura do Projeto
index.html: Portal de cadastro para o efetivo.

login.html: Tela de autenticação.

visualizar.html: Painel de controle e relatórios.

js/: Scripts de lógica e segurança.

css/: Estilização e responsividade.

img/: Identidade visual (Brasão da Unidade).

O Gemini disse
Para fechar o projeto com chave de ouro e entregar algo realmente profissional para o seu chefe, um README bem estruturado é essencial. Ele serve como o "manual de instrução" e documentação técnica do sistema.

Crie um arquivo chamado README.md na pasta raiz do seu projeto e cole o conteúdo abaixo:

📋 Sistema de Arranchamento - 2º GAC L
Sistema digital desenvolvido para a gestão de arranchamento de militares, substituindo formulários físicos por uma interface ágil, segura e com geração de relatórios automáticos para o rancho.

🚀 Funcionalidades
Interface de Cadastro: Formulário intuitivo para militares informarem Número, Nome, Bateria, Dias da semana e Refeições.

Controle de Acesso: Níveis de permissão distintos para Furriéis e Administrador (Rancho).

Gestão por Bateria: Furriéis visualizam e gerenciam apenas os dados da sua própria Subunidade.

Segurança de Dados: Bloqueio de acesso entre baterias e sistema de cancelamento de registros.

Relatórios Automáticos: Contagem em tempo real de Café, Almoço e Janta.

Exportação: Geração de relatórios em PDF otimizados para impressão.

🔐 Níveis de Acesso
O sistema utiliza senhas específicas para identificar a função do usuário:

Perfil	Senha	Permissão
Furriel BC	bc123	Gerenciar apenas BC
Furriel 1ª BO	bo1123	Gerenciar apenas 1ª BO
Furriel 2ª BO	bo2123	Gerenciar apenas 2ª BO
Furriel 3ª BM	bm3123	Gerenciar apenas 3ª BM
ADMIN (Rancho)	admin77	Visão total, exclusão global e relatórios de todas as baterias
🛠️ Tecnologias Utilizadas
HTML5 & CSS3: Estrutura e estilização moderna com foco em usabilidade.

JavaScript (ES6+): Lógica do sistema, filtros de segurança e manipulação de dados.

LocalStorage: Banco de dados local persistente no navegador (dispensa servidor externo).

Impressão Nativa: Otimização via CSS @media print para geração de documentos PDF sem cortes.

📂 Estrutura do Projeto
index.html: Portal de cadastro para o efetivo.

login.html: Tela de autenticação.

visualizar.html: Painel de controle e relatórios.

js/: Scripts de lógica e segurança.

css/: Estilização e responsividade.

img/: Identidade visual (Brasão da Unidade).

📖 Instruções para Apresentação/Uso
Abra o arquivo index.html em qualquer navegador moderno.

Para testar o acesso de gestão, clique em Acesso Furriel / ADMIN.

Utilize as senhas de perfil para demonstrar as travas de segurança.

No painel de visualização, utilize o botão Salvar PDF para gerar o documento oficial para o Rancho.

