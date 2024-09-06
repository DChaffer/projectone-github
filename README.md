Documentação do Sistema - Project-On (MVP)

Visão Geral do Sistema

1.0. Nome do Projeto:
Project-On

1.1. Objetivo:
O sistema Project-On tem como objetivo otimizar o fluxo de projetos de uma empresa, reduzindo o tempo gasto com processos administrativos por meio do uso de IA. O sistema ajuda os usuários a descreverem suas necessidades e recomenda a metodologia de gestão de projetos mais adequada para cada situação, com base em insights gerados por inteligência artificial.

1.2. Módulos do Sistema:
Pesquisa: Aprender sobre Metodologias de Gestão de Projetos (MVP) 
Cadastro de Necessidades: Permite ao usuário registrar as demandas por tipo (TI, Infraestrutura, Inovação, Outros).
Relatórios: O usuário pode visualizar o status e o andamento dos projetos.
Notícias: Notícias relacionadas à tecnologia, inovação e informações internas.
Colaboração (Novas Ideias): Permite que os usuários enviem ideias e colaborem no desenvolvimento de novos projetos.
Gerenciamento de Projetos: Módulo que facilita a gestão de projetos, integrando as funcionalidades principais.

2. Funcionalidades

2.0. Pesquisa
Como MVP, foi criado uma página para que o usuário possa pesquisar sobre as metodologias de gestão de projetos mais utilizadas no mercado.

2.1. Cadastro de Necessidades
O usuário pode cadastrar uma nova necessidade, selecionando entre as opções de TI, Infraestrutura, Inovação ou Outros.
Ao selecionar uma categoria, uma caixa de texto será aberta para descrever a necessidade, similar a uma caixa de conversa de chat.
A caixa de texto deve permanecer acessível até que o usuário feche ou envie a mensagem.
Um bot alimentado por IA (ChatGPT) auxilia na formulação da descrição das necessidades do usuário.

2.2. Relatórios
Exibição visual do progresso dos projetos do usuário, incluindo etapas concluídas e pendentes.
Filtros por data, status e responsável.

2.3. Notícias
Integração com feeds de notícias de tecnologia e inovação.
Notícias internas relevantes à empresa são exibidas em um painel dedicado.

2.4. Colaboração (Novas Ideias)
Formulário para envio de novas ideias.
Função de votação ou curadoria para que os usuários possam sugerir melhorias nas ideias propostas.

2.5. Gerenciamento de Projetos
Dashboard que exibe uma visão geral dos projetos em andamento.
Recomendações de metodologias de gerenciamento de projetos baseadas na descrição e nos insights de IA.

3. Requisitos Técnicos

3.1. Front-End:
Linguagens: HTML, CSS, JavaScript.
Bibliotecas Utilizadas: Nenhuma (JavaScript puro).
Design: Interface simples e limpa, com cores predominantes em cinza, branco e preto.
Comportamento do Menu:
Menu lateral oculto por padrão, exibido ao passar o mouse ou ao clicar no ícone.
Submenus são exibidos quando o usuário seleciona uma opção principal, como Cadastro de Necessidades.

3.2. Back-End (Integração com IA):
API de Integração: OpenAI API (ChatGPT).
Função: Auxiliar os usuários a descreverem suas necessidades, sugerindo melhores práticas.
Estrutura de Requisição: Requisição à API usando JavaScript (fetch), conforme descrito no código.

4. Estrutura do Código

4.1. HTML
Contém a estrutura básica da interface, com campos de input para cadastro, exibição de relatórios, notícias, e outras funcionalidades do sistema.

4.2. CSS
Estiliza a interface para uma experiência limpa e funcional, com ênfase em usabilidade e uma paleta de cores neutra.

4.3. JavaScript
app.js: Controla o comportamento dinâmico da interface, incluindo a abertura e fechamento do menu, exibição de submenus, e integração com a API do ChatGPT para o bot de assistência.
dados.js: Contém os dados pré-definidos para as opções de cadastro de necessidade (TI, Infra, Inovação).

5. Estrutura de Diretórios
/Project-On
    ├── /css
    │   └── style.css         # Arquivo de estilos CSS
    ├── /js
    │   ├── app.js            # Arquivo JavaScript para funcionalidade do sistema
    │   └── dados.js          # Dados usados no sistema (como categorias de necessidades)
    ├── /lampada_01.png		    # Imagem usada no cabeçalho
    │      
    └── index.html            # Arquivo HTML principal


6. Roadmap Futuro
Implementação de IA mais robusta: No futuro, integrar uma IA que não apenas sugere descrições de necessidade, mas também sugere projetos inteiros baseados nas descrições passadas.
Suporte Multiplataforma: Tornar o sistema acessível também via aplicativo mobile.
Integração com outros sistemas internos da empresa: API de conexão com ERPs e ferramentas de gestão de projetos.
