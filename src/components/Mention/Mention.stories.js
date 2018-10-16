/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import Mention from './index'

storiesOf('02 - Typography', module).add('Mention', () => (
  <div>
    <Mention>
      Hello; not to Mention: Thx AmiShop !
    </Mention>
  </div>
))
