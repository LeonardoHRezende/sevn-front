import React from 'react';
import { ContentBox } from './content-box';
import { withMainContent } from './main-content';
import { TopNewsContentProps } from './interface';
import { compose } from '../compose';


export const TopNewsContent: React.FC<TopNewsContentProps> = compose(
  withMainContent
)(ContentBox);
