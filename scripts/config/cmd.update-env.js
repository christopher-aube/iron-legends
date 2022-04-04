import fs from '../utils/file-system.js'

const env = process.env.NODE_ENV || 'dev'

const update = () => {
  const pathname = 'src/components/app/index.tsx'
  const file = fs.getFile(pathname)
  const basename = (env === 'prod') ? '/iron-legends' : '/'
  const contents = file.replace(/const basename = '(\/(?:\w|-)*)'/g, () => {
    return `const basename = '${basename}'`
  })

  fs.setFile(pathname, contents)
}

update();