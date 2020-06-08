// PROTOTYPE


// const person = {
//     name:'Maxim',
//     age:25,
//     greet: function(){
//         console.log ('Greet!')
//     }

// }

const person = new Object ({
    name:'Maxim',
    age:25,
    greet: function(){
        console.log ('Greet!')
    }

})

// const a = person.age;
// console.log(a); 

// Дополняем условный класс на дж ес новой функцией
Object.prototype.sayHellow = function() {
    console.log('Hellow!')
}

// Наследуем от персоны к лене все его свойства
const lena = Object.create(person)

lena.name = 'Elena'

// const str = 'I am string'
const str = new String ('I am string')
// Вызовы этот стр в консоле браузера и посмотри методы 
// которыми ты часто пользуешся 