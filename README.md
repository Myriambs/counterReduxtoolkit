Pour expliquer Redux Toolkit à tes étudiants, tu peux leur présenter un exemple simple de compteur (counter) avec React et Redux Toolkit. Voici une approche pédagogique, accompagnée d'explications et de code.
1. Qu'est-ce que Redux Toolkit ?

Redux Toolkit est une bibliothèque qui simplifie l'utilisation de Redux dans les applications. Elle offre des outils pour :

    Créer des slices (petites parties de l'état de l'application)
    Gérer facilement les actions et le state
    Réduire le code boilerplate

2. Étapes pour créer un counter avec Redux Toolkit
2.1. Installation

Demande-leur d’installer les dépendances nécessaires dans leur projet React :

bash

npm install @reduxjs/toolkit react-redux

2.2. Configurer Redux avec un Slice

Un slice est une partie de l'état global qui contient un "reducer" (une fonction qui modifie l'état) et des actions.

Dans le dossier src, crée un fichier counterSlice.js :

js

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',   // Nom du slice
  initialState: { value: 0 },   // État initial
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

// Export des actions pour les utiliser dans le composant
export const { increment, decrement, reset } = counterSlice.actions;

// Export du reducer pour l'ajouter au store
export default counterSlice.reducer;

2.3. Créer le Store Redux

Ensuite, il faut créer un store Redux qui contient le state global de l'application.

Dans le fichier src/store.js :

js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Ajout du slice dans le store
  },
});

2.4. Fournir le store à l’application

Il faut ensuite connecter l’application au store. Ouvre le fichier src/index.js et utilise Provider de react-redux pour passer le store à toute l’application :

js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

2.5. Créer le composant Counter

Maintenant, crée un composant React qui interagit avec le store.

Dans le fichier src/Counter.js :

js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Sélectionne la valeur du compteur
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;

2.6. Utiliser le Composant Counter

Dans ton composant App.js, importe et affiche le composant Counter :

js

import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

3. Explications pour tes étudiants

    Redux Toolkit simplifie la gestion du state global de l’application en réduisant le code nécessaire à la création de reducers et d’actions.
    createSlice permet de définir l'état initial et les actions (comme increment, decrement, reset).
    useSelector permet de lire la valeur du state global dans un composant.
    useDispatch permet de déclencher une action pour mettre à jour l'état global.

4. Fonctionnement de l'exemple

    Quand l’utilisateur clique sur "Increment", le state counter.value est augmenté de 1.
    "Decrement" le diminue de 1.
    "Reset" remet la valeur à zéro.

Cet exemple simple permet à tes étudiants de comprendre les bases de Redux Toolkit avec React. Ils peuvent ensuite étendre cet exemple pour ajouter d’autres fonctionnalités comme la gestion asynchrone avec createAsyncThunk.
