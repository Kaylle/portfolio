import { copyToClipboard, Notify } from 'quasar';
import type { Project } from 'components/models';


export const copyLink = (link:string, t: (key: string) => string):void => {
  copyToClipboard(link).then(() => {
    Notify.create({
      color: 'positive',
      message: t('successLink')
    })
  })
    .catch(() => {
      Notify.create({
        color: 'negative',
        message: t('errorLink')
      })
    })
};

export const checkDisabled = (type: 'prev' | 'next', projects:Project[], id:number): boolean => {
  const searchId = type === 'prev' ? -1 : 1;
  return !projects.find(e=>e.id === id + searchId);
};
