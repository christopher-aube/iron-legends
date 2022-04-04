import engine from 'handlebars'
import { log } from './console.js'

engine.registerHelper('raw', options => {
  return options.fn()
})

export const compile = (contents, data) => {

  try {
    return engine.compile(contents)(data);
  } catch (err) {
    log(err)
    process.exit(1)
  }
}

export default {
  compile
}