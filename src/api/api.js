/**
 * Mocking api processing
 */
import _items from './items.json'

const TIMEOUT = 100

export default {

  getItems: (cb, timeout = TIMEOUT) => {
    console.error(_items)
    console.error(cb)
      setTimeout(() => cb(_items), timeout || TIMEOUT)
  }
}
