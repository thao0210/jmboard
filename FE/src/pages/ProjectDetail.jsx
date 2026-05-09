import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/mockData';
import { useCategory } from '../context/CategoryContext';
import CategorySidebar from '../components/CategorySidebar';
import styles from './ProjectDetail.module.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selected, setSelected } = useCategory();

  const project = projects.find((p) => p.id === id || p.slug === id);
  const related = project
    ? projects.filter((p) => p.id !== project.id).slice(0, 3)
    : [];

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <button onClick={() => navigate('/products')}>← Back to Products</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.detailLayout}>
          <CategorySidebar selected={selected} onSelect={setSelected} />

          <main className={styles.detailMain}>
            <div className={styles.contentCol}>
              {/* <div className={styles.meta}>
                <span className={styles.categoryBadge}>{project.type}</span>
                <span className={styles.date}>{project.year}</span>
              </div> */}
              <h1 className={styles.articleTitle}>{project.title}</h1>
              <div className={styles.imageWrap}>
                <img src={project.coverImage} alt={project.title} />
              </div>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </div>

            {related.length > 0 && (
              <div className={styles.related}>
                <p className={styles.relatedHeading}>More Projects</p>
                <div className={styles.relatedGrid}>
                  {related.map((item, index) => (
                    <article
                      key={item.id}
                      className={styles.relatedCard}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => navigate(`/projects/${item.id}`)}
                    >
                      <img src={item.coverImage} alt={item.title} />
                      <div className={styles.relatedBody}>
                        <p className={styles.relatedCat}>{item.type}</p>
                        <p className={styles.relatedTitle}>{item.title}</p>
                        <p className={styles.relatedDate}>{item.location} · {item.year}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;