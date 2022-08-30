class LocalCache {
  setItem(key, value) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    let value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeItem(key) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

export default new LocalCache()