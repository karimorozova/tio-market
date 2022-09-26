import { useState } from 'react';
import cn from 'classnames';
import styles from './CustonSlider.module.scss';
import { dataForSlider } from './constants';
import useMedia from '../../hooks/useMedia';

const CustonSlider = () => {
  const [itemData, setItemData] = useState(dataForSlider[0]);
  const { id, number, title, texts, imgSrc } = itemData;

  const { DESK } = useMedia();

  const moveLeft = id => {
    let item = null;

    for (let i = 0; i < dataForSlider.length; i += 1) {
      if (dataForSlider[i].id === id && i >= 1) {
        item = dataForSlider[i - 1];
        break;
      }

      if (dataForSlider[i].id === id && i === 0) {
        item = dataForSlider[dataForSlider.length - 1];
        break;
      }
    }

    setItemData(item);
  };

  const moveRight = id => {
    let item = null;

    for (let i = 0; i < dataForSlider.length; i += 1) {
      if (dataForSlider[i].id === id && dataForSlider.length >= i + 2) {
        item = dataForSlider[i + 1];
        break;
      }

      if (dataForSlider[i].id === id && dataForSlider.length < i + 2) {
        item = dataForSlider[0];
        break;
      }
    }

    setItemData(item);
  };

  return (
    <div className={styles.customSlider}>
      {DESK && (
        <button
          type="button"
          className={cn(styles.buttonMove, styles.buttonMoveLeft)}
          onClick={() => moveLeft(id)}
        >
          &lt;
        </button>
      )}

      {DESK && <span className={styles.numberSlider}>{number}</span>}

      <ul className={styles.sliderList}>
        <li>
          <div className={styles.containerLeft}>
            {!DESK && <span className={styles.numberSlider}>{number}</span>}
            <h3 className={styles.title}>{title}</h3>

            {texts.map((text, idx) => (
              <p key={idx} className={styles.text}>
                {text}
              </p>
            ))}
            {!DESK && <img className={styles.sliderImg} src={imgSrc} alt="" />}
          </div>
        </li>
      </ul>

      {DESK && <img className={styles.sliderImg} src={imgSrc} alt="" />}

      {DESK && (
        <button
          type="button"
          className={styles.buttonMove}
          onClick={() => moveRight(id)}
        >
          &gt;
        </button>
      )}

      {!DESK && (
        <div className={styles.controllers}>
          <button
            type="button"
            className={cn(styles.buttonMove, styles.buttonMoveLeft)}
            onClick={() => moveLeft(id)}
          >
            &lt;
          </button>
          <button
            type="button"
            className={styles.buttonMove}
            onClick={() => moveRight(id)}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default CustonSlider;
