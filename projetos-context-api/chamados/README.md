# Projetos-React
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/nandowl/Projetos-React/blob/main/LICENSE)

# Objetivo

Desenvolver uma aplicação de controle de chamados próxima ao que acontece no dia a dia.
Com cadastro de empresa, visualização e edição de chamados. 
Essa aplicação possui responsividade mobile e tem integração com backend da google (Firebase)
permitindo que seja criado um usuário simples para acesso ao sistema (Sem validação de email e exigindo apenas 6 digitos ou mais na senha).

Ao logar no sistema o usuário tem acesso a todos os chamados cadastrados por ordem cronológica do mais recente ou mais antigo,
poderá visualizar, editar ou registrar um novo chamado. Caso a empresa não esteja cadastrada é possível fazer o cadastro de novas empresas.
Através das configurações é possível alterar o nome do usuário logado e a imagem de avatar.

Pra que o sistema rode adequadamente foram integrados o Authentication do firebase e trabalhamos com o relacionamento do firestore e do storage
para poder armazenar adequadamente as imagens de avatar.

Foi removido o arquivo de configuração do firebase por questões de segurança, uma vez que não foi usado um auth_secret no projeto original.


# Tecnologias

Para desenvolver o projeto foram utilizados:
- JavaScript
- React
- Firebase (Authentication por email e senha; Firestore para os dados; Storage para a imagem)
- Login e rotas privadas
- React-Router-Dom
- React Icons
- React Toastify
- Modal
- 
# Layout

![Optional_Text](../../assets/chamado1.JPG)
![Optional_Text](../../assets/chamado2.JPG)
![Optional_Text](../../assets/chamado3.JPG)
![Optional_Text](../../assets/chamado4.JPG)
![Optional_Text](../../assets/chamado5.JPG)
![Optional_Text](../../assets/chamado6.JPG)

# Clone

Caso queira verificar o aplicativo rodando em sua máquina, <br />
basta clonar o repositório e através do terminal acessar a pasta clonada. <br />
Como não faz sentido subir a pasta node_modules pro git, você irá perceber que a mesma está faltando. <br />
Para resolver, muito simples, basta executar o comando "npm i -E" que todas as dependências necessárias <br />
serão lidas no package.json e baixadas em sua máquina. Depois basta executar o projeto normalmente.

# Créditos

Os códigos são de autoria do professor Matheus Fraga (https://github.com/devfraga) <br />
E foram reproduzidos por Fernando Piattelli no decorrer do curso.

<br />
<br />

-------------------------------------------------------------------------------------------------------------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
