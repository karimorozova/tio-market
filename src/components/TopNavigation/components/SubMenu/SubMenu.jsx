import styles from './SubMenu.module.scss';

import { subMenuData } from '../../constants';

const SubMenu = ({ activeItem }) => {
  const currentData = subMenuData[activeItem];
  const { subListMenu, subListMenuPosts } = currentData;

  return (
    <div className={styles.subMenu}>
      <div className={styles.container}>
        <ul className={styles.leftList}>
          {subListMenu.map(nameLi => (
            <li key={nameLi} className={styles.leftItem}>
              {nameLi}
            </li>
          ))}
        </ul>

        <div className={styles.rightBlock}>
          <h3 className={styles.title}>MARKET NEWS HEADLINES</h3>

          <ul className={styles.listPost}>
            {subListMenuPosts.map(({ id, title, text, imgSrc }) => (
              <li key={id} className={styles.itemPost}>
                {imgSrc && (
                  <img
                    className={styles.picture}
                    src={imgSrc}
                    alt=""
                    width="202"
                    height="114"
                  />
                )}
                <h4 className={styles.titlePost}>{title}</h4>
                <p className={styles.textPost}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
