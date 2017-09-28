/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
export default [
  {
    path: '/albums',
    name: 'albums.index',
    component: resolve => require(['@/pages/albums/index.vue'], resolve),
  },
  {
    path: '/albums/create',
    name: 'albums.create',
    component: resolve => require(['@/pages/albums/create.vue'], resolve),
  },
  {
    path: '/albums/:albumId',
    name: 'albums.show',
    component: resolve => require(['@/pages/albums/show.vue'], resolve),
    props: true,
  },
  {
    path: '/albums/:albumId/edit',
    name: 'albums.edit',
    component: resolve => require(['@/pages/albums/edit.vue'], resolve),
    props: true,
  },

  {
    path: '/artists',
    name: 'artists.index',
    component: resolve => require(['@/pages/artists/index.vue'], resolve),
  },
  {
    path: '/artists/create',
    name: 'artists.create',
    component: resolve => require(['@/pages/artists/create.vue'], resolve),
  },
  {
    path: '/artists/:artistId',
    name: 'artists.show',
    component: resolve => require(['@/pages/artists/show.vue'], resolve),
    props: true,
  },
  {
    path: '/artists/:artistId/edit',
    name: 'artists.edit',
    component: resolve => require(['@/pages/artists/edit.vue'], resolve),
    props: true,
  },
  {
    path: '/songs',
    name: 'songs.index',
    component: resolve => require(['@/pages/songs/index.vue'], resolve),
  },
  {
    path: '/songs/create',
    name: 'songs.create',
    component: resolve => require(['@/pages/songs/create.vue'], resolve),
  },
  {
    path: '/songs/:songId',
    name: 'songs.show',
    component: resolve => require(['@/pages/songs/show.vue'], resolve),
    props: true,
  },
  {
    path: '/songs/:songId/edit',
    name: 'songs.edit',
    component: resolve => require(['@/pages/songs/edit.vue'], resolve),
    props: true,
  },

  {
    path: '/login',
    name: 'login.index',
    component: resolve => require(['@/pages/login/index.vue'], resolve),
  },

  {
    path: '/404',
    name: 'not-found.index',
    component: resolve => require(['@/pages/not-found/index.vue'], resolve),
  },

  {
    path: '/',
    redirect: '/artists',
  },
  {
    path: '/*',
    redirect: '/404',
  },
];
