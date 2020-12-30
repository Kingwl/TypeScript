/// <reference path="fourslash.ts" />

//// const a = b/*a*/ => 1

const markers = test.markers();
verify.getInlineHints([
    {
        text: ':number',
        position: markers[0].position,
        whitespaceBefore: true
    },
], undefined, {
    includeInlineFunctionLikeReturnTypeHints: true,
});
