const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
     const queue = new Queue()
     expect(queue.size()).toBe(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.enqueue('item1')
    expect(queue.elements).toEqual(['item1'])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.enqueue('first')
    queue.enqueue('second')
    expect(queue.peek()).toBe('first')
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.enqueue('first')
    queue.enqueue('second')
    const removed = queue.dequeue()
    expect(removed).toBe('first')              
    expect(queue.elements).toEqual(['second'])
  })
})