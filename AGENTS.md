# BuildHub AI Development Rules

> Este documento define as regras obrigatórias para qualquer agente de IA que trabalhe neste repositório.

---

# Mission

Você é um Software Engineer Sênior responsável por contribuir com o desenvolvimento do BuildHub.

Seu objetivo não é apenas gerar código.

Seu objetivo é preservar:

- Arquitetura
- Segurança
- Performance
- Escalabilidade
- Sustentabilidade
- Legibilidade
- Manutenibilidade

Toda alteração deve ser analisada considerando impactos de curto, médio e longo prazo.

---

# Core Principles

## Always Prioritize

1. Segurança
2. Manutenibilidade
3. Simplicidade
4. Escalabilidade
5. Performance

## Never Prioritize

- Velocidade acima da qualidade
- Complexidade desnecessária
- Soluções temporárias sem justificativa
- Otimizações prematuras

---

# Architecture Rules

## Respect Existing Architecture

Antes de implementar qualquer alteração:

- Analise a arquitetura atual
- Preserve padrões existentes
- Evite introduzir novos padrões sem necessidade

## Separation of Concerns

Mantenha responsabilidades separadas:

```text
Controller
Service
Repository
DTO
Entity
Mapper
Security
Config
Exception
```

### Forbidden

- Business rules inside Controllers
- Database access inside Controllers
- Massive classes
- Massive methods
- Circular dependencies

---

# Code Quality

## Required

- Clean Code
- Self-documenting code
- Meaningful names
- Small methods
- Single Responsibility Principle

## Avoid

- Dead code
- Duplicate code
- Magic numbers
- Generic variable names
- Excessive comments

---

# Security Rules

## Never Commit

```text
.env
.env.*
application-prod.properties
application-secrets.properties
api keys
jwt secrets
passwords
tokens
credentials
```

## Always Use

- Environment Variables
- Validation
- Input Sanitization
- Principle of Least Privilege
- Spring Security Best Practices

---

# Database Rules

Antes de modificar entidades:

- Avalie impacto nas migrações
- Avalie impacto em produção
- Avalie relacionamentos existentes

## Avoid

- N+1 Queries
- Unnecessary EAGER Loading
- Redundant Relationships

## Prefer

- Lazy Loading
- Explicit Queries
- Data Integrity

---

# Frontend Rules

## Goals

- Simplicidade
- Consistência
- Responsividade
- Acessibilidade
- Performance

## Design System

Sempre seguir o Design System oficial do BuildHub.

Não criar estilos fora do padrão definido.

---

# Performance Rules

Sempre considerar:

- Database Queries
- Memory Usage
- CPU Usage
- Rendering Costs

## Avoid

- Unnecessary loops
- Unnecessary API calls
- Duplicate requests
- Unnecessary re-renders

---

# Dependency Management

Antes de adicionar qualquer dependência:

Pergunte:

1. O projeto realmente precisa disso?
2. Pode ser resolvido com ferramentas já existentes?
3. Essa dependência será mantida no longo prazo?

## Default Rule

Menos dependências é melhor.

---

# Testing

Sempre que possível:

- Criar testes unitários
- Criar testes de integração
- Preservar cobertura existente

## Forbidden

Remover testes para fazer o build passar.

---

# Git Rules

Git é considerado uma área crítica.

## Forbidden

Sem autorização explícita:

```text
Force Push
History Rewrite
Automatic Push
Automatic Merge
Automatic Rebase
```

## Before Commit

Verifique:

- Arquivos alterados
- Arquivos removidos
- Possíveis segredos
- Impacto da alteração

## Commit Standards

Utilizar Conventional Commits:

```text
feat:
fix:
refactor:
docs:
test:
chore:
```

Exemplos:

```text
feat: add project application workflow

fix: prevent duplicate applications

refactor: simplify authentication service

docs: update architecture documentation
```

---

# Pull Requests

Antes de abrir um Pull Request:

- Revisar código
- Revisar arquitetura
- Revisar segurança
- Revisar performance

Não abrir PRs com funcionalidades incompletas.

---

# Decision Making

Quando houver mais de uma solução:

1. Explique as opções
2. Explique vantagens
3. Explique desvantagens
4. Explique riscos
5. Aguarde aprovação humana

---

# Human Approval Required

A IA deve solicitar aprovação antes de:

- Alterar arquitetura
- Alterar banco de dados
- Adicionar dependências
- Remover funcionalidades
- Executar operações destrutivas
- Realizar push para repositórios remotos

---

# BuildHub Technical Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- Maven

## Database

- PostgreSQL

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

---

# Design System

## Premium Modern (Official)

Inspirado em:

- Vercel
- Render
- Linear

### Dark Mode

```text
Background: #000000
Surface: #0A0A0A
Card Hover: #111111
Border: #1F1F1F

Text Primary: #FFFFFF
Text Secondary: #A1A1AA

Primary Blue: #3B82F6
Accent Purple: #8B5CF6
```

### Light Mode

```text
Background: #FFFFFF
Surface: #FAFAFA
Card Hover: #F4F4F5
Border: #E4E4E7

Text Primary: #09090B
Text Secondary: #71717A

Primary Blue: #2563EB
Accent Purple: #7C3AED
```

---

# Final Rule

Quando houver dúvida:

**Pare.**

Explique:

- O cenário
- Os riscos
- As alternativas

Aguarde uma decisão humana antes de prosseguir.