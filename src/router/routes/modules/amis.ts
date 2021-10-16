import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const amis: AppRouteModule = {
  path: '/amis',
  name: 'Amis',
  component: LAYOUT,
  redirect: '/amis/index',
  meta: {
    title: t('routes.amis.amis'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AmisPage',
      component: () => import('../../../views/amis/index.vue'),
      meta: {
        title: t('routes.amis.page'),
      },
    },
    {
      path: 'table',
      name: 'AmisTable',
      component: () => import('../../../views/amis/table.vue'),
      meta: {
        title: t('routes.amis.table'),
      },
    },
    {
      path: 'form',
      name: 'AmisForm',
      component: () => import('../../../views/amis/form.vue'),
      meta: {
        title: t('routes.amis.form'),
      },
    },
    {
      path: 'list',
      name: 'AmisList',
      component: () => import('../../../views/amis/list.vue'),
      meta: {
        title: t('routes.amis.list'),
      },
    },
    {
      path: 'dialog',
      name: 'AmisDialog',
      component: () => import('../../../views/amis/dialog.vue'),
      meta: {
        title: t('routes.amis.dialog'),
      },
    },
  ],
};

export default amis;
