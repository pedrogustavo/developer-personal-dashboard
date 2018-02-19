export const localStorage = {
  add: (item, data) => (
    window.localStorage.setItem(item, JSON.stringify(data))
  ),
  get: (item) => (
    JSON.parse(window.localStorage.getItem(item))
  ),
  remove: (item) => (
    window.localStorage.removeItem(item)
  ),
  clear: () => {
    window.localStorage.clear()
  }
}
