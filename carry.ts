export default function carry(fn: Function) {
    const arity = fn.length;

    function curried(...args: any[]) {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return (...moreArgs: any) => curried(...args, ...moreArgs);
        }
    }

    return curried;
}