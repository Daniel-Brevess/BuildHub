**Task 4**

# Arquitetura do backend do BuildHub

Este documento define a organização oficial do backend, as responsabilidades de cada camada, o fluxo de requests, padrões de DTO, mapper, exception, validação e checklist para novos módulos.

- Java 21

- Spring Boot

- Spring Data JPA

- PostgreSQL

## 1. Estado atual

O backend já possui uma estrutura por camadas e um fluxo inicial de waitlist usando controller, DTO, service, repository e entity. A Task 4 formaliza esse padrão para os módulos reais do MVP.

### Pacotes existentes

- `config`

- `controller`

- `dto`

- `entities`

- `repository`

- `service`

### Pacotes a criar quando necessário

- `mapper`

- `exception`

- `enums`

- `security`, quando auth/JWT entrar na Fase 2

Decisão: manter o pacote entities, pois
ele já existe no projeto. A documentação usa esse nome como padrão
oficial para as entidades JPA.

## 2. Estrutura de pacotes

| Pacote | Responsabilidade | Exemplo |
| --- | --- | --- |
| `controller` | Receber requisições HTTP, validar DTOs de entrada e retornar respostas. | `ProjectController` |
| `service` | Executar casos de uso, regras de negócio e transações. | `ProjectService` |
| `repository` | Isolar acesso ao banco com Spring Data JPA. | `ProjectRepository` |
| `entities` | Representar tabelas, relacionamentos e constraints JPA. | `Project` |
| `dto` | Definir contratos de entrada e saída da API. | `CreateProjectRequest`, `ProjectResponse` |
| `mapper` | Converter entity para response DTO e request DTO para entity quando fizer sentido. | `ProjectMapper` |
| `exception` | Centralizar exceptions de domínio e tratamento global de erros. | `GlobalExceptionHandler` |
| `config` | Concentrar configurações técnicas da aplicação. | `SecurityConfig` |
| `enums` | Guardar enums compartilhados pelo domínio. | `ApplicationStatus` |
| `security` | Organizar autenticação, JWT, filtros e utilitários de segurança na Fase 2. | `JwtService` |

## 3. Fluxo padrão de uma request

Toda funcionalidade de backend deve seguir um caminho previsível. Isso reduz acoplamento, facilita testes e impede regra de negócio em controllers.

- Controller

- Request DTO

- Service

- Repository

- Entity

- Mapper

- Response DTO

```text
POST /projects
Controller recebe CreateProjectRequest
Controller chama ProjectService.create(request)
Service valida regras de negócio
Service usa ProjectRepository
Service retorna entidade ou resultado de domínio
Mapper converte para ProjectResponse
Controller retorna ResponseEntity
` ## 4. Responsabilidades por camada ### Controller Define rota, verbo HTTP e status de resposta. Recebe `@Valid @RequestBody` quando houver body. Chama apenas services. Não acessa repository diretamente. Não contém regra de negócio. ### Service Concentra casos de uso. Valida regras de negócio. Controla transações com `@Transactional`. Coordena repositories e mappers. Lança exceptions de domínio quando necessário. ### Repository Estende interfaces do Spring Data JPA. Declara queries customizadas quando necessário. Não contém regra de negócio. Não retorna DTO por padrão no MVP. ### Entity Representa tabela e relacionamentos. Usa nomes e constraints compatíveis com o DER. Não deve ser exposta diretamente pela API. Relacionamentos devem usar `LAZY` por padrão. ## 5. DTOs DTOs são o contrato da API. Eles protegem entidades internas e deixam claro o que entra e o que sai de cada endpoint.

### Request DTO

- Usar suffix `Request`.

- Representar entrada de um caso de uso.

- Receber anotações de validação.

- Não conter campos calculados pelo backend.

```text
CreateProjectRequest
UpdateProjectRequest
CreateApplicationRequest
```
### Response DTO

- Usar suffix `Response`.

- Representar saída pública da API.

- Não expor senha, hash, tokens ou dados sensíveis.

- Pode agregar dados úteis para a tela.

```text
ProjectResponse
ApplicationResponse
ConversationResponse
```
Decisão: records são uma boa opção para DTOs simples,
seguindo o padrão já usado em WaitingRequestDTO e
WaitingResponseDTO.

## 6. Mappers

Mappers devem concentrar conversões entre entidades e DTOs quando a conversão deixar de ser trivial. No MVP, mappers manuais são suficientes; não há necessidade de adicionar dependência de mapping.

### Quando criar mapper

- Quando a resposta tiver vários campos.

