//утильный класс для работы с DOM деревом
class Dom {
    //конструктор класса проверяет что пришло к нему
    // если элемент - возврат элемента
    // если id элемента - поиск элемента и его возврат
    constructor (selector) {
        this.$nativeElement = typeof selector === 'string' ?
            document.querySelector(selector) : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$nativeElement.innerHTML = html
            return this
        }
        return this.$nativeElement.outerHTML.trim()
    }

    clear() {
        this.$nativeElement.innerHTML = ''
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$nativeElement
        }
        if (Element.prototype.append) {
            this.$nativeElement.append(node)
        } else {
            this.$nativeElement.appendChild(node)
        }
        return this
    }
}
//функция возвращает инстанс класса
export function $(selector) {
    return new Dom(selector);
}

// функция возвращает новый эдемент и, если классы переданы в функцию,
// добавляет их в classList элемента
$.create = (tagName, classes = '') => {
    const $el = document.createElement(tagName)
    if (classes) {
        $el.classList.add(classes)
    }
    return $($el)
}