**Fase 1**

# Fundação técnica do BuildHub

Esta fase define a estrutura de páginas, arquitetura base, modelo inicial do banco, regras de desenvolvimento, estratégia de testes e preparação para CI/CD. O foco é criar uma base sólida antes de entrar em autenticação, JWT e CORS.

- Documentação viva

- Base técnica

- React + Spring Boot

- PostgreSQL

## 1. Objetivo da fase

A Fase 1 é a base técnica do BuildHub. Nesta etapa, o objetivo não é implementar cadastro, login, JWT, CORS ou fluxos completos de usuário. O foco é deixar o projeto preparado para crescer com clareza, consistência e segurança.

### Esta fase deve responder

- Quais páginas o produto precisa ter no MVP.

- Como o frontend será organizado.

- Como o backend será organizado.

- Quais entidades principais existirão no banco.

- Quais regras de desenvolvimento serão seguidas.

- Como testes e CI/CD serão introduzidos no projeto.

### Fora deste momento

Autenticação real, regras de permissão, chat funcional, publicação real de projetos, propostas e assinatura entram nas próximas fases.

## 2. O que entra na Fase 1

Task 1
Completa

### Regras de desenvolvimento

Criar uma base documentada para guiar implementação, revisão, testes, commits e deploys.

- Definir quando criar testes unitários.

- Definir quando criar testes de integração.

- Definir padrão de commits com Conventional Commits.

- Definir checklist antes de commit.

- Definir regras para banco de dados e dependências.

- Definir padrão para respostas de API e tratamento de erros.

Status: concluída em
docs/phase-1/development-rules.md.

Task 2
Completa

### Estrutura de páginas

Mapear páginas públicas e privadas do MVP, mesmo que algumas comecem como placeholders.

- Listar páginas públicas e privadas.

- Definir rotas principais.

- Separar páginas institucionais de páginas do produto.

- Definir layout base da área logada.

- Definir navegação principal da área privada.

Status: concluída em
docs/phase-1/page-flow-dashboard-design.md, com dashboard
estático criado em /app/dashboard.

Task 3
Completa

### Estrutura inicial do banco

Definir o modelo conceitual antes de criar entidades JPA e migrations.

- Definir entidades principais.

- Definir relacionamentos.

- Definir campos obrigatórios e opcionais.

- Definir enums, índices e campos de auditoria.

- Avaliar impacto de cada relacionamento.

Status: concluída em
docs/phase-1/database-model.md, com DER inicial, entidades,
relacionamentos, constraints e enums do MVP.

Task 4
Completa

### Arquitetura do backend

Organizar responsabilidades para evitar controllers com regra de negócio e entidades expostas diretamente na API.

- Revisar estrutura atual de pacotes.

- Definir padrão para controller, service e repository.

- Definir estratégia de DTOs, mappers e exceptions.

- Definir onde ficam validações e regras de negócio.

Status: concluída em
docs/phase-1/backend-architecture.md, com estrutura de
pacotes, fluxo de request, DTOs, mappers, exceptions,
validação, transações e checklist backend.

Task 5
Completa

### Arquitetura do frontend

Preparar o React para crescer com páginas, layouts, componentes, services e estados previsíveis.

- Revisar estrutura atual do frontend.

- Definir páginas públicas e privadas.

- Definir componentes compartilhados.

- Definir padrão para chamadas HTTP.

- Definir loading, error, empty e success states.

Status: concluída em
docs/phase-1/frontend-architecture.md, com estrutura de
pastas, rotas, layouts, componentes, services, estados de tela,
formulários, hooks e preparação para auth.

Task 6
Completa

### Preparação para testes

Definir como JUnit e testes de integração serão usados antes das funcionalidades críticas.

- Definir quando usar teste unitário.

- Definir quando usar teste de integração.

- Definir padrão de nomes dos testes.

- Definir estrutura de pastas de teste no backend.

- Definir primeiro teste simples de sanidade.

Status: concluída em
docs/phase-1/testing-strategy.md, com estratégia de JUnit,
testes unitários, testes de integração, H2, padrões de nomes e
checklist para novos testes.

Task 7
Completa

### Preparação para CI/CD

Definir a pipeline mínima que vai proteger o projeto antes do primeiro deploy real.

- Definir comandos de build do backend e frontend.

- Definir comando de lint do frontend.

- Definir variáveis de ambiente necessárias.

- Definir critério mínimo para deploy.

- Definir estratégia para deploy após cadastro e login.

Status: concluída em
docs/phase-1/cicd-strategy.md, com estratégia de CI/CD,
comandos de frontend/backend, GitHub Actions, secrets, critérios
de deploy e plano para deploy após auth.

## 3. Mapa inicial de páginas

### Páginas públicas

- Landing page.

- Sobre nós.

- Assinaturas.

- Cadastro.

- Login.

### Páginas privadas

- Feed de projetos.

- Detalhe do projeto.

- Criar e editar projeto.

- Criar e detalhar vaga.

- Propostas enviadas e recebidas.

- Mensagens.

- Perfil e configurações da conta.

## 4. Modelo conceitual do banco

### Entidades prováveis

- User.

- UserProfile.

- Project.

- ProjectRole ou ProjectPosition.

- Application.

- Conversation.

- Message.

- SubscriptionPlan.

### Relacionamentos prováveis

- Um usuário possui um perfil.

- Um usuário pode criar vários projetos.

- Um projeto possui várias vagas.

- Uma vaga recebe várias propostas.

- Uma conversa pode nascer a partir de uma proposta.

- Uma conversa possui várias mensagens.

## 5. Arquitetura esperada

### Backend

- `controller`: recebe requisições e retorna respostas.

- `service`: concentra casos de uso e regras.

- `repository`: isola persistência.

- `entity`: representa tabelas e relacionamentos.

- `dto` e `mapper`: protegem a API.

- `exception`, `config` e `security`: organizam aspectos técnicos.

### Frontend

- `pages/public`: páginas públicas.

- `pages/private`: páginas privadas.

- `components`: componentes reutilizáveis.

- `layouts`: estruturas de página.

- `services`: chamadas HTTP e integrações.

- `routes` e `utils`: rotas e helpers.

## 6. O que não entra na Fase 1

### Autenticação

- Cadastro funcional.

- Login funcional.

- JWT.

- Refresh token.

- Recuperação de senha.

### Produto

- Chat funcional.

- Publicação real de projetos.

- Envio real de propostas.

- Sistema de assinatura.

### Segurança aplicada

- CORS em ambiente real.

- Controle completo de permissões.

- Proteção final de rotas privadas.

## 7. Critérios de conclusão

- Regras de desenvolvimento documentadas.

- Mapa de páginas públicas e privadas definido.

- Estrutura de rotas planejada.

- Modelo conceitual do banco definido.

- Entidades principais mapeadas em nível documental.

- Arquitetura do backend definida.

- Arquitetura do frontend definida.

- Estratégia de testes documentada.

- Estratégia inicial de CI/CD documentada.

- Documentação técnica alinhada com a divisão de fases.

Nota estratégica: esta fase parece menos empolgante
que implementar telas e login, mas reduz muito retrabalho depois. Ela
cria o trilho para que a Fase 2, autenticação e usuários, seja feita
com mais segurança e aprendizado real sobre JUnit, JWT, CORS e CI/CD.

BuildHub - Fase 1: fundação técnica. Este arquivo deve ser mantido em Markdown.
