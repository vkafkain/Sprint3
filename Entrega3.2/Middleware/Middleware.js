
class Middleware {
    constructor(data){
        this.middlewares = [];   
    }
    use(fn){
        this.middlewares.push(fn);
        }
        
    
}

module.exports = Middleware;