import chalk from 'chalk'
import { prettyJSON } from './strings.js'
import { hasProp } from './objects.js'

const COLORS = {
  black: 'black',
  grey: 'grey',
  white: 'white',
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  blue: 'blue',
  purple: 'magenta',
  cyan: 'cyan',
  whiteBright: 'whiteBright',
  redBright: 'redBright',
  greenBright: 'greenBright',
  yellowBright: 'yellowBright',
  blueBright: 'blueBright',
  purpleBright: 'magentaBright',
  cyanBright: 'cyanBright',
}

const HIGHLIGHTS = {
  black: 'bgBlack',
  grey: 'bgGrey',
  white: 'bgWhite',
  red: 'bgRed',
  green: 'bgGreen',
  yellow: 'bgYellow',
  blue: 'bgBlue',
  purple: 'bgMagenta',
  cyan: 'bgCyan',
  whiteBright: 'bgWhiteBright',
  redBright: 'bgRedBright',
  greenBright: 'bgGreenBright',
  yellowBright: 'bgYellowBright',
  blueBright: 'bgBlueBright',
  purpleBright: 'bgMagentaBright',
  cyanBright: 'bgCyanBright',
}

const THEME = {
  info: COLORS.white,
  warn: COLORS.yellow,
  debug: COLORS.purpleBright,
  log: COLORS.grey,
  error: COLORS.redBright,
  success: COLORS.green,
  failure: COLORS.red
}

const write = (msg, color, noPrint) => {
  noPrint = noPrint !== undefined || noPrint !== null ? noPrint : false

  let printable

  if (msg instanceof Error) {
    printable = `${chalk[THEME.error](msg.message)}\n${chalk[THEME.error](msg.stack)}`
  } else if (msg instanceof Object) {
    printable = `${chalk[color](prettyJSON(msg))}`
  } else {
    printable = chalk[color](msg)
  }

  if (!noPrint) {
    console.log(printable)
  }

  return printable
}

const style = (msg, color, palette, noPrint) => {

  if (msg === undefined || msg === null) {
    console.log(chalk[THEME.error]('Message must be defined'))
    return
  }

  if (color === undefined || color === null) {
    console.log(chalk[THEME.error]('Color must be defined'))
    return
  }

  if (!hasProp(palette, color)) {
    console.log(chalk[THEME.error](`Color no supported, must be of these [${Object.keys(palette).join(', ')}]`))
    return
  }

  return write(msg, palette[color], noPrint)
}

export const clear = () => {
  process.stdout.write('\x1b[2J')
}

export const color = (msg, color, noPrint) => {
  return style(msg, color, COLORS, noPrint)
}

export const highlight = (msg, color, noPrint) => {
  return style(msg, color, HIGHLIGHTS, noPrint)
}

export const log = (msg, theme) => {
  theme = theme || 'log'

  if (msg === undefined || msg === null) {
    console.log(chalk[THEME.error]('Message must be defined'))
  }

  if (!hasProp(THEME, theme)) {
    console.log(chalk[THEME.error]('Theme not supported'))
  }

  write(msg, THEME[theme])
}

export default {
  clear,
  color,
  highlight,
  log
}