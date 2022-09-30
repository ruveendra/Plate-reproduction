import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import {
  Plate,
  createPlugins,
  createPlateUI,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
} from '@udecode/plate'
import {
  initialValueBasicElements,
  initialValueBasicMarks,
} from './config/initialValues'
import { editableProps } from './config/pluginOptions'

const id = 'Reproduction'

const initialValue = [...initialValueBasicElements, ...initialValueBasicMarks]

const plugins = createPlugins(
  [createBasicElementsPlugin(), createBasicMarksPlugin()],
  {
    components: createPlateUI(),
  }
)

const Editor = () => {
  return (
    <Plate
      id={id}
      plugins={plugins}
      editableProps={editableProps}
      initialValue={initialValue}
    />
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Editor />, rootElement)
