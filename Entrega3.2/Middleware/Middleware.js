
class Middleware {
    constructor(){
        this.middlewares = [];   
    }
    use(fn){
        this.middlewares.push(fn);
    };
    executeMiddleware(data, done) {
        this.middlewares.reduceRight((done, next) => () => next(data, done), done)
            (data);
    }
    run(fun) {
        this.use(fun)
        this[fun] = args => {
            this.data = args
            console.log(args);
            this.executeMiddleware(data, done => fun(args));
        }
    }
}
module.exports = Middleware;


