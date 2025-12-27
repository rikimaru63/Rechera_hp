'use strict';

/**
 * User management routes
 * All routes require admin authentication
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/user-management',
      handler: 'user-management.findAll',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-management/pending',
      handler: 'user-management.findPending',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-management/:id',
      handler: 'user-management.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-management/:id/approve',
      handler: 'user-management.approve',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-management/:id/reject',
      handler: 'user-management.reject',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-management/:id/deactivate',
      handler: 'user-management.deactivate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-management/:id/reactivate',
      handler: 'user-management.reactivate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-management/:id/course-type',
      handler: 'user-management.updateCourseType',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
