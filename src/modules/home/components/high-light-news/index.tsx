import React, { memo } from 'react';
import { NewsHighLightContent } from '@sevn/shared/interface';
import styles from '@sevn/styles/Home.module.css';
import Link from 'next/link';

export interface HighLightProps {
  content: NewsHighLightContent;
}

export const HighLightContent = memo<HighLightProps>(function HighLightContent({
  content,
}) {
  return (
    <div className={styles.highLightBox}>
      <div className={styles.borderDivider} style={{ backgroundColor: content.themeColor }} />
      <Link href={`/news/${content.slug}`}>
        <p className={styles.highLightContent}>{content.contentHighlight}</p>
      </Link>
    </div>
  );
});
