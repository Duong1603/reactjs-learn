import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import States from './States';
// import Vidu4 from './Vidu4';
// import Card from './Card';
// import Form from './Form';
// import Formvd2 from './Formvd2';
// import Formvd3 from './Form/Formvd3';
// import FormScore from './Form/FormScore';
// import FormMenu from './Form/FormMenu/FormMenu';
import CRUD from './CRUD/CRUD';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Vidu3 /> */}
    {/* <States /> */}
    {/* <Vidu4 /> */}
    {/* <Card/> */}
    {/* <Form /> */}
    {/* <Formvd2 /> */}
    {/* <Formvd3 /> */}
    {/* <FormScore /> */}
    {/* <FormMenu /> */}
    <CRUD />
  </React.StrictMode>
);

reportWebVitals();
