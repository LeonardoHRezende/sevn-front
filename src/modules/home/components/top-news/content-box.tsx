import React, { memo } from 'react';
import Image from 'next/image';
import { NewsHighLightContent } from '@sevn/shared/interface';
import styles from '@sevn/styles/Home.module.css';

export interface ContentBoxProps {
  content: NewsHighLightContent;
}

export const ContentBox = memo<ContentBoxProps>(function HighLightContent({
  content,
}) {
  return (
    <div className={styles.contentBox}>
      <div className={styles.topNewsImageBox}>
        <Image 
          className={styles.coverImage} 
          src={content.coverImage} 
          alt='imagem de capa' 
          width={280} 
          height={190} 
        />
      </div>
      <p
        className={styles.contentTheme}
        style={{ color: content.themeColor}}>
        {content.theme}
      </p>
      <h2 className={styles.title}>{content.contentHighlight}</h2>
    </div>
  );
});
