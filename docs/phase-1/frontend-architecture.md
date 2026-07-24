**Task 5**

# Arquitetura do frontend do BuildHub

Este documento define a organização oficial do frontend React, incluindo estrutura de pastas, rotas, layouts, componentes compartilhados, services, estados de tela, formulários e preparação para autenticação.

- React

- Vite

- Tailwind CSS

- React Router

## 1. Estado atual

O frontend já possui páginas públicas, páginas privadas estáticas, assets e rotas principais. A Task 5 formaliza como essa base deve crescer quando o MVP deixar de ser apenas visual.

### Estrutura existente

- `src/pages/public`

- `src/pages/private`

- `src/assets`

- `src/routes.jsx`

- `src/index.css`

- `src/App.jsx`

### Estrutura a criar conforme necessidade

- `src/components`

- `src/layouts`

- `src/services`

- `src/utils`

- `src/hooks`

- `src/constants`

Decisão: não criar pastas vazias ou abstrações sem uso.
A estrutura deve ser criada quando o primeiro componente, layout,
service, hook ou helper real aparecer.

## 2. Estrutura oficial de pastas

| Pasta/arquivo | Responsabilidade | Exemplos |
| --- | --- | --- |
| `pages/public` | Páginas acessíveis sem login. | `LandingPage`, `AboutPage`, `LoginPage` |
| `pages/private` | Páginas da área logada. | `DashboardPage`, `ProfilePage`, `SearchPage` |
| `components` | Componentes reutilizáveis e independentes de rota. | `Button`, `Input`, `ProjectCard` |
| `layouts` | Estruturas de página compartilhadas. | `PublicLayout`, `PrivateLayout`, `AuthLayout` |
| `services` | Chamadas HTTP e integração com a API. | `apiClient`, `projectService` |
| `utils` | Funções puras e pequenas. | `formatDate`, `buildQueryString` |
| `hooks` | Hooks reutilizáveis com estado ou efeitos. | `useAuth`, `useDebouncedValue` |
| `constants` | Constantes compartilhadas pelo frontend. | `routes`, `projectTypes`, `applicationStatus` |

## 3. Rotas

As rotas devem continuar centralizadas em `src/routes.jsx` enquanto o projeto estiver simples. Quando auth real entrar, as rotas privadas devem ser protegidas por um wrapper ou loader equivalente.

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

- `/app/conversas` futura, se o painel virar página

Fase 2: criar proteção para rotas privadas, redirecionar
usuários não autenticados para /login e evitar acesso à
área privada sem sessão válida.

## 4. Layouts

Layouts devem evitar duplicação de estrutura entre páginas. Eles devem cuidar da moldura da página, não da regra de negócio.

### PublicLayout

- Header público.

- Links institucionais.

- Toggle de tema quando aplicável.

- Footer futuro.

### AuthLayout

- Usado por login e cadastro.

- Logo e botão de voltar.

- Área visual lateral ou hero simples.

- Formulário centralizado.

### PrivateLayout

- Sidebar privada.

- Área principal.

- Header privado ou saudação.

- Painéis contextuais, como conversas.

## 5. Componentes compartilhados

Componentes devem ser extraídos quando houver repetição real, quando a página ficar difícil de ler ou quando um padrão visual precisar ser consistente.

### Componentes base

- `Button`

- `IconButton`

- `Input`

- `Textarea`

- `Select`

- `Badge`

- `Modal`

### Componentes de produto

- `ProjectCard`

- `PositionCard`

- `ApplicationCard`

- `ConversationPanel`

- `PrivateSidebar`

- `ProfileSummary`

- `StackBadgeList`

Regra: não criar biblioteca de componentes grande cedo
demais. Primeiro repetir uma ou duas vezes, depois extrair com base em
necessidade real.

## 6. Services e API

Chamadas HTTP devem ficar fora de componentes grandes. Componentes chamam services ou hooks, e services lidam com endpoints.

### Services planejados

- `apiClient`

- `authService`

- `projectService`

- `positionService`

- `applicationService`

- `conversationService`

- `stackService`

### Responsabilidades

- Montar URLs e query params.

- Enviar headers necessários.

- Interpretar resposta da API.

- Propagar erro padronizado para a UI.

- Evitar duplicação de chamadas HTTP.

