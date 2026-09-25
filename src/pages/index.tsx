import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Project = {
  name: string;
  label: string;
  description: string;
  to: string;
};

const projects: Project[] = [
  {
    name: 'FIRE自由',
    label: '项目文档',
    description: '项目介绍、使用方式、配置说明与相关技术记录。',
    to: '/docs/projects/fire-free',
  },
  {
    name: 'firstsaofan工具集',
    label: '项目文档',
    description: '工具集的项目说明、使用方式与维护记录。',
    to: '/docs/projects/firstsaofan-toolset',
  },
];

function ProjectCard({project}: {project: Project}): ReactNode {
  return (
    <Link className={styles.projectCard} to={project.to}>
      <div className={styles.cardTopline}>
        <span className={styles.projectLabel}>{project.label}</span>
        <span className={styles.cardArrow} aria-hidden="true">
          →
        </span>
      </div>
      <Heading as="h3" className={styles.projectName}>
        {project.name}
      </Heading>
      <p className={styles.projectDescription}>{project.description}</p>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="首页"
      description="桃源耕云客（firstsaofan）的多项目文档中心，汇总项目说明、使用指南与技术记录。">
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>桃源耕云客 · DOCUMENTATION</p>
          <Heading as="h1" className={styles.heroTitle}>
            项目文档，集中一处。
          </Heading>
          <p className={styles.heroDescription}>
            面向实际项目的统一文档入口。每一个项目都有独立空间，文档跟着代码一起维护、持续更新。
          </p>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <section className={styles.projectSection} id="projects">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>按项目浏览</p>
            <Heading as="h2">项目文档</Heading>
            <p>每个项目独立整理，保留清晰的阅读路径。</p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
