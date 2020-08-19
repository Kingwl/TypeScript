/// <reference path='fourslash.ts' />

// @pedanticOverride: true
//// class E extends (class {
////     foo () {}
////     bar () {}
//// }) {
////     override foo () { }
////     baz() {}
////     [|override bazz () {}|]
//// }


verify.codeFix({
    description: "Remove 'override' modifier",
    newRangeContent: "bazz () {}",
    index: 0
})

