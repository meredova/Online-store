class Router {
    routes = []
    constructor() {
        this.listen()
    }

    add = (path, cb) => {
        this.routes.push( {path, cb} )
        return this;
    }

    listen = () => {
        clearInterval(this.interval)
        this.interval = setInterval(this.interval, 50)
    }

    getFragment = () => {
        let fragment = ''
        let match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : '';
        return fragment;
    }

    interval = () => {
        if (this.current === this.getFragment()) return;
        this.current = this.getFragment()
        this.routes.some(route => {
            const match = this.current.match(route.path)
            if(match) {
                let productId = match[1] ? match[1] : ' '
                if (productId) {
                    route.cb(productId)
                }
            }  else {
                route.cb()
            }
        })
        return false
    }
}

export default Router