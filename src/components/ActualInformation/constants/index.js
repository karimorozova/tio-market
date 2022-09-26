import { generate } from 'shortid';

import { ReactComponent as ommissions } from '../../../assets/icons/actual-information/ommissions.svg';
import { ReactComponent as analysis } from '../../../assets/icons/actual-information/analysis.svg';
import { ReactComponent as trading } from '../../../assets/icons/actual-information/trading.svg';
import { ReactComponent as support } from '../../../assets/icons/actual-information/support.svg';

export const actualInformationList = [
  { id: generate(), Icon: ommissions, text: '0 Commissions & Raw Spreads' },
  { id: generate(), Icon: analysis, text: 'Market Analysis & FX Webinars' },
  { id: generate(), Icon: trading, text: 'Instant Trading Execution ' },
  { id: generate(), Icon: support, text: 'Live Support In Your Language' },
];
