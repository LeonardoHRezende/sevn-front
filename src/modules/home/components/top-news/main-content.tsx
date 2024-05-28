import React from 'react';
import { NewsHighLightContent } from '@sevn/shared/interface';
import styles from '@sevn/styles/Home.module.css';

export interface MainContentProps {
  isMainContent: boolean;
  content: NewsHighLightContent;
}

export const withMainContent = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & MainContentProps) => {
    if (props.isMainContent) {
      return (
        <div className={styles.contentBox}>
          <p
            className={styles.contentTheme}
            style={{ color: props.content.themeColor }}>
            {props.content.theme}
          </p>
          <h1 className={styles.mainContentTitle}>{props.content.contentHighlight}</h1>
        </div>
      );
    }

    return <Component {...props} />;
  };
};
