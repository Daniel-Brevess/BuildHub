**Task 6**

# Estratégia de testes do BuildHub

Este documento define como o projeto vai introduzir testes unitários, testes de integração e JUnit de forma progressiva, prática e alinhada com as regras de negócio do MVP.

- JUnit

- Spring Boot Test

- H2

- MVP

## 1. Objetivo

O objetivo não é testar tudo desde o primeiro dia. O objetivo é criar uma estratégia que ajude no aprendizado de JUnit e proteja as partes mais importantes do BuildHub: regras de negócio, validações, contratos HTTP e segurança futura.

Decisão principal: começar com testes backend, porque
o backend concentra as regras críticas do MVP e oferece cenários mais
claros para aprender JUnit.

## 2. Prioridade inicial

### Primeiro foco

- Services.

- Validators ou regras de validação.

- Mappers quando houver conversão relevante.

- Controllers com fluxo HTTP importante.

### Por quê

- Services concentram regra de negócio.

- Testes unitários são rápidos e bons para aprender.

- Controllers garantem contrato da API.

- O frontend ainda está majoritariamente visual/estático.

## 3. Tipos de teste

| Tipo | Quando usar | Exemplos |
| --- | --- | --- |
| Unitário | Quando a regra pode ser testada isoladamente, sem subir a aplicação inteira. | `ApplicationService`, validators, mappers, regras de status. |
| Integração | Quando for necessário testar Spring, HTTP, validação, banco ou várias camadas juntas. | `POST /applications`, payload inválido, fluxo com H2. |
| Repository | Somente quando houver query customizada ou regra de consulta criada pelo projeto. | `existsByApplicantIdAndProjectIdAndPositionId`. |
| Segurança | Na Fase 2, quando auth, JWT, CORS e rotas privadas forem implementados. | 401, 403, token inválido, CORS por ambiente. |

## 4. Decisões oficiais

### Services primeiro

Services serão a prioridade porque concentram casos de uso e regras de negócio. Isso evita testar apenas detalhes superficiais.

### Controllers por integração

Controllers devem ser testados para garantir rota, JSON, validação e status HTTP, não para testar regra de negócio.

### Repositories com critério

Não vamos testar `save`, `findById` e `delete` do Spring Data. Testaremos apenas queries customizadas ou consultas críticas.

### H2 no começo

H2 será usado inicialmente nos testes de integração por já estar no projeto, ser rápido e reduzir atrito durante o aprendizado.

## 5. Regras que merecem teste

- Usuário cria projeto com dados válidos.

- Projeto possui tipo e status válidos.

- Vaga pertence a um projeto existente.

- Stack não deve ser duplicada pelo mesmo usuário, projeto ou vaga.

- Application para vaga exige `position_id`.

- Application geral para projeto deve ter `position_id` nulo.

- Application não deve ser duplicada para o mesmo contexto.

- Application muda de status de forma controlada.

- Conversation nasce vinculada a uma Application.

- Message pertence a uma Conversation e possui sender válido.

## 6. Estrutura de pastas

A estrutura de testes deve seguir o padrão Maven/Spring e espelhar a organização do backend principal.

```text
back-end/src/test/java/org/danielbreves/backend
- controller
- service
- repository
- mapper
- validation
- security
```
O pacote security fica reservado para a Fase 2, quando
JWT, CORS e autenticação real entrarem no projeto.

## 7. Padrão de nomes

Os nomes dos testes devem descrever comportamento. A recomendação é usar inglês técnico, mantendo consistência com Java, Spring e exemplos comuns da comunidade.

```text
shouldCreateProjectWhenRequestIsValid()
shouldRejectDuplicateApplication()
shouldReturnBadRequestWhenEmailIsInvalid()
shouldCreateConversationWhenApplicationIsCreated()
shouldRejectPositionApplicationWithoutPositionId()
```
## 8. Primeiro teste

### Sanidade

O primeiro teste deve ser um `contextLoads()` simples para confirmar que o Spring consegue subir o contexto.

### Primeiro teste real

O primeiro teste real deve ser de service, provavelmente em `ProjectService`, `StackService` ou `ApplicationService`, quando esses módulos forem implementados.

## 9. Obrigatoriedade

### Teste obrigatório quando mexer em

- Regra de negócio.

- Service.

- Validação importante.

- Query customizada.

- Fluxo HTTP relevante.

- Correção de bug.

- Auth, JWT, CORS e segurança na Fase 2.

### Teste opcional quando for

- Documentação.

- Ajuste visual pequeno.

- Página estática sem regra.

- Refactor pequeno sem mudança de comportamento.

- Placeholder temporário.

## 10. Ferramentas

| Ferramenta | Uso | Motivo |
| --- | --- | --- |
| JUnit | Base dos testes automatizados Java. | Padrão do ecossistema Spring. |
| Spring Boot Test | Testes de integração e contexto Spring. | Permite testar controllers, validação e camadas integradas. |
| Mockito | Mocks em testes unitários. | Isola services sem depender de banco. |
| H2 | Banco em memória para integração inicial. | Rápido, simples e já disponível no projeto. |

## 11. O que fica para a Fase 2

- Testes de login.

- Testes de cadastro.

- Testes de JWT válido e inválido.

- Testes de rota privada sem autenticação.

- Testes de autorização por dono do recurso.

- Testes de CORS por ambiente.

- Testes de logout ou invalidação de sessão, se existir.

## 12. Checklist para novos testes

- O teste protege uma regra real?

- O nome do teste descreve o comportamento?

- O teste tem Arrange, Act e Assert claros?

- O teste evita depender de ordem de execução?

- O teste falha pelo motivo certo?

- O teste evita testar implementação interna desnecessária?

- O teste é unitário quando pode ser unitário?

- O teste é integração quando precisa validar Spring, HTTP ou banco?

## 13. Critério de conclusão da Task 6

A Task 6 é considerada concluída quando esta documentação estiver criada, a estratégia estiver alinhada com o backend atual e houver um caminho claro para introduzir JUnit, testes unitários e testes de integração nos próximos módulos.

BuildHub - Estratégia de testes. Este documento deve evoluir conforme os primeiros módulos reais forem implementados.
