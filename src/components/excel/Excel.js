import {$} from "@/core/Dom";

export default class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        //создаем новый элемент в document через функции утильного класса
        // добавляем в список классов root элемента новый класс
        // (этот класс в проекте является классом корневого элемента)
        const $root = $.create('div', 'excel')
        //итерируемся по всем переданным в конструктор класса компонентам
        this.components.forEach(Component => {
            //создаем контейнер для каждого компонента
            //добавляем в список классов root элемента новый класс
            // (имя класса прописано для каждого компонента в его статическо пременной
            // а в верстке это имя класса для div элемента компонента)
            const $el = $.create('div', Component.className)
            //создаем инстанс для каждого компонента, передаем в него root элемент для этого компонента,
            // который прокидывается выше до конструктора DomListener`a
            const component = new Component($el)
            // в полученный контейнер передаем разметку компонента
            $el.innerHTML = component.toHtml()
            //добавляем в основной root элемент страницы все компоненты и их разметку
            $root.append($el)
        })
        // возвращаем основной компонент-контейнер
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}