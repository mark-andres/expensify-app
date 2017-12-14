import authReducer from '../../reducers/auth'

test('should set uid to state', () => {
    const uid = '1'
    const state = authReducer(undefined, { type: 'LOGIN', uid })
    expect(state).toEqual({
        uid
    })
})

test('should clear uid from state', () => {
    const state = authReducer(undefined, { type: 'LOGOUT' })
    expect(state).toEqual({})
})