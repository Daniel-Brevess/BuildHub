# BuildHub

BuildHub is a product platform for developers, designers, founders, and product creators who want to build projects together.

It is designed around a simple idea: make it easier for people with complementary skills to find each other, create projects, form teams, and move from idea to execution.

## Product Vision

BuildHub connects builders around real projects. The platform is planned to support user accounts, project creation, project discovery, team participation requests, member approvals, project dashboards, and integrations with the tools teams already use.

## Planned Technology Stack

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- Maven
- JWT
- BCrypt

### Database

- PostgreSQL

### Frontend

- React JS
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

### Recommended Frontend Libraries

- React Hook Form
- Zod
- Zustand or Context API
- Clsx

## Design System

BuildHub uses a Tokyo-inspired visual language with both dark and light modes.

### Tokyo Night

Built for creating at night.

| Token | Color |
| --- | --- |
| Background | `#0F111A` |
| Surface | `#1A1B26` |
| Border | `#292E42` |
| Text | `#C0CAF5` |
| Primary | `#7AA2F7` |
| Accent | `#BB9AF7` |

### Tokyo Morning

Built for planning during the day.

| Token | Color |
| --- | --- |
| Background | `#F7F8FC` |
| Surface | `#FFFFFF` |
| Border | `#DDE2F0` |
| Text | `#1F2335` |
| Primary | `#3D59A1` |
| Accent | `#7C3AED` |

## MVP Scope

The initial MVP includes:

- Sign up and login
- User profile
- Project creation
- Project feed
- Request to join a project
- Member approval and rejection
- Project dashboard
- GitHub, Discord, and Notion integrations

## Monetization

The documented monetization paths are:

- Featured projects
- Premium opportunities
- AI-powered smart matching
- Verified profiles
- Premium workspace
- Recruiting

## Roadmap

| Phase | Focus |
| --- | --- |
| Phase 1 | Landing page and validation |
| Phase 2 | Functional MVP |
| Phase 3 | Team formation |
| Phase 4 | Monetization |
| Phase 5 | AI and advanced matching |

## Repository Structure

```text
buildhub/
+-- docs/
|   +-- BuildHub_Documentacao_v2.pdf
+-- front-end/
    +-- React + Vite + Tailwind CSS application
```

## Frontend Quick Start

```bash
cd front-end
npm install
npm run dev
```

The frontend app is the first implementation layer of BuildHub and currently uses React, Vite, and Tailwind CSS.

## Source of Truth

This README is based on the product documentation in `docs/BuildHub_Documentacao_v2.pdf`.
