import ExcelComponent from '@/core/ExcelComponent';

export class Formula  extends ExcelComponent {
    static className = 'excel__formula'

    toHtml() {
        return `
        <div class="formula_info">fx</div>
            <!--content editable - позволяет изменять наполнение div; spellcheck - убирает проверку орфографии-->
            <div class="formula_input" contenteditable="true" spellcheck="false"></div>
        `
    }
}