// @declaration: true

class Foo {
    /**
     * @param {number} entity -
     * @param {string} attribute -
     */
    something(entity, attribute) { }
}

class Bar extends Foo {
    /**
     * @inheritdoc
     */
    something(entity, attribute) {
   }
}
