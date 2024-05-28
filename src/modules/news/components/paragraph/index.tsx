import styles from '@sevn/styles/News.module.css';

interface ParagraphProps {
  content: string;
}

export const Paragraph = ({ content }: ParagraphProps) => {
  return (
    <p className={styles.paragraph}>{content}</p>
  )
}