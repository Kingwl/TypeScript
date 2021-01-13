/// <reference path="fourslash.ts" />

//// const a/*a*/ = "I'm very very very very very very very very very long";

const markers = test.markers();
verify.getInlineHints([
    {
        text: `:"I'm very very very very ve...`,
        rangeOrPosition: markers[0].position,
        whitespaceBefore: true
    },
], undefined, {
    includeInlineVariableTypeHints: true
});
