
export const loadState = (componentKey) => {
  try {
    const serializedState = localStorage.getItem(componentKey)
    if (serializedState === null) {
      return 0
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return 0
  }
}
export const saveState = (componentKey, value) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(componentKey, serializedState)
  } catch (err) {
// any text
  }
}
