import fs from '../utils/file-system.js'
import { compile, getFile, setFile } from './_templater.js'

const update = () => {
  const storyList = fs.dirFiles('story')
  const chapters = storyList.map(getFile).join('\n')
  const content = compile(chapters);

  setFile(content)
}

update()