import { GetServerSideProps } from 'next';

import Container from '@sevn/components/container';
import { DataApiGateway } from '@sevn/utils/axios';
import { NewsProps } from '@sevn/shared/interface';
import styles from '@sevn/styles/News.module.css';
import { formatDate } from '@sevn/utils/formatDate';
import { Paragraph } from '@sevn/modules/news/components/paragraph';
import { AdSenseContainer } from '@sevn/components/adsense-container';

interface NewsPageProps {
  news: NewsProps;
}

const News: React.FC<NewsPageProps> = ({ news }) => {
  return (
    <Container>
      <div className={styles.newsContent}>
        <h1 className={styles.title}>{news.title}</h1>
        <p className={styles.resume}>{news.resume}</p>

        <AdSenseContainer />

        <p className={styles.publicationDate}>
          {`${formatDate(news.updatedAt)}, Por: ${news.author}`}
        </p>

        <div className={styles.contentBox}>
          {
            news.content.map((paragraph, index) => (
              <Paragraph key={index} content={paragraph.content} />
            ))
          }
        </div>
      </div>

    </Container>
  );
};

export default News;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;

  try {
    const { data } = await DataApiGateway.get(`/unique/${slug}`);

    return {
      props: {
        news: data,
      },
    };
  } catch (error) {
    console.error('Error fetching unique content:', error);
    return {
      notFound: true,
    };
  }
};