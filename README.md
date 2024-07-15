# SagaEmOrdem

## Objetivo
SagaEmOrdem tem como objetivo organizar e exibir filmes, séries e desenhos animados em ordem cronológica baseada na história da própria produção. Além disso, permite que os usuários cadastrados salvem sua ordem cronológica preferida, marquem quais produções já assistiram, e acessem informações detalhadas sobre cada obra, incluindo onde assisti-la, sinopse e avaliações críticas.

## Índice
- Recursos Principais
- Tecnologias Utilizadas
- Pré-requisitos
- Instalação
- Inicialização do Projeto
- Estrutura do Projeto
- Contribuição
- Licença
- Recursos Principais

## Recursos Principais

### Navegação Cronológica
- Exibe filmes, séries e desenhos animados em ordem cronológica.
### Cadastro e Perfil de Usuário
- Permite que usuários se cadastrem, salvem listas personalizadas, marquem produções como assistidas e avaliem.
### Informações Detalhadas
- Exibe sinopse, avaliação crítica e detalhes de cada produção, além de informar onde assistir.
### Interação Social
- Compartilhamento de listas e avaliações nas redes sociais.

## Tecnologias Utilizadas
### Frontend
- React
- Next.js 
<!-- - Bootstrap -->
### Backend
- Node.js 
- Express.js
### Banco de Dados
- MongoDB
### Autenticação 
- JWT (JSON Web Tokens)
### Pré-requisitos
- Node.js (>= 12.x)
- npm (>= 6.x) ou yarn (>= 1.x)
- MongoDB

## Instalação

#### Clone o Repositório
~~~sh
git clone https://github.com/seu-usuario/sagaemordem.git 
cd sagaemordem
~~~

#### Instale as dependências do backend e frontend

~~~sh
cd backend
npm install
cd ../frontend
npm install
~~~
## Inicialização do Projeto

### Backend

#### Crie um arquivo .env na pasta backend e adicione suas configurações de ambiente:
~~~javascript
PORT=5000
MONGO_URI=seu_mongo_uri
JWT_SECRET=sua_chave_secreta
~~~

#### Inicialize o servidor backend:
~~~~sh
npm run dev
~~~~

### Frontend

#### Crie um arquivo .env.local na pasta frontend e adicione suas configurações de ambiente:

~~~~arduino
NEXT_PUBLIC_API_URL=http://localhost:5000
~~~~

#### Inicialize o servidor frontend:

```sh
npm run dev
```

#### Abra o navegador e acesse:

~~~~arduino
http://localhost:3000
~~~~

## Estrutura do Projeto
~~~~plaintext 
sagaemordem/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── components/
    ├── pages/
    ├── public/
    ├── styles/
    ├── .env.local
    ├── next.config.js
    └── package.json
~~~~

#### Descrição dos Diretórios
- backend/config: Configurações do aplicativo e banco de dados.
- backend/controllers: Lógica dos controladores.
- backend/models: Definições de modelos de dados.
- backend/routes: Definições de rotas da API.
- backend/utils: Utilitários e funções auxiliares.
- frontend/components: Componentes React reutilizáveis.
- frontend/pages: Páginas do Next.js.
- frontend/public: Arquivos públicos (imagens, ícones, etc.).
- frontend/styles: Estilos globais e específicos dos componentes.

