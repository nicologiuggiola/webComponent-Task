class SuperLi extends HTMLLIElement {

    constructor() {
        super()
    }


    attributeChangedCallback(){
        this.getAttributes();
        this.initTag()
    }


    static get observedAttributes() { return ['task-li']; }

    
    getAttributes(){
        if (this.getAttribute('task-li')) {
           this.el = JSON.parse(this.getAttribute('task-li'))
        }
    }


    initTag(){
        const elArrey = Object.keys(this.el);
        for (const key of elArrey) {
            const p = document.createElement("p")
            const node = document.createTextNode(this.el[key])
            p.appendChild(node)
            this.appendChild(p) 
        }
    }
} 

customElements.define('super-li', SuperLi, {extends: 'li'});