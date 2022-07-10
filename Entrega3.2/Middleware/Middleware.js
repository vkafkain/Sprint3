
class Middleware {
    constructor(data){
        this.middlewares = [];   
    }
    use(fn){
        this.middlewares.push(fn);
        }
    executeMiddlewares(data, done){ 
        this.middlewares.reduceRight((done, next) => () => next(data, done), done)(data);
    }
    run(data){
        this.executeMiddlewares(data, done => console.log(data));
    }
}

module.exports = Middleware;