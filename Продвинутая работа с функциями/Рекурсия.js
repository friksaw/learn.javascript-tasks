/*
    Вывод односвязного списка
    важность: 5
    Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };
    Напишите функцию printList(list), которая выводит элементы списка по одному.

    Сделайте два варианта решения: используя цикл и через рекурсию.

    Как лучше: с рекурсией или без?
*/

printList = (list) => {
    console.log(list.value)

    list.next ? printList(list.next) : ''
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(printList(list))