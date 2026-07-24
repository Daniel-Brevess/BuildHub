**Task 7**

# Estratégia de CI/CD do BuildHub

Este documento define como o BuildHub deve validar automaticamente o frontend e o backend, preparar o projeto para deploy real e evoluir de CI para CD com segurança.

- GitHub Actions

- CI primeiro

- Deploy controlado

- Secrets

## 1. Objetivo

A estratégia inicial é criar uma esteira que responda, a cada push ou pull request, se o projeto continua saudável. O deploy automatizado só deve entrar depois que cadastro e login reais estiverem funcionando.

Decisão principal: implementar CI antes de CD. Primeiro
automatizar validação; depois automatizar deploy com controle.

## 2. Conceitos

### CI

Continuous Integration é a validação automática do código. Ela verifica build, lint e testes sempre que o código muda.

### CD

Continuous Delivery ou Deployment é a preparação ou publicação automática da aplicação. No BuildHub, começa como delivery controlado.

### Pipeline

Sequência de passos executados pela ferramenta de CI/CD, como instalar dependências, rodar testes e gerar builds.

### Secrets

Variáveis sensíveis guardadas fora do código, como URL do banco, JWT secret e credenciais de deploy.

## 3. Ferramenta escolhida

A ferramenta recomendada é **GitHub Actions**, porque o projeto já está no GitHub, não exige serviço externo para começar e é suficiente para validar frontend, backend e deploy futuro.

```text
.github/workflows/ci.yml
```
Nesta fase, o documento define a estratégia. O arquivo de workflow deve
ser criado quando a implementação da pipeline começar.

## 4. Pipeline mínima

A pipeline mínima deve validar frontend e backend em jobs separados. Isso facilita descobrir onde houve falha.

### Frontend

- Preparar Node.

- Instalar dependências com `npm ci`.

- Rodar `npm run lint`.

- Rodar `npm run build`.

### Backend

- Preparar Java 21.

- Usar Maven Wrapper.

- Rodar `./mvnw test`.

- Rodar `./mvnw package`.

## 5. Comandos locais equivalentes

O desenvolvedor deve conseguir reproduzir localmente o que a pipeline executa no GitHub Actions.

### Frontend

```text
cd front-end
npm ci
npm run lint
npm run build
```
### Backend no Windows

```text
cd back-end
.\mvnw.cmd test
.\mvnw.cmd package
```
### Backend no Linux/GitHub Actions

```text
cd back-end
./mvnw test
./mvnw package
```
## 6. Quando a pipeline deve rodar

| Evento | Rodar CI? | Motivo |
| --- | --- | --- |
| Push em `main` | Sim | Garantir que a branch principal continua saudável. |
| Pull request para `main` | Sim | Validar alterações antes de entrar na branch principal. |
| Commit local | Não automaticamente | O desenvolvedor deve rodar comandos relevantes localmente. |
| Tag/release | Futuro | Pode ser usado para deploy versionado no futuro. |

## 7. Estratégia de deploy

O primeiro deploy real deve acontecer quando cadastro e login estiverem funcionando. Até lá, a prioridade é CI, documentação e validação de build.

### Agora

- Documentar estratégia de CI/CD.

- Validar frontend e backend automaticamente.

- Não fazer deploy automático.

- Preparar mentalidade de pipeline.

### Depois de auth

- Escolher plataforma de deploy.

- Configurar variáveis de ambiente.

- Criar deploy controlado.

- Adicionar smoke test.

Decisão: usar Continuous Delivery primeiro. O código
fica pronto para deploy, mas a publicação em produção deve ser
controlada até o projeto amadurecer.

## 8. Variáveis de ambiente e secrets

Nenhum segredo deve ficar no repositório. Em CI/CD, segredos devem ficar em GitHub Secrets ou no painel da plataforma de deploy.

### Secrets futuros

- `DATABASE_URL`

- `DATABASE_USERNAME`

- `DATABASE_PASSWORD`

- `JWT_SECRET`

- `CORS_ALLOWED_ORIGINS`

- `DEPLOY_TOKEN`, se a plataforma exigir.

### Regras

- Nunca commitar `.env`.

- Nunca commitar secrets reais.

- Usar nomes previsíveis para variáveis.

- Separar variáveis de produção e desenvolvimento.

## 9. Smoke test

Smoke test é uma verificação rápida após deploy para confirmar que a aplicação subiu e responde.

```text
GET /health
GET /actuator/health
```
O endpoint de health pode ser implementado no futuro com Spring
Actuator ou com um endpoint simples próprio. Não é obrigatório na Fase
1.

## 10. Workflow futuro sugerido

Quando a pipeline for implementada, este fluxo é a base recomendada.

```text
name: CI

on:
push:
branches: [main]
pull_request:
branches: [main]

jobs:
frontend:
runs-on: ubuntu-latest
steps:
- checkout
- setup node
- npm ci
- npm run lint
- npm run build

backend:
runs-on: ubuntu-latest
steps:
- checkout
- setup java 21
- ./mvnw test
- ./mvnw package
```
## 11. Critério mínimo antes de deploy

- Frontend com lint passando.

- Frontend com build passando.

- Backend com testes passando.

- Backend com package passando.

- Variáveis de ambiente configuradas.

- Sem secrets no repositório.

- Cadastro e login funcionando.

- Plano de rollback ou correção rápida definido.

## 12. Checklist de CI/CD

- A pipeline roda em push para main?

- A pipeline roda em pull request?

- Frontend e backend estão separados em jobs?

- O frontend roda lint e build?

- O backend roda testes e package?

- Os comandos podem ser reproduzidos localmente?

- Secrets estão fora do repositório?

- Deploy automático está desativado até auth real existir?

- Existe critério claro para o primeiro deploy?

## 13. Critério de conclusão da Task 7

A Task 7 é considerada concluída quando esta estratégia estiver documentada, a pipeline mínima estiver definida e houver um plano claro para introduzir deploy após cadastro e login reais.

BuildHub - Estratégia de CI/CD. Este documento deve ser revisado quando o primeiro workflow do GitHub Actions for implementado.
