import { useState } from 'react';
import cn from 'classnames';
import { LangsData, listLangs } from '../../constants';
import styles from './Langs.module.scss';

const KeyForLocalStorage = {
  LANG: 'lang',
};

const Langs = () => {
  const langInLS = localStorage.getItem(KeyForLocalStorage.LANG);

  const [dataLang, setDataLang] = useState(LangsData[langInLS]);
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);

  const toggleMenu = () => setIsOpenLangMenu(!isOpenLangMenu);

  const changeLang = lang => {
    setDataLang(LangsData[lang]);
    toggleMenu();
    localStorage.setItem('lang', lang);
  };

  const currentList = listLangs.filter(({ id }) => id !== dataLang.id);

  return (
    <div className={styles.langs}>
      <button className={styles.buttonLang} type="button" onClick={toggleMenu}>
        <img
          className={styles.icon}
          src={dataLang.imgSrc}
          alt={dataLang.lang}
        />

        <span
          className={cn(styles.arrow, { [styles.openLang]: isOpenLangMenu })}
        >
          &gt;
        </span>
      </button>

      {isOpenLangMenu && (
        <ul className={styles.langList}>
          {currentList.map(({ id, lang, imgSrc }) => (
            <li key={id}>
              <button type="button" onClick={() => changeLang(lang)}>
                <img className={styles.icon} src={imgSrc} alt={lang} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Langs;
