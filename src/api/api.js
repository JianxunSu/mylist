/**
 * Mocking api processing
 */
import _items from './items.json'

const TIMEOUT = 100

export default {
  getItems: (cb, timeout) => setTimeout(() => cb(_items), timeout || TIMEOUT),
}
