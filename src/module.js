console.log('Im module.js')

async function start() {
  return await Promise.resolve('working')
}

start().then((res) =>console.log(res))
