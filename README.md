<p align="center">
    <img src="public/images/infnet.jpg" align="center" width="30%" alt="Infnet-Logo">
</p>
<p align="center"><h1 align="center">INFNET-Library</h1></p>
<p align="center">
    <em>A Biblioteca de Questões do Instituto Infnet</em>
</p>
<p align="center">
    <img src="https://img.shields.io/github/license/Phoenix7290/Infnet-EDS?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
    <img src="https://img.shields.io/github/last-commit/Phoenix7290/Infnet-EDS?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
    <img src="https://img.shields.io/github/languages/top/Phoenix7290/Infnet-EDS?style=default&color=0080ff" alt="repo-top-language">
    <img src="https://img.shields.io/github/languages/count/Phoenix7290/Infnet-EDS?style=default&color=0080ff" alt="repo-language-count">
</p>
<br>

## Índice

1. [Introdução](#introdução)
2. [Estrutura do Repositório](#estrutura-do-repositório)
3. [Como Usar Este Repositório](#como-usar-este-repositório)
4. [Tecnicidade](#tecnicidade)
    - [Funcionalidades](#funcionalidades)
5. [Diretrizes de Contribuição](#diretrizes-de-contribuição)
6. [Licença](#licença)
7. [Agradecimentos](#agradecimentos)

<br>

## Introdução

Bem-vindo ao repositório de questões da graduação do Instituto Infnet. Este repositório contém o material de curso, exercícios e questões encontrados ao longo do programa de graduação no Infnet. Ele se destina a servir como um recurso para estudantes atuais e futuros. Em especial, com intuito de acervo acadêmico.

## Estrutura do Repositório

O repositório está organizado por matérias. Cada matéria possui:

- **TPs** (Testes de Perfomances)
- **ATs** (Assessments)

Dentro de cada diretório, você encontrará somente as questões para estudo e revisão.

```sh
└── Infnet-EDS/
    ├── LICENSE
    ├── README.md
    ├── eslint.config.mjs
    ├── jest.config.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── src
    │   ├── __tests__
    │   │   └── index.ts
    │   ├── app
    │   │   ├── courses
    │   │   ├── favicon.ico
    │   │   ├── layout.tsx
    │   │   ├── loading.tsx
    │   │   └── page.tsx
    │   ├── components
    │   │   └── button.tsx
    │   ├── data
    │   │   └── questions.json
    │   ├── hooks
    │   │   └── useFetchQuestions.tsx
    │   ├── layout
    │   │   └── index.tsx
    │   ├── services
    │   │   └── database.ts
    │   ├── styles
    │   │   ├── components
    │   │   └── globals.css
    │   └── utils
    │       └── helpers.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

## Como Usar Este Repositório

1. **Navegue pelo Website**: Encontre o conteúdo das questões navegando pelos blocos. Dentro de cada bloco há 5 disciplinas das quais há 3 TPs e 1 AT, cada qual contendo entre 15 e 16 questões, exceção dos ATs.
2. **Alternativamente, Navegue pelo diretório relevante**: Encontre o conteúdo do seu interesse navegando pelos diretórios organizados por matéria ou tipo de tarefa..
3. **Revise as instruções e questões**: Cada diretório contém arquivos Markdown (`.md`) com descrições detalhadas de cada exercício.
4. **Contribua**: Caso você tenha resoluções ou conteúdo adicional para compartilhar, siga as diretrizes de contribuição listadas abaixo.

## Tecnicidade

O projeto Infnet-Library é uma estrutura robusta de desenvolvimento web projetada para simplificar a criação de aplicações escaláveis, consistentes e eficientes. Ele utiliza Next.js para renderização do lado do servidor e React para interfaces de usuário dinâmicas, garantindo um processo de desenvolvimento contínuo. Ideal para desenvolvedores que desejam construir aplicações web de alta qualidade com complexidade de configuração reduzida e consistência aprimorada.

## Funcionalidades

|      | Funcionalidade  | Resumo        |
| :--- | :---:           | :---          |
| ⚙️  | **Arquitetura**  | <ul><li>Utiliza uma stack moderna de JavaScript com TypeScript, React e Next.js para capacidades robustas de front-end e renderização do lado do servidor.</li><li>Estruturado em torno de uma arquitetura modular e baseada em componentes, aprimorando a reutilização e a manutenção.</li><li>Emprega uma clara separação de preocupações entre componentes de UI e lógica de negócios, facilitada pelos frameworks React e Next.js.</li></ul> |
| 🔩 | **Qualidade do Código**  | <ul><li>Adota ESLint e Prettier para linting e formatação de código, garantindo consistência e legibilidade do código.</li><li>Usa TypeScript para verificação estática de tipos, reduzindo erros em tempo de execução e promovendo refatoração de código mais segura.</li><li>Inclui arquivos de configuração abrangentes como `tsconfig.json` e `.eslintrc` para manter padrões de codificação rigorosos.</li></ul> |
| 📄 | **Documentação** | <ul><li>Uso extensivo de arquivos Markdown (MD), indicando uma forte ênfase na documentação com 70 arquivos MD presentes.</li><li>A documentação inclui comandos de instalação, uso e teste, fornecendo diretrizes claras para configuração e operação.</li><li>A diversidade de linguagens na documentação (JSON, TypeScript, CSS, SCSS) suporta uma cobertura abrangente de diferentes aspectos do projeto.</li></ul> |
| 🔌 | **Integrações**  | <ul><li>Integra-se com bibliotecas populares de front-end e estilização como React, Next.js e TailwindCSS para uma experiência de desenvolvimento simplificada.</li><li>Suporta ferramentas e ambientes de desenvolvimento modernos através de dependências como `jest`, `eslint` e `stylelint`.</li><li>Sem menção explícita de integrações com APIs ou serviços externos, focando mais na consistência interna e desempenho.</li></ul> |
| 🧩 | **Modularidade**    | <ul><li>Estrutura altamente modular facilitada pelo uso de componentes React e páginas Next.js.</li><li>Incentiva a reutilização de código e a separação através de CSS modular (Sassy CSS) e estilização baseada em componentes (TailwindCSS).</li><li>Configuração de testes modular com Jest e Testing Library para isolar e testar componentes de forma eficaz.</li></ul> |
| 🧪 | **Testes**       | <ul><li>Incorpora Jest e React Testing Library para testes unitários e de integração abrangentes.</li><li>Usa TypeScript para testes com segurança de tipos, aprimorando a confiabilidade dos testes.</li><li>Ambiente de teste configurado com `jest-environment-jsdom` para simular condições semelhantes a um navegador para testar componentes React.</li></ul> |
| ⚡️  | **Desempenho**   | <ul><li>Aproveita o Next.js para renderização otimizada do lado do servidor e geração de sites estáticos, aumentando o desempenho.</li><li>Utiliza gerenciamento eficiente de dependências com `package-lock.json` para garantir instalações consistentes e tempos de carregamento ótimos.</li><li>Emprega técnicas modernas de JavaScript e CSS para minimizar a sobrecarga em tempo de execução e melhorar a responsividade.</li></ul> |

## Diretrizes de Contribuição

Aceitamos contribuições de todos. Aqui estão algumas diretrizes para ajuda-lo a contribuir:

1. **Faça um fork deste repositório**: Clique no botão “Fork” no canto superior direito.
2. **Clone seu fork**: `git clone https://github.com/seu-usuario/infnet-eds.git`
3. **Crie um novo branch**: `git checkout -b nova-funcionalidade`
4. **Faça suas alterações**: Adicione suas soluções ou novas questões.
5. **Comite suas alterações**: `git commit -m "Adicionar nova funcionalidade"
6. **Faça push para o branch**: `git push origin nova-funcionalidade`
7. **Crie um pull request**: Abra um pull request no repositório principal descrevendo suas alterações.

## Licença

Este repositório está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Agradecimentos

Gostaríamos de agradecer aos professores e funcionários do Infnet pela orientação. Também agradecemos aos colegas e estudantes que ajudaram contribuindo para este repositório.
