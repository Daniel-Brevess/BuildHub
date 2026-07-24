**Regras de Desenvolvimento**

# Como o BuildHub deve ser desenvolvido

Este documento define a base prática para implementação, revisão, testes, commits, segurança e deploys. A intenção é criar qualidade sem transformar o desenvolvimento em burocracia.

- Qualidade

- Testes

- Segurança

- CI/CD

## 1. Princípios principais

Toda decisão técnica deve respeitar esta ordem de prioridade:

### 1. Segurança

Proteger dados, segredos, permissões e fluxos críticos.

### 2. Manutenibilidade

Facilitar evolução, revisão e entendimento futuro.

### 3. Simplicidade

Evitar complexidade antes de existir uma necessidade real.

### 4. Escalabilidade

Preservar caminhos para crescimento sem superengenharia.

### 5. Performance

Considerar custo de banco, renderização, memória e chamadas.

## 2. Antes de implementar

- Entender qual problema está sendo resolvido.

- Verificar se já existe padrão parecido no projeto.

- Evitar criar dependência nova sem necessidade.

- Avaliar impacto em frontend, backend, banco e documentação.

- Avaliar se a alteração exige teste.

- Avaliar se a alteração exige atualização da documentação.

## 3. Testes

### Quando criar testes unitários

- Regra de negócio.

- Validação.

- Cálculo.

- Transformação de dados.

- Mapper.

- Service com decisão importante.

- Comportamento que pode quebrar silenciosamente no futuro.

### Quando criar testes de integração

- Controller.

- Fluxo HTTP.

- Banco de dados.

- Repository com query customizada.

- Spring Security.

- Autenticação.

- CORS.

- Integração entre várias camadas.

Exceções saudáveis: ajustes visuais pequenos, textos
estáticos, documentação e placeholders sem regra de negócio podem não
exigir teste imediato. Se houver risco de regressão, o teste volta a
ser recomendado.

## 4. Backend

### Separação esperada

- `controller`: recebe requisições e retorna respostas.

- `service`: concentra casos de uso e regras de negócio.

- `repository`: acessa dados.

- `entity`: representa tabelas e relacionamentos.

- `dto`: define entrada e saída da API.

- `mapper`: converte entre entity e DTO.

- `exception`, `config` e `security`: organizam aspectos técnicos.

### Regras

- Controller não deve conter regra de negócio.

- Controller não deve acessar repository diretamente.

- Entity não deve ser exposta diretamente na API.

- Service não deve devolver entity quando DTO for mais seguro.

- Validações devem ser explícitas.

- Exceptions devem ser previsíveis e padronizadas.

## 5. Frontend

### Estrutura esperada

- `pages/public`: páginas públicas.

- `pages/private`: páginas privadas.

- `components`: componentes reutilizáveis.

- `layouts`: estruturas de página.

- `services`: chamadas HTTP e integrações.

- `routes`: configuração de rotas.

- `utils`: helpers pequenos e puros.

### Regras

- Evitar duplicação visual.

- Manter responsividade mobile e desktop.

- Manter acessibilidade básica.

- Evitar chamadas HTTP espalhadas em componentes grandes.

- Usar estados claros para loading, error, empty e success.

- Preservar o design system oficial do BuildHub.

## 6. Nomenclatura por camada

Os nomes devem deixar claro o papel da classe ou arquivo sem exigir contexto externo. A nomenclatura deve seguir a responsabilidade da camada e evitar termos genéricos.

| Camada | Padrão | Exemplo |
| --- | --- | --- |
| Controller | Nome do recurso + `Controller` | `ProjectController`, `ApplicationController` |
| Service | Nome do recurso/caso de uso + `Service` | `ProjectService`, `ApplicationService` |
| Repository | Nome da entidade + `Repository` | `ProjectRepository`, `UserRepository` |
| DTO | Nome do recurso + intenção + `Request` ou `Response` | `CreateProjectRequest`, `ProjectResponse` |
| Entity | Nome do domínio no singular | `User`, `Project`, `Application` |
| Mapper | Nome do recurso + `Mapper` | `ProjectMapper`, `UserProfileMapper` |

Evitar nomes como Manager, Helper,
Util ou Data quando o papel real puder ser
nomeado com mais precisão.

## 7. Banco de dados

Antes de alterar entidades ou relacionamentos:

- Avaliar impacto em migrations.

- Avaliar integridade dos dados.

- Evitar relacionamento desnecessário.

- Evitar `EAGER` sem motivo forte.

