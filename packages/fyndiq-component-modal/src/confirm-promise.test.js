import confirm from './confirm-promise'

jest.mock('./confirm-wrapper', () => ({
  setConfirm: (modal, callback) => callback(true),
}))

describe('Confirm promise utility function', () => {
  it('should return a promise', async () => {
    const result = await confirm('test')
    expect(result).toBe(true)
  })
})
