**Documentação Técnica**

# BuildHub: plataforma para formar equipes em projetos reais

Este documento define a visão técnica e estratégica inicial do BuildHub, incluindo objetivo, público, problema, stack, escopo do MVP, módulos do produto, arquitetura proposta e planejamento de desenvolvimento.

- Versão 1.0

- MVP

- React + Spring Boot

- PostgreSQL

## 1. Objetivo do projeto

O BuildHub tem como objetivo conectar pessoas que querem construir projetos reais em equipe. A plataforma permite que usuários publiquem projetos, criem vagas associadas, recebam propostas de participação e conversem com interessados para formar times.

O produto deve reduzir a distância entre **ideia**, **pessoas certas** e **execução**. Em vez de depender de networking aleatório, comunidades dispersas ou mensagens soltas, o BuildHub organiza a colaboração em torno de contexto claro.

## 2. Para quem é

### Founders e makers

Pessoas com ideias ou projetos em fase inicial que precisam de designers, developers, creators ou outros builders para avançar.

### Developers

Profissionais e estudantes que querem participar de projetos reais, construir portfólio e ganhar experiência prática em produto.

### Designers

Pessoas que querem entrar cedo em projetos, modelar experiência, validar problemas e colaborar com times técnicos.

### Creators e comunidades

Criadores, comunidades, bootcamps e grupos que querem transformar ideias, desafios ou iniciativas em times de construção.

## 3. Problema que resolve

Muitas ideias não morrem por falta de vontade. Elas morrem porque a pessoa não encontra o time certo, não sabe onde publicar a oportunidade ou não consegue explicar claramente quem precisa para avançar.

### Networking disperso

Redes sociais e grupos geram conversas, mas nem sempre geram colaboração prática.

### Falta de contexto

Oportunidades aparecem sem fase, objetivo, skills, formato de colaboração ou expectativas claras.

### Baixa conversão em time

Pessoas interessadas não sabem como aplicar, e donos de projetos não têm um fluxo simples para avaliar candidatos.

## 4. Stack tecnológica

| Camada | Tecnologias | Responsabilidade |
| --- | --- | --- |
| Frontend | React, Vite, Tailwind CSS, Axios, React Router DOM | Interface web, rotas públicas/privadas, consumo da API e experiência do usuário. |
| Backend | Java 21, Spring Boot, Spring Security, Spring Data JPA | API REST, regras de negócio, autenticação, autorização e persistência. |
| Banco de dados | PostgreSQL | Armazenamento de usuários, perfis, projetos, vagas, propostas e mensagens. |
| Autenticação | Spring Security, JWT ou sessão stateless | Controle de acesso, identidade do usuário e proteção de rotas privadas. |
| Deploy futuro | Render, Railway, Fly.io, Vercel ou similar | Publicação da aplicação web, API e banco gerenciado em ambiente de produção. |

## 5. Escopo do MVP

O MVP deve provar se usuários conseguem publicar projetos, abrir vagas, receber propostas e iniciar conversas que possam formar times reais.

### Funcionalidades incluídas

### Autenticação e perfil

- Cadastro e login.

- Perfil com nome, username, bio, skills e links.

- Indicação de disponibilidade para colaborar.

### Projetos

- Criar, editar, listar e visualizar projetos.

- Descrição, objetivo, fase, stack, links e dono.

- Projeto público para descoberta.

### Vagas de projeto

- Vagas sempre associadas a um projeto.

- Skills, perfil esperado, disponibilidade e formato.

- Formatos: voluntário, pago, equity, freela, open source etc.

### Propostas e mensagens

- Usuário envia proposta para participar de uma vaga.

- Dono do projeto avalia, aceita ou recusa.

- Thread simples de mensagens ligada à proposta.

### Fora do MVP

- Workspace completo de time.

- Pagamentos internos ou split financeiro.

- Reputação avançada, ranking ou gamificação.

- Matching automático com IA.

- Chat em tempo real sofisticado, chamadas ou upload de arquivos.

- Aplicativo mobile nativo.

## 6. Modelo de dados inicial

