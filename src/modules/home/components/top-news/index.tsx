import React from 'react';
import { withLoading } from './loading';
import { ContentBox } from './content-box';
import { withMainContent } from './main-content';
import { TopNewsContentProps } from './interface';
import { compose } from '../compose';


export const TopNewsContent: React.FC<TopNewsContentProps> = compose(
  withLoading,
  withMainContent
)(ContentBox);
