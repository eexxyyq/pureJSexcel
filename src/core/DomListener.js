export default class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('No $root provided to DomListener')
        }
        this.$root = $root
    }
}
