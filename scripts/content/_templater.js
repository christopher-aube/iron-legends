import { Remarkable } from 'remarkable'
import { log } from '../utils/console.js'
import fs from '../utils/file-system.js'
import { compile as genericCompiler } from '../utils/file-templater.js'
import { prettyJSON } from '../utils/strings.js'

const config = {
  html: true,
  breaks: true
}
const engine = new Remarkable(config)
const env = process.env.NODE_ENV || 'dev'

export const compile = (contents) => {
  
  try {
    return engine
      .render(contents)
      .replace(/(src="\.\.\/)(assets)/g, (match, attr, loc) => {
        return (env === 'prod') ? `src="./${loc}` : `${attr}./${loc}`;
      })
  } catch (err) {
    log(err)
    process.exit(1)
  }
}

export const getFile = (filename) => {

  try {
    return fs.getFile(`story/${filename}`)
  } catch (err) {
    log(err)
    process.exit(1)
  }
}

const replaceStyles = (str) => {
  const styles = []
  let styleItem = {}
  let props

  const contents = str.replace(/style="(?:(?:(?:\w(?:\w|-|\d)*):(?:\w|\d|-)*;)(?:\s*))*"/g, (style, offset) => {
    styleItem.name = `style${offset}`
    props = {}
    
    style.replace(/(\w(?:\w|-|\d)*):((?:\w|\d|-)*);/g, (prop, key, value) => {
      props[key] = value
    })

    styleItem.props = prettyJSON(props)
    styles.push(styleItem)
    return `style={${styleItem.name}}`
  })

  return {
    contents,
    styles,
  }
}

const replaceInvalidAttrs = (data) => {
  return data.replace(/(align="(\w(\w|-|\d)*)")/g, () => {
    return ''
  })
}

export const setFile = (file) => {

  try {
    const template = fs.getFile(`scripts/content/templates/story-content.hbs`)
    let { contents, styles } = replaceStyles(file)

    contents = replaceInvalidAttrs(contents)

    const data = {
      contents,
      styles
    }
    
    fs.setFile(`src/pages/story/content.tsx`, genericCompiler(template, data))
  } catch (err) {
    log(err)
    process.exit(1)
  }
}

export default {
  compile,
  getFile,
}