O modelo abaixo representa o núcleo mínimo para o MVP. Ele pode evoluir conforme o comportamento real dos usuários for validado.

```text
User
- id
- name
- username
- email
- password_hash
- created_at

Profile
- id
- user_id
- bio
- location
- availability
- links

Project
- id
- owner_id
- title
- description
- goal
- phase
- stack
- status
- created_at

ProjectRole
- id
- project_id
- title
- expected_profile
- skills
- collaboration_type
- availability
- status

Application
- id
- role_id
- applicant_id
- message
- links
- availability
- status
- created_at

Conversation
- id
- application_id
- created_at

Message
- id
- conversation_id
- sender_id
- content
- created_at
```
## 7. Arquitetura proposta

A arquitetura deve manter responsabilidades separadas e seguir os padrões atuais do projeto.

### Backend

- Controllers recebem requisições e retornam DTOs.

- Services concentram regras de negócio.

- Repositories isolam acesso ao banco.

- DTOs e mappers evitam expor entidades diretamente.

- SecurityConfig controla autenticação e autorização.

### Frontend

- Páginas públicas para landing, sobre, login e cadastro.

- Páginas privadas para perfil, projetos, vagas e mensagens.

- Componentes reutilizáveis para cards, forms e navegação.

- Services com Axios para comunicação com a API.

- Rotas privadas protegidas após autenticação.

## 8. Planejamento de desenvolvimento

Fase 1

### Fundação técnica

Definir a estrutura base de páginas, organização de módulos, modelo inicial do banco, padrões de pastas, convenções de código, contratos preliminares de API e estratégia de documentação. Autenticação, JWT e CORS entram na fase seguinte.

Fase 2

### Autenticação, usuários e perfis

Implementar cadastro, login, JWT, configuração de CORS, rotas públicas/privadas, perfil do usuário, edição de dados, skills, links e disponibilidade para colaboração.

Fase 3

### Projetos

Criar CRUD de projetos, listagem pública/privada, página de detalhes e regras de permissão para dono do projeto.

Fase 4

### Vagas e descoberta

Implementar vagas vinculadas a projetos, filtros básicos, formatos de colaboração e feed inicial de oportunidades.

Fase 5

### Propostas

Permitir envio de propostas, histórico do usuário, painel do dono do projeto e status de análise, aceitação ou recusa.

Fase 6

### Mensagens

Criar thread simples vinculada à proposta, permitindo conversa entre candidato e dono do projeto sem implementar chat complexo.

Fase 7

### Assinatura e limites

Aplicar limites no plano gratuito, liberar ações ilimitadas no plano pago e preparar a base para integração de pagamento.

Fase 8

### Polimento e lançamento

Melhorar UX, responsividade, mensagens vazias, validações, métricas básicas e preparar campanha inicial com criadores de conteúdo do nicho.

## 9. Critérios de sucesso do MVP

- Usuários conseguem criar perfil sem fricção.

- Usuários conseguem publicar projetos com vagas claras.

- Outros usuários conseguem descobrir vagas e enviar propostas.

- Donos de projetos conseguem responder e conversar com candidatos.

- O fluxo gera sinais reais de formação de times.

- Usuários ativos entendem valor suficiente para considerar pagar R$10/mês.

## 10. Estratégia de documentação durante o desenvolvimento

A documentação não deve tentar registrar cada microdetalhe do código. Isso tende a ficar desatualizado rápido. O ideal é documentar decisões, contratos e fluxos que afetam manutenção e evolução do produto.

### Documentar sempre

- Objetivo de cada módulo.

- Regras de negócio importantes.

- Contratos de API.

- Modelo de dados.

- Fluxos críticos do usuário.

- Decisões arquiteturais e trade-offs.

### Evitar documentar demais

- Implementações óbvias.

- Detalhes que mudam a cada refactor.

- Comentários que repetem o nome da função.

- Documentação sem dono ou sem atualização.

Recomendação: manter tópicos predefinidos e atualizar
conforme o desenvolvimento avança. Para decisões importantes, criar um
registro curto de decisão com contexto, opção escolhida e motivo.

BuildHub - Documentação técnica inicial. Este arquivo deve ser mantido em Markdown.
