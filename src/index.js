console.log('Hello')
// Импортируем функцию для создания хранилища из Redux
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';

// Определяем начальное состояние (число 0)
//const InitialState = 0;

// // Функция-редюсер, которая принимает текущее состояние и объект действия (action)
// const reducer = (state, action) => {
//     // Проверяем тип действия: если это 'INC' (increment - увеличение)
//     if (action.type === 'INC') {
//         return state + 1; // Увеличиваем состояние на 1 и возвращаем новое состояние
//     }
//     return 0; // Если тип действия не 'INC', возвращаем 0 (сбрасываем состояние)
// }

// const reducer = (state = 0, action) => {
//     // Проверяем тип действия: если это 'INC' (increment - увеличение)
//     switch (action.type) {
//         case 'INC':
//             return state + 1; // Увеличиваем состояние на 1 и возвращаем новое состояние
//         default:
//             return state; // Если тип действия не 'INC', возвращаем 0 (сбрасываем состояние)
//     }
// }

// // Вызываем reducer с начальным состоянием и передаем действие {type: 'INC'}
// let state = reducer(undefined, {});
// console.log(state); // Выведет 0

// // Передаем в reducer новое состояние и снова действие {type: 'INC'}
// state = reducer(state, {type: 'INC'});
// console.log(state); // Выведет 1

// // Еще раз передаем обновленное состояние и действие {type: 'INC'}
// state = reducer(state, {type: 'INC'});
// console.log(state); // Выведет 2


console.log('Hello redux')


// Создаем хранилище с использованием `createStore` и передаем наш редюсер
const store = createStore(reducer);

// const {inc, dec, rnd, rndm} = bindActionCreators(action, dispatch);

// // Добавляем обработчик событий на кнопку с id="inc"
// document.getElementById('inc').addEventListener('click', inc); // Диспатчим (отправляем) действие увеличения

// // Добавляем обработчик событий на кнопку с id="dec"
// document.getElementById('dec').addEventListener('click', dec); // Диспатчим действие уменьшения

// // Добавляем обработчик событий на кнопку с id="rnd"
// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9
//     rnd(value) // Диспатчим действие с этим числом
// });

// // Добавляем обработчик событий на кнопку с id="rnd"
// document.getElementById('rndm').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9
//     rndm(value) // Диспатчим действие с этим числом
// });

// Функция обновления интерфейса (обновляет текстовое содержимое счетчика)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>)

// const update = () => {
//     root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )};

// update();

// // Подписываемся на изменения в store и вызываем `update` при каждом изменении состояния
// store.subscribe(update);

// Вторая подписка — просто логируем текущее состояние в консоль при каждом изменении
 store.subscribe(() => {
     console.log(store.getState());
 });

 // Диспатчим несколько действий увеличения состояния
 store.dispatch({ type: 'INC' }); // Счетчик увеличится на 1
 store.dispatch({ type: 'INC' }); // Счетчик увеличится еще на 1
 store.dispatch({ type: 'INC' }); // Счетчик увеличится еще на 1


