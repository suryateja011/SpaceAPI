import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Body from "./Components/Body/_InfoCointainer"

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The purpose of the Space API is to define a unified specification across the hackerspaces that can be used to expose information to web apps or any other application.
      </>
    ),
  },
  {
    title: 'Planet API',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Planet Labs provides imagery of the Earth. The <code>Planet API</code> integrates Earth satellite images and data in near real-time. Imagery options include scenes and mosaics.
      </>
    ),
  },
  {
    title: 'Aliens',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
The only thing that scares me more than space <code>aliens</code> is the idea that there aren't any space aliens. We can't be the best that creation has to offer. I pray we're not all there is. If so, we're in big trouble.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <span className={styles.githubStarButtonWrapper}>
            <iframe
              className={styles.githubStarButton}
              src="https://ghbtns.com/github-btn.html?user=suryateja011&amp;repo=SpaceAPI&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
          </div>
        </div>
      </header>
      <Body />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