- Quando houver conversão de enums ou campos derivados.

- Quando mais de um service precisar da mesma conversão.

- Quando o controller ficaria poluído com montagem de resposta.

### Padrão

- Nome do recurso + `Mapper`.

- Métodos pequenos e explícitos.

- Sem acesso a repository.

- Sem regra de negócio relevante.

```text
ProjectMapper
- toResponse(Project project)
- toSummaryResponse(Project project)
- toEntity(CreateProjectRequest request, User owner)
```
## 7. Exceptions e resposta de erro

Erros devem ser previsíveis para o frontend e consistentes em toda a API. A aplicação deve ter exceptions de domínio e um handler global.

### Classes esperadas

- `ApiErrorResponse`

- `GlobalExceptionHandler`

- `ResourceNotFoundException`

- `BusinessRuleException`

- `UnauthorizedOperationException`

### Formato de erro

```text
{
"message": "Mensagem clara para o erro.",
"code": "ERROR_CODE",
"field": "email"
}
```
Validações de campos devem retornar erro claro por campo. Regras de
negócio devem retornar código previsível, por exemplo
DUPLICATE_APPLICATION.

## 8. Validação

### DTO

- Usar Bean Validation para formato e obrigatoriedade.

- `@NotBlank` para textos obrigatórios.

- `@Email` para email.

- `@Size` para limites de texto.

- `@NotNull` para enums e IDs obrigatórios.

### Service

- Validar regra de negócio.

- Validar permissão e ownership.

- Validar duplicidade lógica.

- Validar transição de status.

- Validar consistência entre entidades relacionadas.

```text
Exemplo:
Se Application.type = POSITION_APPLICATION, position_id é obrigatório.
Se Application.type = PROJECT_JOIN_REQUEST, position_id deve ser nulo.
```
## 9. Transações

- Services de escrita devem usar `@Transactional`.

- Services apenas de leitura devem usar `@Transactional(readOnly = true)`.

- Controller não deve controlar transação.

- Repository não deve esconder transações complexas.

- Fluxos com múltiplas entidades devem ser coordenados no service.

Criar uma Application e a respectiva
Conversation é um exemplo de operação que deve acontecer
dentro da mesma transação.

## 10. Relacionamentos JPA

- Preferir `FetchType.LAZY` em relacionamentos.

- Evitar expor entidades com relacionamentos diretamente na API.

- Evitar cascades amplos sem motivo forte.

- Usar queries explícitas quando houver risco de N+1.

- Tabelas de junção com entidade própria devem ter `id` e unique constraint.

## 11. Segurança dentro da arquitetura

A implementação completa de autenticação entra na Fase 2, mas a arquitetura já deve reservar espaço para segurança.

### Agora

- Não expor `password_hash` em responses.

- Não confiar no frontend para regras críticas.

- Separar validação de entrada e regra de negócio.

- Manter `SecurityConfig` em `config`.

### Fase 2

- Criar pacote `security` se necessário.

- Adicionar JWT service, filtros e autenticação.

- Revisar CORS por ambiente.

- Proteger rotas privadas.

## 12. Padrão por módulo

Ao criar um novo módulo do MVP, o mínimo esperado é que ele seja implementado de forma consistente com as camadas abaixo.

```text
ProjectController
ProjectService
ProjectRepository
Project
CreateProjectRequest
UpdateProjectRequest
ProjectResponse
ProjectMapper
ProjectStatus
ProjectType
```
Nem todo módulo precisa de todos esses arquivos desde o primeiro
commit. A regra é criar a camada quando ela tiver responsabilidade
real, sem inventar abstração vazia.

## 13. Checklist para novos módulos backend

- Existe uma entidade ou caso de uso claro?

- Controller chama apenas service?

- Service concentra regra de negócio?

- Repository não contém regra de negócio?

- DTOs escondem dados sensíveis?

- Validações simples estão no request DTO?

- Validações de negócio estão no service?

- Exceptions são padronizadas?

- Mappers foram criados quando a conversão deixou de ser trivial?

- Relacionamentos JPA evitam EAGER desnecessário?

- O módulo tem testes compatíveis com o risco da alteração?

## 14. Critério de conclusão da Task 4

A Task 4 é considerada concluída quando esta documentação estiver criada e alinhada com o backend atual. A implementação de pacotes como `mapper` e `exception` acontecerá quando os módulos reais exigirem essas responsabilidades.

BuildHub - Arquitetura do backend. Este documento deve ser revisado antes da implementação dos módulos reais do MVP.
