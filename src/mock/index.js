import { list } from '../data/list';

export const mockData = () => {
  return new Promise(res => {
    setTimeout(() => {
      res(list);
    }, 400);
  });
};
