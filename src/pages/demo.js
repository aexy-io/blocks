import React, { Fragment } from 'react'
import Editor from 'blocks-ui'
import * as Blocks from '@blocks/react'

import SEO from '../components/seo'

const JSX = `
import React from 'react'
import { Blocks, HeaderBasic, Pricing } from '@blocks/react'


export default () => (
  <Blocks.Root>
  <Pricing>
      <Pricing.Pay></Pricing.Pay>
      <Pricing.Enterprise title="about" description="sdsds">About</Pricing.Enterprise>
  </Pricing>

  </Blocks.Root>
)
`

const Layout = (props) => {
  return <div className="layout">{props.children}</div>
}

const Demo = () => (
  <Fragment>
    <SEO title="Demo" />
    <Editor src={JSX} blocks={Blocks} layout={Layout} />
  </Fragment>
)

export default Demo
