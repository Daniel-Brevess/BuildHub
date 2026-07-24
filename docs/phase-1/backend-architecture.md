# Arquitetura do backend do BuildHub

Este documento define a organizacao oficial do backend, as responsabilidades de cada camada dentro de uma feature, o fluxo de requests, padroes de DTO, mapper, exception, validacao e checklist para novos modulos.

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL

## 1. Decisao principal

O backend deve ser organizado por feature/sessao, nao por camada global.

Em vez de manter todos os controllers em um pacote unico, todos os services em outro pacote unico e todos os repositories em outro pacote unico, cada feature deve concentrar suas proprias camadas.

Exemplo:

```text
auth
- controller
- dto
- entity
- repository
- service
- security
```

Essa estrutura deixa mais claro onde cada fluxo vive, reduz navegacao entre pastas distantes e facilita evoluir uma feature sem espalhar arquivos pelo projeto inteiro.

## 2. Estrutura base esperada

Estrutura recomendada para o backend:

```text
org.danielbreves.backend
- auth
  - controller
  - dto
  - entity
  - repository
  - service
  - security
- project
  - controller
  - dto
  - entity
  - repository
  - service
  - mapper
  - enums
- application
  - controller
  - dto
  - entity
  - repository
  - service
  - mapper
- conversation
  - controller
  - dto
  - entity
  - repository
  - service
```

Pacotes devem ser criados apenas quando houver responsabilidade real. Nao criar pastas vazias.

## 3. Responsabilidade por feature

Cada feature pode ter:

| Pasta | Responsabilidade |
| --- | --- |
| `controller` | Receber requisicoes HTTP, validar DTOs de entrada e retornar responses. |
| `dto` | Definir contratos publicos de entrada e saida daquela feature. |
| `entity` | Representar tabelas e relacionamentos daquela feature. |
| `repository` | Isolar acesso ao banco da feature. |
| `service` | Executar casos de uso, regras de negocio e transacoes. |
| `mapper` | Converter entre entity e DTO quando a conversao deixar de ser trivial. |
| `enums` | Guardar enums especificos da feature. |
| `security` | Guardar filtros, providers, token services e detalhes de seguranca da feature de auth. |

## 4. Codigo compartilhado

Nao criar `shared` no inicio apenas por convencao.

Codigo compartilhado deve nascer somente quando mais de uma feature precisar da mesma responsabilidade. Enquanto uma classe pertence claramente a uma feature, ela deve ficar dentro da propria feature.

Exemplos:

```text
auth/security/SecurityConfig.java
auth/security/CorsConfig.java
auth/exception/AuthExceptionHandler.java
project/exception/ProjectNotFoundException.java
```

Quando houver reutilizacao real entre modulos, o pacote compartilhado pode ser criado com escopo pequeno e nome explicito.

## 5. Fluxo padrao de uma request

Toda funcionalidade de backend deve seguir um caminho previsivel.

```text
Controller
Request DTO
Service
Repository
Entity
Mapper
Response DTO
```

Exemplo:

```text
POST /projects
ProjectController recebe CreateProjectRequest
ProjectController chama ProjectService.create(request)
ProjectService valida regras de negocio
ProjectService usa ProjectRepository
ProjectMapper converte entity para ProjectResponse
ProjectController retorna ResponseEntity<ProjectResponse>
```

## 6. Controllers

Controllers devem:

- Definir rota, verbo HTTP e status de resposta.
- Receber `@Valid @RequestBody` quando houver body.
- Chamar apenas services.
- Retornar DTOs.
- Nao acessar repository diretamente.
- Nao conter regra de negocio.

## 7. Services

Services devem:

- Concentrar casos de uso.
- Validar regras de negocio.
- Controlar transacoes com `@Transactional`.
- Coordenar repositories e mappers.
- Lancar exceptions de dominio quando necessario.

Services de escrita devem usar `@Transactional`.

Services apenas de leitura devem usar `@Transactional(readOnly = true)`.

## 8. Repositories

Repositories devem:

- Estender interfaces do Spring Data JPA.
- Declarar queries customizadas quando necessario.
- Nao conter regra de negocio.
- Nao retornar DTO por padrao no MVP.

Queries customizadas devem existir quando ajudarem a evitar N+1, buscar dados explicitamente ou proteger regras importantes.

## 9. Entities

Entities devem:

- Representar tabelas, constraints e relacionamentos.
- Usar nomes coerentes com o dominio.
- Nao ser expostas diretamente pela API.
- Usar relacionamentos `LAZY` por padrao.
- Evitar cascades amplos sem motivo forte.

Para auth, a entidade inicial deve se chamar `AppUser`, nao `User`, para evitar confusao com tipos do Spring Security.

