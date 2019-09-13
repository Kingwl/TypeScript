//// [topLevelAwait1.ts]
async function t () {
    await 1
}

await 1


//// [topLevelAwait1.js]
async function t() {
    await 1;
}
await 1;
