import { useState } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../../../Overlay/Overlay';
import SubMenu from '../SubMenu/SubMenu';
import styles from './Menu.module.scss';
import { subMenuData } from '../../constants';
import animMenu from './animMenu.module.scss';

const listItemMenu = Object.keys(subMenuData);

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const showMenu = text => {
    setIsOpenMenu(true);
    setActiveItem(text);
  };

  const hiddenMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={styles.menu}>
      <div onMouseLeave={hiddenMenu}>
        <ul className={styles.menuList}>
          {listItemMenu.map(text => (
            <li
              key={text}
              className={cn(styles.menuItem, {
                [styles.openMenu]: isOpenMenu && activeItem === text,
              })}
              onMouseEnter={() => showMenu(text)}
            >
              <span>{text}</span>
              <span
                className={cn(styles.menuArrow, {
                  [styles.openMenu]: isOpenMenu && activeItem === text,
                })}
              >
                &gt;
              </span>
            </li>
          ))}
        </ul>

        <CSSTransition
          in={isOpenMenu}
          timeout={200}
          classNames={animMenu}
          unmountOnExit
        >
          <Overlay>
            <SubMenu activeItem={activeItem} />
          </Overlay>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Menu;