- Preferir `LAZY` por padrão.

- Avaliar índices para buscas importantes.

- Definir campos obrigatórios com clareza.

Campos comuns recomendados: id, createdAt,
updatedAt e status, quando fizer sentido.

## 8. API

### Padrões desejados

- URLs claras e consistentes.

- Verbos HTTP corretos.

- DTOs para request e response.

- Mensagens de erro padronizadas.

- Respostas de sucesso previsíveis.

- Validação de entrada.

- Nunca retornar dados sensíveis.

### Resposta de erro

```text
{
"message": "Mensagem clara para o erro.",
"code": "ERROR_CODE",
"field": "email"
}
```
### Resposta de sucesso

```text
{
"data": {
"id": "uuid",
"title": "Nome do recurso"
},
"message": "Operação realizada com sucesso."
}
```
### Resposta paginada

```text
{
"data": [],
"page": 0,
"size": 20,
"totalElements": 0,
"totalPages": 0
}
```
O padrão pode evoluir durante a implementação, mas a API deve evitar
respostas improvisadas diferentes para cada endpoint.

## 9. Segurança

### Nunca commitar

- `.env` ou `.env.*`.

- `application-prod.properties`.

- `application-secrets.properties`.

- Chaves de API.

- Senhas, tokens e JWT secrets.

- Credenciais.

### Regras

- Usar variáveis de ambiente para segredos.

- Validar entradas do usuário.

- Não confiar no frontend para regras críticas.

- Aplicar princípio do menor privilégio.

- Revisar CORS e JWT antes de deploy.

## 10. Dependências e commits

### Dependências

- O projeto realmente precisa disso?

- Existe solução simples com o que já temos?

- A dependência é mantida?

- Ela aumenta risco de segurança?

- Ela dificulta build ou deploy?

**Regra padrão:** menos dependências é melhor.

### Conventional Commits

- `feat:` funcionalidades.

- `fix:` correções.

- `refactor:` refatorações.

- `docs:` documentação.

- `test:` testes.

- `chore:` manutenção.

```text
feat: add project application workflow
fix: prevent duplicate applications
docs: add phase one foundation plan
test: cover project creation rules
```
## 11. Checklist antes de commit

- Verificar `git status`.

- Revisar diff.

- Garantir que não há segredos.

- Rodar testes relevantes.

- Rodar lint/build quando afetar frontend.

- Rodar build/testes quando afetar backend.

- Confirmar que a documentação foi atualizada quando necessário.

## 12. Checklist antes de abrir ou deployar feature

### Antes de abrir a feature

- Confirmar que o escopo foi atendido.

- Revisar se houve mudança de arquitetura ou banco.

- Atualizar documentação quando houver regra nova.

- Garantir que validações e mensagens de erro existem.

- Garantir que estados de loading, erro e vazio foram considerados no frontend.

- Rodar testes, lint ou build compatíveis com a alteração.

### Antes de deployar

- Confirmar que não há segredos no diff.

- Confirmar variáveis de ambiente necessárias.

- Rodar pipeline mínima ou comandos equivalentes localmente.

- Revisar CORS, JWT e permissões quando a feature tocar segurança.

- Garantir que migrations foram revisadas quando houver mudança no banco.

- Ter um caminho claro de rollback ou correção rápida.

## 13. CI/CD e deploy

A pipeline inicial deve automatizar validações básicas, evitar deploy com build quebrado e criar disciplina de entrega desde cedo.

### Pipeline desejada

- Instalar dependências do frontend.

- Rodar lint do frontend.

- Gerar build do frontend.

- Rodar testes do backend.

- Gerar build do backend.

### Estratégia de deploy

- Primeiro deploy quando cadastro e login estiverem funcionando.

- Depois, seguir com desenvolvimento local e entregas frequentes.

- Cada deploy deve passar por validação mínima automatizada.

## 14. Documentação durante o desenvolvimento

### Documentar sempre

- Decisões de arquitetura.

- Mudanças no modelo de dados.

- Regras de negócio.

- Fluxos importantes.

- Configurações de segurança.

- Variáveis de ambiente necessárias.

- Como rodar, testar e fazer deploy.

### Evitar documentar demais

- Cada pequeno ajuste visual.

- Cada nome de variável.

- Implementações óbvias.

- Detalhes que o código já explica bem.

Regra prática: documente o que ajuda uma pessoa futura
a entender decisões, fluxos e riscos.

BuildHub - Regras de desenvolvimento. Este arquivo deve ser revisado a cada fase importante do projeto.
