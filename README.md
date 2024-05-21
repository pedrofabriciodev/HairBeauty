# HairBeauty App

Este projeto é um trabalho da faculdade desenvolvido em React Native utilizando Expo. O objetivo do aplicativo é fornecer uma interface intuitiva para selecionar serviços de beleza.

## Tecnologias Utilizadas

- React Native
- Expo
- React Navigation
- React Native Elements
- React Native Vector Icons

## Funcionalidades

- Seleção de serviços de beleza
- Interface amigável e intuitiva
- Navegação utilizando Drawer Navigator

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Como baixar e rodar a aplicação

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/pedrofabriciodev/HairBeauty.git
```

### Passo 2: Navegar ate o diretorio do projeto

```bash
cd HAIRBEAUTY
```
### Passo 3: Instalar as dependencias

```bash
npm install
```
ou
```bash
yarn install
```

### Passo 4: Rodar a aplicação
Para rodar o aplicativo no emulador ou dispositivo físico, utilize o comando:
```bash
npx expo start
```
Isso abrirá a interface do Expo no seu navegador.  
Você pode escanear o QR code usando o aplicativo Expo Go no seu dispositivo móvel ou rodar o app no emulador.  
Lembre-se de ter instalado o Expo no seu [SmartPhone Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou utilize a camera no seu Iphone.

### Passo 5: Configuração Adicional
Se você estiver encontrando problemas para rodar a aplicação, certifique-se de que as seguintes dependências estão corretamente instaladas:

```bash
npm install @react-navigation/native @react-navigation/drawer
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-native-elements
npm install react-native-vector-icons
```

### ESTRUTURA DO PROJETO

├── assets              # Arquivos de imagem, ícones, etc.  
├── components          # Componentes reutilizáveis do React Native  
├── navigation          # Configuração de navegação  
├── screens             # Telas do aplicativo  
├── App.js              # Componente principal da aplicação  
├── app.json            # Configurações do Expo  
├── package.json        # Dependências e scripts do npm  
└── README.md           # Documentação do projeto  

### Contato
Se você tiver algum problema ou sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Desenvolvido por [Pedro Fabricio]
