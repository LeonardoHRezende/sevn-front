import { GetServerSideProps } from 'next';

import Container from '@sevn/components/container';
import { TopNewsContent } from '@sevn/modules/home/components/top-news';
import { NewsHighLightContent } from '@sevn/shared/interface';
import styles from '@sevn/styles/Home.module.css';
import { DataApiGateway } from '@sevn/utils/axios';

interface HomeProps {
  topContent: NewsHighLightContent[];
  highLightContent: NewsHighLightContent[];
}

const Home: React.FC<HomeProps> = ({ topContent, highLightContent }) => {
  return (
    <Container>

      <div className={styles.gridContainer}>
        {
          topContent?.map((content, index) => (
            <div
              key={`content-${index}`}
              className={styles.gridItem}>
              <TopNewsContent
                content={content}
                isMainContent={index === 0}
              />
            </div>
          ))
        }
      </div>

    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {

  const [topContent, highLightContent] = await Promise.all([
    await DataApiGateway.get('/top'),
    await DataApiGateway.get('/highlights?page=1'),
  ]);

  return {
    props: {
      topContent: topContent.data,
      highLightContent: highLightContent.data,
    },
  };
};
