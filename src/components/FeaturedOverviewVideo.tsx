import styles from './FeaturedOverviewVideo.module.css'

export default function FeaturedOverviewVideo() {
  return (
    <section className={styles.section} aria-labelledby="overview-video-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className="investor-eyebrow">KUROGAMI / OVERVIEW</p>
          <h2 id="overview-video-title">The system, in operation.</h2>
          <p>A concise introduction to Kurogami’s process infrastructure.</p>
        </div>
        <video
          className={styles.video}
          controls
          playsInline
          preload="metadata"
          aria-label="Kurogami overview video"
        >
          <source src="/images/overview.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    </section>
  )
}
