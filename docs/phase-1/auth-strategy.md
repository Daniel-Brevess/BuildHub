# Estrategia inicial de autenticacao

Este documento registra a decisao inicial para implementar cadastro, login e sessao simples no BuildHub antes das features principais e antes do primeiro deploy.

## 1. Objetivo

Implementar autenticacao suficiente para permitir uso real da area privada, aprender Spring Security na pratica e preparar o projeto para Docker, GitHub Actions e primeiro deploy.

A meta agora nao e criar um sistema de auth completo. A meta e criar uma base segura, pequena e testavel, sem bloquear o desenvolvimento das features principais.

## 2. Decisao principal

O BuildHub deve comecar com:

- Cadastro simples.
- Login simples.
- Senha com hash usando BCrypt.
- Resposta simples com dados publicos do usuario.
- Sem confirmacao de email por enquanto.
- Sem recuperacao de senha por enquanto.
- Sem JWT por enquanto.
- Sem refresh token por enquanto.
- Sem roles complexas por enquanto.

## 3. Cadastro inicial

Campos do cadastro:

- `name`
- `email`
- `password`

Regras minimas:

- `name` obrigatorio.
- `email` obrigatorio, valido e unico.
- `password` obrigatoria, com tamanho minimo.
- Senha nunca deve ser salva em texto puro.
- A API nunca deve retornar `passwordHash`.

## 4. Login inicial

Campos do login:

- `email`
- `password`

Comportamento esperado:

- Validar se o usuario existe.
- Validar senha usando `PasswordEncoder`.
- Retornar dados publicos do usuario se as credenciais forem validas.
- Retornar erro padronizado se o email ou senha estiverem invalidos.

## 5. Sessao

A primeira etapa nao cria sessao real ainda. Ela valida cadastro e login, mantendo o backend stateless e pronto para receber JWT depois.

Resposta esperada para login e cadastro:

```text
{
  "id": "uuid",
  "name": "Nome",
  "email": "email@example.com",
  "message": "Login successful."
}
```

Decisoes para depois:

- Usar apenas access token quando JWT entrar.
- Definir expiracao por variavel de ambiente.
- Definir secret por variavel de ambiente.
- Nao implementar refresh token agora.
- Nao implementar blacklist de token agora.

## 6. Endpoints

Endpoints iniciais:

```text
POST /auth/register
POST /auth/login
```

`GET /auth/me` entra junto com JWT, porque depende de uma sessao autenticada.

## 7. Backend

Estrutura sugerida:

```text
auth/controller/AuthController.java
auth/service/AuthService.java
auth/repository/AppUserRepository.java
auth/entity/AppUser.java
auth/dto/RegisterRequest.java
auth/dto/LoginRequest.java
auth/dto/AuthResponse.java
auth/security/SecurityConfig.java
```

Preferir `AppUser` em vez de `User` para evitar conflito conceitual com classes do Spring Security.

## 8. SecurityConfig

Rotas publicas iniciais:

```text
POST /auth/register
POST /auth/login
OPTIONS /**
```

Rotas privadas futuras:

```text
GET /auth/me
/app APIs futuras
```

Regras:

- CSRF desabilitado para API stateless.
- Sessao configurada como `STATELESS`.
- CORS configurado por ambiente.
- Filtro JWT entra depois, quando a dependencia e a estrategia de token forem aprovadas.

## 9. Variaveis de ambiente

Variaveis esperadas:

```text
CORS_ALLOWED_ORIGINS
DATABASE_URL
DATABASE_USERNAME
DATABASE_PASSWORD
```

Variaveis futuras para JWT:

```text
JWT_SECRET
JWT_EXPIRATION_SECONDS
```

Regras:

- Nunca commitar secrets reais.
- Usar `.env.example` quando Docker entrar.
- Usar GitHub Secrets quando CI/CD e deploy entrarem.

## 10. Banco de dados

Tabela inicial sugerida:

```text
app_users
- id
- name
- email
- password_hash
- created_at
- updated_at
```

Constraints:

- `id` como chave primaria.
- `email` unico.
- `email` obrigatorio.
- `password_hash` obrigatorio.

Recomendacao: usar migration desde o inicio do auth para preparar o projeto para deploy real. Flyway e uma boa opcao, mas adiciona dependencia nova e deve ser aprovado antes de entrar.

## 11. Testes

Prioridade de testes:

- Unitarios em `AuthService` com JUnit e Mockito.
- Controller tests com MockMvc para contrato HTTP.
- Testes de security para rotas protegidas.

Cenarios minimos:

- Deve cadastrar usuario com dados validos.
- Deve rejeitar email duplicado.
- Deve rejeitar email invalido.
- Deve rejeitar senha curta.
- Deve logar com credenciais validas.
- Deve rejeitar login com usuario inexistente.
- Deve rejeitar login com senha incorreta.
- Deve liberar `POST /auth/register` e `POST /auth/login` sem token.
- Deve bloquear rotas nao liberadas.

## 12. Frontend

Mudancas esperadas:

- Criar `authService`.
- Integrar forms de `/cadastro` e `/login`.
- Redirecionar login bem-sucedido para `/app/dashboard`.
- Preparar um wrapper de rota privada quando a area logada deixar de ser estatica.
- Tratar loading, erro e sucesso nos formularios.

Observacao: armazenamento de token sera decidido quando JWT entrar.

## 13. Docker e deploy

Depois que cadastro e login estiverem funcionando:

- Criar `Dockerfile` do backend.
- Criar configuracao de frontend para ambiente.
- Criar `docker-compose.yml` com backend, frontend e PostgreSQL.
- Criar workflow inicial do GitHub Actions.
- Rodar lint/build frontend.
- Rodar testes/package backend.
- Configurar secrets no GitHub ou plataforma de deploy.
- Fazer primeiro deploy controlado.

## 14. Fora do escopo agora

Ficam para depois:

- Confirmacao de email.
- Recuperacao de senha.
- Refresh token.
- Logout server-side.
- MFA.
- OAuth social login.
- Roles e permissoes avancadas.
- Auditoria de login.
- Rate limit.
- Bloqueio por tentativas.

## 15. Criterio para comecar implementacao

Podemos iniciar o auth quando estas decisoes estiverem aceitas:

- Cadastro usa `name`, `email`, `password`.
- Entidade se chama `AppUser`.
- Cadastro e login retornam dados publicos do usuario.
- Senha usa BCrypt.
- Testes entram junto da implementacao.
- Primeiro deploy acontece depois de cadastro e login funcionando.
- Dependencias novas de JWT e migrations precisam de aprovacao antes de serem adicionadas.
