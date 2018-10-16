/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import Message from './index'

storiesOf('03 - Components', module)
.addWithChapters('Messages', {
  subtitle: 'Message error',
  chapters: [
    {
      sections: [
      {
        title: 'Select Input',
        sectionFn: () => (
          <Message theme="error">
            Hi AmiShop here; this is an error Message. Lieber Amicorum..
          </Message>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      },{
        title: 'Select Input',
        sectionFn: () => (
          <Message theme="info">
            Hi AmiShop here; this is an informational Message. Lieber Amicorum..
          </Message>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      },{
        title: 'Select Input',
        sectionFn: () => (
          <Message withIcon={false} >
            Hi AmiShop here; this is a Message without icon. Lieber Amicorum..
          </Message>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      }
    ]
  }]
});
