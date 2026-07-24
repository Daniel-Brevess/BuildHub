**Task 2**

# Fluxo de páginas e desenho inicial do dashboard

Este documento registra as decisões iniciais sobre páginas públicas, páginas privadas, navegação principal e estrutura visual do dashboard do BuildHub.

- Fluxo de páginas

- Dashboard

- Área privada

- MVP

## 1. Ideia geral do fluxo

O fluxo começa na landing page. A partir dela, o usuário pode conhecer o produto, acessar páginas institucionais, criar uma conta ou fazer login. Após o login, ele entra no dashboard, que será a tela central da experiência privada.

Fluxo principal

- Landing page

- Login

- Dashboard

- Perfil

- Editar perfil

Fluxo de descoberta

- Dashboard

- Pesquisa

- Vagas e projetos filtrados

## 2. Páginas públicas

### Landing page

Entrada principal do produto. Deve vender a proposta do BuildHub e conduzir para cadastro, login, sobre, assinaturas e políticas.

### Sobre nós

Explica a visão, o motivo da plataforma existir e o tipo de comunidade que o BuildHub quer criar.

### Assinaturas

Apresenta os modos de uso gratuito e pago, com foco em limites e benefícios claros.

### Login

Porta de entrada para a área privada. No MVP visual, leva ao dashboard estático.

### Cadastro

Página para criação de conta. A integração real fica para a fase de autenticação.

### Políticas de privacidade

Página institucional pendente. Deve existir antes do primeiro deploy público com cadastro real.

## 3. Páginas privadas

### Dashboard

Tela central da área logada. Exibe saudação, pesquisa, feed de vagas/projetos e atalhos laterais.

### Pesquisa

Página aberta a partir da busca do dashboard. Mostra resultados relacionados ao termo pesquisado.

### Perfil

Mostra dados públicos do usuário, skills, interesses e projetos associados.

### Editar perfil

Pode ser uma página dedicada ou um card/modal dentro do perfil. A decisão final fica para a fase de implementação de perfil real.

## 4. Estrutura do dashboard

### Sidebar esquerda

- Ícone de perfil.

- Ícone de conversas.

- Ícone de vagas aplicadas.

- Botões devem ser simples, claros e acessíveis.

### Sidebar direita

- Abre quando o usuário clica em conversas.

- Mostra lista resumida de conversas.

- Deve poder ser fechada sem recarregar a página.

### Área principal

- Mensagem no topo: "Olá, nome do user!".

- Barra de pesquisa em formato de cilindro.

- Feed infinito visual com cards retangulares.

- Cards representam vagas e projetos.

### Pesquisa

- O usuário digita no dashboard.

- Ao enviar, abre a página de pesquisa.

- A página deve refletir o termo pesquisado.

## 5. Decisões de design

- O dashboard deve seguir a identidade visual atual do BuildHub, com fundo verde escuro, contraste alto, cards claros e acentos em verde limão e rosa suave.

- A navegação privada começa simples: poucos ícones, sem excesso de menus, para manter foco no feed de oportunidades.

- O feed deve parecer vivo mesmo estático, usando variedade de cards, tags, status e tipos de oportunidade.

- A conversa lateral deve ser um painel contextual, não uma página separada neste primeiro desenho.

- A edição de perfil ainda pode ser decidida entre página dedicada ou card/modal, dependendo da complexidade do formulário real.

## 6. Rotas planejadas

### Públicas

- `/`

- `/about`

- `/assinaturas`

- `/login`

- `/cadastro`

- `/privacidade` futura

### Privadas

- `/app/dashboard`

- `/app/pesquisa`

- `/app/perfil`

- `/app/perfil/editar` futura

BuildHub - Fluxo de páginas e dashboard. Este documento deve evoluir conforme a área privada sair de protótipo estático para produto real.