```text
services/
- apiClient.js
- authService.js
- projectService.js
- positionService.js
- applicationService.js
- conversationService.js
- stackService.js
```
## 7. Estados de tela

Toda tela que consome API deve considerar estados explícitos para que a experiência não quebre quando a rede, os dados ou permissões mudarem.

### Estados obrigatórios

- `loading`: carregando dados ou enviando ação.

- `error`: falha na requisição ou regra de negócio.

- `empty`: resposta válida sem dados.

- `success`: ação concluída.

- `unauthorized`: usuário sem sessão ou permissão.

### Componentes sugeridos

- `LoadingState`

- `ErrorState`

- `EmptyState`

- `SuccessMessage`

- `InlineFieldError`

## 8. Formulários

Formulários devem ser previsíveis, acessíveis e preparados para validações do backend. No MVP, não é necessário adicionar biblioteca de formulário antes de sentir dor real.

- Todo input deve ter label acessível, visível ou `sr-only`.

- Erros de campo devem aparecer próximos ao campo.

- Botão de submit deve indicar carregamento quando houver API.

- Dados enviados devem seguir os DTOs do backend.

- Validação visual no frontend não substitui validação no backend.

```text
Formulários previstos:
- Login
- Cadastro
- Criar projeto
- Editar projeto
- Criar vaga
- Enviar proposta
- Editar perfil
```
## 9. Hooks

Hooks devem ser usados para reaproveitar comportamento, não apenas para mover código de lugar. Eles são úteis quando uma regra de interface se repete em mais de uma tela.

### Hooks futuros

- `useAuth`

- `useCurrentUser`

- `useDebouncedValue`

- `useOutsideClick`

- `useColorMode`

### Critério de criação

- Criar quando houver repetição real.

- Manter API pequena.

- Evitar hook genérico demais.

- Testar quando houver regra relevante.

## 10. Tema e design system

O BuildHub já tem uma identidade visual mais expressiva, com verde escuro, cards claros, acentos em verde limão e rosa suave. O frontend deve preservar essa direção enquanto mantém consistência, contraste e legibilidade.

- Usar componentes consistentes para botões, inputs e cards.

- Evitar estilos únicos criados apenas para uma tela sem necessidade.

- Preservar responsividade mobile e desktop.

- Garantir que texto não estoure containers.

- Manter foco visível em elementos interativos.

- Usar ícones de `lucide-react` quando fizer sentido.

## 11. Autenticação futura

JWT, login real, logout e proteção de rotas entram na Fase 2. A arquitetura frontend deve apenas reservar o caminho para isso.

### Peças futuras

- `authService`

- `useAuth`

- `PrivateRoute` ou equivalente.

- Armazenamento seguro do token conforme decisão da Fase 2.

- Interceptador para incluir token nas requests.

### Comportamentos

- Redirecionar sem sessão para `/login`.

- Impedir acesso privado sem autenticação.

- Limpar sessão no logout.

- Tratar 401 e 403 de forma padronizada.

## 12. Padrão por página

Páginas devem coordenar dados, layout e componentes. Quando uma página crescer demais, partes reutilizáveis devem ser extraídas para componentes.

```text
ProjectDetailsPage
- Carrega projeto
- Renderiza LoadingState, ErrorState ou EmptyState
- Usa ProjectHeader
- Usa PositionCard
- Usa ApplicationForm
- Chama projectService e applicationService
```
## 13. Checklist para novas telas

- A rota está definida em `routes.jsx`?

- A tela pertence a `pages/public` ou `pages/private`?

- Existe layout adequado?

- Componentes repetidos foram extraídos quando necessário?

- Chamadas HTTP estão em service/hook, não espalhadas na tela?

- Estados de loading, error, empty e success foram considerados?

- Inputs têm labels e mensagens de erro?

- A tela funciona em mobile e desktop?

- O design segue a identidade atual do BuildHub?

- Não há dados sensíveis expostos no frontend?

## 14. Critério de conclusão da Task 5

A Task 5 é considerada concluída quando esta documentação estiver criada e alinhada com a estrutura atual do frontend. A criação física de `components`, `layouts`, `services` e `hooks` deve acontecer aos poucos, conforme os módulos reais forem implementados.

BuildHub - Arquitetura do frontend. Este documento deve ser revisado antes da integração real com API e autenticação.
