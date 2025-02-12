console.log('Hello')
// Импортируем функцию для создания хранилища из Redux
import { legacy_createStore as createStore } from 'redux';


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

const reducer = (state = 0, action) => {
    // Проверяем тип действия: если это 'INC' (increment - увеличение)
    switch (action.type) {
        case 'INC':
            return state + 1; // Увеличиваем состояние на 1 и возвращаем новое состояние
        default:
            return state; // Если тип действия не 'INC', возвращаем 0 (сбрасываем состояние)
    }
}

// Вызываем reducer с начальным состоянием и передаем действие {type: 'INC'}
let state = reducer(undefined, {});
console.log(state); // Выведет 0

// Передаем в reducer новое состояние и снова действие {type: 'INC'}
state = reducer(state, {type: 'INC'});
console.log(state); // Выведет 1

// Еще раз передаем обновленное состояние и действие {type: 'INC'}
state = reducer(state, {type: 'INC'});
console.log(state); // Выведет 2





console.log('Hello redux')






// Определяем редюсер (функцию, которая обновляет состояние в зависимости от типа действия)
const reducer2 = (state = 0, action) => {
    // Используем конструкцию switch для обработки различных типов действий
    switch (action.type) {
        case 'INC': // Если тип действия 'INC' (increment - увеличение)
            return state + 1; // Увеличиваем состояние на 1 и возвращаем новое состояние
        case 'DEC': // Если тип действия 'DEC' (decrement - уменьшение)
            return state - 1; // Уменьшаем состояние на 1 и возвращаем новое состояние
        case 'RND': // Если тип действия 'RND' (random - случайное значение)
            return state + action.value; // Прибавляем к состоянию случайное число из action.value
        case 'RNDM': // Если тип действия 'RND' (random - случайное значение)
            return state - action.value; // Убавляем к состоянию случайное число из action.value
        default: // Если передан неизвестный тип действия
            return state; // Оставляем состояние без изменений
    }
};

// Функции-экшн-криэйторы (создают объекты действий)
const inc = () => ({ type: 'INC' }); // Функция для увеличения состояния
const dec = () => ({ type: 'DEC' }); // Функция для уменьшения состояния
const rnd = (value) => ({ type: 'RND', value }); // Функция для добавления случайного числа
const rndm = (value) => ({ type: 'RNDM', value }); // Функция для добавления случайного числа

// Создаем хранилище с использованием `createStore` и передаем наш редюсер
const store = createStore(reducer2);

// Добавляем обработчик событий на кнопку с id="inc"
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc()); // Диспатчим (отправляем) действие увеличения
});

// Добавляем обработчик событий на кнопку с id="dec"
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec()); // Диспатчим действие уменьшения
});

// Добавляем обработчик событий на кнопку с id="rnd"
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9
    store.dispatch(rnd(value)); // Диспатчим действие с этим числом
});

// Добавляем обработчик событий на кнопку с id="rnd"
document.getElementById('rndm').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9
    store.dispatch(rndm(value)); // Диспатчим действие с этим числом
});

// Функция обновления интерфейса (обновляет текстовое содержимое счетчика)
const update = () => {
    document.getElementById('counter').textContent = store.getState(); // Отображает текущее состояние в элементе с id="counter"
};

// Подписываемся на изменения в store и вызываем `update` при каждом изменении состояния
store.subscribe(update);

// Вторая подписка — просто логируем текущее состояние в консоль при каждом изменении
store.subscribe(() => {
    console.log(store.getState());
});

// Диспатчим несколько действий увеличения состояния
store.dispatch({ type: 'INC' }); // Счетчик увеличится на 1
store.dispatch({ type: 'INC' }); // Счетчик увеличится еще на 1
store.dispatch({ type: 'INC' }); // Счетчик увеличится еще на 1
