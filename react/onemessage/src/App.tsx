import React from 'react';
import Form from './components/form';
import Header from './components/header';
import Text from './components/textblock';
import './App.css';

function App() {
  return (
    <div className="App">
     {Header()}
     {Form()}
     {Text()}
    </div>
  );
}

export default App;
