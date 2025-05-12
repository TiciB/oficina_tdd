class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  enqueue(item) {
    this.elements.push(item)
  }


  dequeue() {
    return this.elements.shift()
  }

  
  peek() {
    return this.elements[0]
  }

  
  size() {
    return this.elements.length
  }
}

module.exports = Queue