## 10. DTOs

DTOs sao o contrato da API.

### Request DTO

- Usar suffix `Request`.
- Representar entrada de um caso de uso.
- Receber Bean Validation.
- Nao conter campos calculados pelo backend.

Exemplos:

```text
RegisterRequest
LoginRequest
CreateProjectRequest
UpdateProjectRequest
CreateApplicationRequest
```

### Response DTO

- Usar suffix `Response`.
- Representar saida publica da API.
- Nao expor senha, hash, tokens internos ou dados sensiveis.
- Pode agregar dados uteis para a tela.

Exemplos:

```text
AuthResponse
CurrentUserResponse
ProjectResponse
ApplicationResponse
ConversationResponse
```

Records sao uma boa opcao para DTOs simples.

## 11. Mappers

Mappers devem ser criados quando a conversao deixar de ser trivial.

Quando criar mapper:

- Quando a response tiver varios campos.
- Quando houver conversao de enums ou campos derivados.
- Quando mais de um service precisar da mesma conversao.
- Quando o controller ficaria poluido com montagem de response.

Padrao:

```text
project/mapper/ProjectMapper.java
- toResponse(Project project)
- toSummaryResponse(Project project)
- toEntity(CreateProjectRequest request, AppUser owner)
```

No MVP, mappers manuais sao suficientes. Nao adicionar dependencia de mapping sem necessidade real.

## 12. Exceptions e resposta de erro

Erros devem ser previsiveis para o frontend e consistentes em toda a API.

Classes de erro devem comecar dentro da feature dona do fluxo.

```text
auth/exception/AuthExceptionHandler.java
auth/dto/AuthErrorResponse.java
```

Formato de erro:

```text
{
  "message": "Mensagem clara para o erro.",
  "code": "ERROR_CODE",
  "field": "email"
}
```

Validacoes de campos devem retornar erro claro por campo. Regras de negocio devem retornar codigo previsivel, por exemplo `DUPLICATE_EMAIL`.

## 13. Validacao

### DTO

- `@NotBlank` para textos obrigatorios.
- `@Email` para email.
- `@Size` para limites de texto.
- `@NotNull` para enums e IDs obrigatorios.

### Service

- Validar regra de negocio.
- Validar permissao e ownership.
- Validar duplicidade logica.
- Validar transicao de status.
- Validar consistencia entre entidades relacionadas.

## 14. Seguranca

Seguranca deve ficar dividida assim:

- Configuracao inicial em `auth/security`.
- Implementacao especifica de auth em `auth/security`.
- Regras de ownership dentro dos services das features.

Exemplo:

```text
auth/security/SecurityConfig.java
auth/security/JwtService.java
auth/security/JwtAuthenticationFilter.java
auth/security/AuthenticatedUser.java
```

Regras:

- Nunca expor `passwordHash`.
- Nunca confiar no frontend para regras criticas.
- Usar BCrypt para senhas.
- Usar JWT minimo no inicio.
- Guardar secrets em variaveis de ambiente.
- Revisar CORS por ambiente antes de deploy.

## 15. Padrao inicial para auth

Auth deve ser a primeira feature real nessa nova arquitetura.

Estrutura inicial:

```text
auth
- controller/AuthController.java
- dto/RegisterRequest.java
- dto/LoginRequest.java
- dto/AuthResponse.java
- entity/AppUser.java
- repository/AppUserRepository.java
- service/AuthService.java
- security/SecurityConfig.java
```

Endpoints iniciais:

```text
POST /auth/register
POST /auth/login
```

O primeiro passo do auth deve validar cadastro e login com BCrypt. JWT, `GET /auth/me` e filtros de autenticacao entram depois da aprovacao da dependencia e da estrategia de sessao.

## 16. Checklist para novas features backend

- A feature tem pacote proprio?
- Controllers, DTOs, services, repositories e entities estao dentro da feature?
- Codigo compartilhado so foi criado quando existe reutilizacao real?
- Controller chama apenas service?
- Service concentra regra de negocio?
- Repository nao contem regra de negocio?
- DTOs escondem dados sensiveis?
- Validacoes simples estao no request DTO?
- Validacoes de negocio estao no service?
- Exceptions sao padronizadas?
- Relacionamentos JPA evitam EAGER desnecessario?
- O modulo tem testes compativeis com o risco da alteracao?

## 17. Criterio de conclusao

Esta arquitetura esta pronta para a implementacao do auth quando:

- O pacote `auth` for criado seguindo a organizacao por feature.
- As configuracoes iniciais de seguranca estiverem em `auth/security`.
- As rotas de auth tiverem testes unitarios e de controller.
