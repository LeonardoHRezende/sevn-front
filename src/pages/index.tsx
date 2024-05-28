import { GetServerSideProps } from 'next';

import Container from '@sevn/components/container';
import { TopNewsContent } from '@sevn/modules/home/components/top-news';
import { NewsHighLightContent } from '@sevn/shared/interface';
import styles from '@sevn/styles/Home.module.css';
import { DataApiGateway } from '@sevn/utils/axios';
import { HighLightContent } from '@sevn/modules/home/components/high-light-news';
import { AdSenseContainer } from '@sevn/components/adsense-container';
import NavBar from '@sevn/components/navbar';

interface HomeProps {
  topContent: NewsHighLightContent[];
  highLightContent: NewsHighLightContent[];
}

const Home: React.FC<HomeProps> = ({ topContent, highLightContent }) => {
  return (
    < >
      <NavBar />
      <Container>
        <div className={styles.homeContent}>
          <AdSenseContainer />

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

          <div className={styles.highLightGridContainer}>
            {
              highLightContent?.map((content, index) => (
                <div
                  key={`content-${index}`}
                  className={styles.highLightGridItem}>
                  <HighLightContent
                    content={content}
                  />
                </div>
              ))
            }
          </div>
        </div>

      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [topContent, highLightContent] = await Promise.all([
      DataApiGateway.get('/top'),
      DataApiGateway.get('/highlights?page=1'),
    ]);

    return {
      props: {
        topContent: topContent.data,
        highLightContent: highLightContent.data,
      },
    };
  } catch (error) {
    console.error('Error fetching content:', error);

    return {
      props: {
        topContent: [],
        highLightContent: []
      }
    };
  }
};