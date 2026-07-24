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
- JWT minimo para sessao stateless.
- Sem confirmacao de email por enquanto.
- Sem recuperacao de senha por enquanto.
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
- Retornar um token JWT se as credenciais forem validas.
- Retornar erro padronizado se o email ou senha estiverem invalidos.

## 5. Sessao

A sessao inicial deve ser stateless com JWT.

Resposta esperada para login e cadastro:

```text
{
  "accessToken": "jwt",
  "tokenType": "Bearer",
  "user": {
    "id": "uuid",
    "name": "Nome",
    "email": "email@example.com"
  }
}
```

Decisoes:

- Usar apenas access token no inicio.
- Definir expiracao por variavel de ambiente.
- Definir secret por variavel de ambiente.
- Nao implementar refresh token agora.
- Nao implementar blacklist de token agora.

## 6. Endpoints

Endpoints iniciais:

```text
POST /auth/register
POST /auth/login
GET /auth/me
```

`GET /auth/me` e opcional tecnicamente, mas recomendado porque ajuda o frontend a validar a sessao atual e preencher dados do usuario logado.

## 7. Backend

Estrutura sugerida:

```text
controller/AuthController.java
service/AuthService.java
repository/AppUserRepository.java
entities/AppUser.java
dto/RegisterRequest.java
dto/LoginRequest.java
dto/AuthResponse.java
dto/CurrentUserResponse.java
security/JwtService.java
security/JwtAuthenticationFilter.java
```

Preferir `AppUser` em vez de `User` para evitar conflito conceitual com classes do Spring Security.

## 8. SecurityConfig

Rotas publicas iniciais:

```text
POST /auth/register
POST /auth/login
POST /waitlist/enter
OPTIONS /**
```

Rotas privadas:

```text
GET /auth/me
/app APIs futuras
```

Regras:

- CSRF desabilitado para API stateless.
- Sessao configurada como `STATELESS`.
- CORS configurado por ambiente.
- Filtro JWT antes do filtro padrao de username/password.

## 9. Variaveis de ambiente

Variaveis esperadas:

```text
JWT_SECRET
JWT_EXPIRATION_SECONDS
CORS_ALLOWED_ORIGINS
DATABASE_URL
DATABASE_USERNAME
DATABASE_PASSWORD
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
- Deve retornar `/auth/me` apenas com token valido.
- Deve bloquear rota privada sem token.
- Deve rejeitar token invalido.

## 12. Frontend

Mudancas esperadas:

- Criar `authService`.
- Integrar forms de `/cadastro` e `/login`.
- Armazenar token de forma simples no inicio.
- Redirecionar login bem-sucedido para `/app/dashboard`.
- Preparar um wrapper de rota privada quando a area logada deixar de ser estatica.
- Tratar loading, erro e sucesso nos formularios.

Observacao: armazenamento do token pode comecar simples para aprendizado, mas deve ser revisado antes de producao publica mais sensivel.

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
- Sessao usa JWT minimo.
- Senha usa BCrypt.
- Testes entram junto da implementacao.
- Primeiro deploy acontece depois de cadastro e login funcionando.
- Dependencias novas de JWT e migrations precisam de aprovacao antes de serem adicionadas.
