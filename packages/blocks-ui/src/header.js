/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { Code, Layers, Grid } from 'react-feather'

// import pkg from '../package.json'

import { useEditor } from './providers/editor'
import { SegmentedControl } from './segmented-control'
import { IconButton } from './ui'

// const { version } = pkg

export const headerHeight = 60

const MODES = [
  {
    key: 'canvas',
    label: 'Canvas Mode',
    icon: Layers
  },
  {
    key: 'code',
    label: 'Code Mode',
    icon: Code
  }
  // {
  //   key: 'viewports',
  //   label: 'Viewports Mode',
  //   icon: Monitor
  // },
]

const ToggleXRay = () => {
  const editorState = useEditor()
  const isActive = Boolean(editorState.xray)
  return (
    <IconButton
      label="XRay mode"
      icon={Grid}
      isActive={isActive}
      onClick={() => editorState.update({ ...editorState, xray: !isActive })}
      disabled={editorState.mode === MODES[1].key}
    />
  )
}

const Modes = () => {
  const editorState = useEditor()
  const [activeModeIndex, setActiveModeIndex] = useState(0)

  return (
    <SegmentedControl
      options={MODES}
      activeIndex={activeModeIndex}
      onChange={(option, index) => {
        editorState.update({ ...editorState, mode: option.key })
        setActiveModeIndex(index)
      }}
    />
  )
}

const Header = () => (
  <header
    sx={{
      height: headerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 3,
      borderBottom: '1px solid',
      borderColor: 'border'
    }}
  >
    <Logo />
    <div
      sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        gridGap: 3
      }}
    >
      <ToggleXRay />
      <Modes />
    </div>
  </header>
)

export default Header

const Logo = () => (
  <a
    href="/"
    sx={{
      display: 'grid',
      gridAutoFlow: 'column',
      alignItems: 'center',
      gridGap: 2,
      textDecoration: 'none',
      color: 'inherit',
      ml: '-4px'
    }}
  >
    <div
      sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        alignItems: 'baseline',
        gridGap: 2
      }}
    >
      Theme Editor
    </div>
  </a>
)
