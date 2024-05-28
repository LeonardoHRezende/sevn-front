import styles from '@sevn/styles/Adsense.module.css';

export const AdSenseContainer = () => {
  return (
    <div className={styles.adSenseContainer}>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="YOUR_AD_CLIENT_ID"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto" />
      <p className={styles.adSenseExampleText}>
        Publicidade
      </p>
    </div>
  )
}