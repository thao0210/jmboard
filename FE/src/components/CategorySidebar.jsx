import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryTree } from '../data/mockData';
import styles from './CategorySidebar.module.scss';

const CategorySidebar = ({ selected, onSelect }) => {
  const navigate = useNavigate();

  const handleParentClick = (key) => {
    onSelect(key);
    navigate('/products');
  };

  const handleChildClick = (key) => {
    onSelect(key);
    navigate('/products');
  };

  const sidebarTree = categoryTree.map((item) =>
    item.key === 'Project' ? { ...item, isProject: true } : item
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarCard}>
        <p className={styles.sidebarTitle}>JAPANESE MAGNETIC BOARD</p>

        {sidebarTree.map((parent) => (
          <div key={parent.key} className={styles.categoryGroup}>
            <button
              className={`${styles.parentItem} ${selected === parent.key ? styles.active : ''}`}
              onClick={() => handleParentClick(parent.key)}
            >
              {parent.label}
            </button>

            <ul className={styles.childList}>
              {parent.children.map((child) => (
                <li key={child.key}>
                  <button
                    className={`${styles.childItem} ${selected === child.key ? styles.activeChild : ''}`}
                    onClick={() => handleChildClick(child.key)}
                  >
                    {child.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CategorySidebar;