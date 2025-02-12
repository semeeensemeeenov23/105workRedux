// Функции-экшн-криэйторы (создают объекты действий)
export const inc = () => ({ type: 'INC' }); // Функция для увеличения состояния
export const dec = () => ({ type: 'DEC' }); // Функция для уменьшения состояния
export const rnd = (value) => {
    return { type: 'RND', value: Math.floor(Math.random() * 10) }
}; // Функция для добавления случайного числа
export const rndm = (value) => {
    return { type: 'RNDM', value: Math.floor(Math.random() * 10) }
}; // Функция для добавления случайного числа