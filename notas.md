
## Comandos

```
npm instal @types/typecript
npm install ts-node -D
npm install typescript -D
npx tsc --init //para criar o arquivo de configurações do typescript
npx ts-node src/server.ts

npm install ts-node-dev -D

npx ts-node-dev src/server.ts
npx ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts

npm run dev

npx create-react-app web --template=typescript

npm start 

npx knex --knexfile knexfile.ts migrate:latest
npx knex --knexfile knexfile.ts seed:run


npm install react-icons
npm install react-router-dom
npm install @types/react-router-dom


npm install leaflet react-leaflet

npm install axios

// validação de dados
npm install @types/hapi__joi -D

```


```
// Mobile

npm install expo-cli

expo init nome_do_projeto



expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

// navagação entre rotas
npm install @react-navigation/native

// no site da documentação
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view


npm install @react-navigation/stack

expo install react-native-maps
expo install expo-constants
expo install react-native-svg
expo install expo-location
expo install expo-mail-composer

desafio:
listar cidades e estados com

react-native-picker-select
```

## Observações

`index.tsx` é o primeiro arquivo carregado pelo reactjs

É recomendado sempre import o `React` nos arquivos
  ```js
    import React from 'react';
  ```


`useState` retorna um array com o `valor` da variável, e a `função` para alterá-la, porque não poderemos alterar esse valor diretamente. Esse é o conceito de  `IMUTABILIDADE` dos estados.


Sempre que criar um estado para um array ou objeto, é necessário informar manualmente o tipo da variável


`typescript react cheat sheet`