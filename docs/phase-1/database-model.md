**Task 3**

# Modelagem inicial do banco do BuildHub

Este documento registra a base conceitual do DER do MVP, incluindo entidades, relacionamentos, constraints e enums sugeridos para as primeiras implementações.

- PostgreSQL

- Spring Data JPA

- MVP

- DER conceitual

## 1. Diagrama de referência

A imagem abaixo é a versão atual do DER usado como base para a modelagem inicial. Ela ainda pode evoluir durante a implementação, mas já está madura o suficiente para orientar as entidades do MVP.

## 2. Visão geral

### Núcleo do produto

- Usuários criam projetos.

- Projetos possuem vagas específicas.

- Usuários enviam propostas para projetos ou vagas.

- Propostas geram conversas.

- Conversas possuem mensagens.

### Stacks

- Stacks ficam em um catálogo central.

- Usuários podem ter várias stacks.

- Projetos podem usar várias stacks.

- Vagas podem exigir várias stacks.

- Relacionamentos N:N usam tabelas intermediárias.

## 3. Entidades principais

| Entidade | Responsabilidade | Campos principais |
| --- | --- | --- |
| `User` | Representa a conta do usuário. | `id`, `username`, `email`, `password_hash`, `created_at`, `updated_at` |
| `Project` | Representa um projeto publicado por um usuário. | `id`, `user_id`, `name`, `description`, `type`, `status`, `created_at`, `updated_at` |
| `Position` | Representa uma vaga dentro de um projeto. | `id`, `project_id`, `name`, `description`, `status`, `created_at`, `updated_at` |
| `Application` | Representa uma proposta para participar de um projeto ou vaga. | `id`, `applicant_id`, `project_id`, `position_id`, `initial_message`, `type`, `status`, `created_at`, `updated_at` |
| `Conversation` | Representa a conversa criada a partir de uma proposta. | `id`, `application_id`, `created_at`, `updated_at` |
| `Message` | Representa uma mensagem dentro de uma conversa. | `id`, `sender_id`, `conversation_id`, `content`, `created_at` |
| `Stack` | Catálogo central de tecnologias, ferramentas e skills. | `id`, `name`, `slug`, `created_at` |

## 4. Tabelas de relacionamento com Stack

### UserStack

- `id`

- `user_id`

- `stack_id`

- `created_at`

### ProjectStack

- `id`

- `project_id`

- `stack_id`

- `created_at`

### PositionStack

- `id`

- `position_id`

- `stack_id`

- `created_at`

Decisão: as tabelas de junção usam id
próprio para simplificar a implementação com JPA. A prevenção de
duplicidade deve ser feita com constraints únicas.

## 5. Relacionamentos

| Origem | Destino | Cardinalidade | Observação |
| --- | --- | --- | --- |
| `User` | `Project` | 1:N | Um usuário pode criar vários projetos. |
| `Project` | `Position` | 1:N | Um projeto pode ter várias vagas. |
| `Project` | `Application` | 1:N | Um projeto pode receber várias propostas. |
| `Position` | `Application` | 1:N | Uma vaga pode receber várias propostas. Em propostas gerais, `position_id` é nulo. |
| `Application` | `Conversation` | 1:1 | Cada proposta cria uma conversa vinculada ao mesmo contexto. |
| `Conversation` | `Message` | 1:N | Uma conversa possui várias mensagens. |
| `User` | `Message` | 1:N | Um usuário pode enviar várias mensagens. |
| `Stack` | `UserStack`, `ProjectStack`, `PositionStack` | 1:N | Uma stack pode aparecer em vários usuários, projetos e vagas. |

## 6. Enums sugeridos

### ProjectType

- `CASUAL`: projeto casual, estudo, portfólio ou colaboração leve.

- `SAAS`: produto digital com modelo SaaS.

- `STARTUP`: iniciativa com intenção de virar startup.

- `OPEN_SOURCE`: projeto aberto para contribuição pública.

- `COMMUNITY`: projeto voltado para comunidade.

### ProjectStatus

- `IDEA`: ideia em estruturação.

- `VALIDATING`: validando problema, público ou solução.

- `BUILDING`: em construção ativa.

- `PAUSED`: temporariamente pausado.

- `LAUNCHED`: lançado ou disponível para uso.

### PositionStatus

- `OPEN`: vaga aberta para propostas.

- `PAUSED`: vaga pausada temporariamente.

- `CLOSED`: vaga encerrada.

### ApplicationType

- `PROJECT_JOIN_REQUEST`: pedido geral para participar do projeto.

- `POSITION_APPLICATION`: proposta enviada para uma vaga específica.

### ApplicationStatus

- `PENDING`: enviada e aguardando análise.

- `ACCEPTED`: aceita pelo dono do projeto.

- `REJECTED`: recusada pelo dono do projeto.

- `CANCELLED`: cancelada pelo candidato.

## 7. Constraints e índices

### Unique constraints

- `user.email`

- `user.username`

- `stack.slug`

- `user_stack(user_id, stack_id)`

- `project_stack(project_id, stack_id)`

- `position_stack(position_id, stack_id)`

- `conversation.application_id`

### Índices recomendados

- `project.user_id`

- `project.status`

- `project.type`

- `position.project_id`

- `position.status`

- `application.applicant_id`

- `application.project_id`

- `application.position_id`

- `message.conversation_id`

## 8. Regras importantes

- `Application.position_id` deve ser opcional para permitir proposta geral para projeto.

- Se `Application.type` for `POSITION_APPLICATION`, `position_id` deve ser obrigatório.

- Se `Application.type` for `PROJECT_JOIN_REQUEST`, `position_id` deve ser nulo.

- `Conversation` deve nascer vinculada a uma `Application`.

- `Message.sender_id` deve apontar para o usuário que enviou a mensagem.

- `Project` não deve guardar stack diretamente; deve usar `ProjectStack`.

- `Position` não deve guardar stack diretamente; deve usar `PositionStack`.

- Senha nunca deve ser armazenada como texto puro; usar apenas `password_hash`.

## 9. Pseudomodelo SQL

```text
users
- id
- username unique
- email unique
- password_hash
- created_at
- updated_at

projects
- id
- user_id
- name
- description
- type
- status
- created_at
- updated_at

positions
- id
- project_id
- name
- description
- status
- created_at
- updated_at

applications
- id
- applicant_id
- project_id
- position_id nullable
- initial_message
- type
- status
- created_at
- updated_at

conversations
- id
- application_id unique
- created_at
- updated_at

messages
- id
- sender_id
- conversation_id
- content
- created_at

stacks
- id
- name
- slug unique
- created_at
```
BuildHub - Modelagem inicial do banco. Este documento deve ser revisado antes da implementação das entidades JPA e das migrations.
