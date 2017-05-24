export const loadstate = () => {
  try {
    const serializedState = localStorage.getItem('count')
    if (serializedState === null) {
      return 0
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return 0
  }
}

export const saveState = (count) => {
  try {
    const serializedState = JSON.stringify(count)
    localStorage.setItem('count', serializedState)
  } catch (err) {
// any text
  }
}
