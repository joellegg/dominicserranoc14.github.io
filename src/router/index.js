import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from '@/components/AboutPage';
import PortfolioPage from '@/components/PortfolioPage';

Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '/',
          name: 'AboutPage',
          component: AboutPage,
        },
        {
          path: '/portfolio',
          name: 'PortfolioPage',
          component: PortfolioPage,
        },
    ]
});
