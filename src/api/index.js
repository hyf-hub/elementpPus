import service from '@/request'
export function login({ userName, password }) {
  return service.post('/jwtLogin', {
    userName,
    password
  })
}
export function getMessage() {
  return service.get('/jwtGetMessage')
}