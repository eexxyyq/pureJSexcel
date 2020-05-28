//утильный класс
class Dom {

}
//функция возвращает инстанс класса
export function $() {
    return new Dom();
}

// функция возвращает новый эдемент и, если классы переданы в функцию,
// добавляет их в classList элемента
$.create = (tagName, classes = '') => {
    const $el = document.createElement(tagName)
    if (classes) {
        $el.classList.add(classes)
    }
    return $el
}