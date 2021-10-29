class Example {
  constructor(el) {
    this.el = el;
    this.el.innerHTML = "<h1>Im Alive</h1";

    this.handleClick = this.handleClick.bind(this)
    this.el.addEventListener("click", this.handleClick)
  }

  handleClick() {
    this.el.children[0].innerText = "Ouch!";
  }
}


export default Example;