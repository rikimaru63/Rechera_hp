'use strict';

/**
 * User management controller for admin operations
 */

// Helper function to check if user is admin
const checkAdmin = async (ctx, strapi) => {
  const user = ctx.state.user;

  if (!user) {
    ctx.unauthorized('You must be logged in');
    return false;
  }

  // Fetch full user data with isAdmin field
  const fullUser = await strapi.entityService.findOne(
    'plugin::users-permissions.user',
    user.id,
    { fields: ['isAdmin'] }
  );

  if (!fullUser || !fullUser.isAdmin) {
    ctx.forbidden('Admin access required');
    return false;
  }

  return true;
};

module.exports = {
  /**
   * Get all users with filters
   */
  async findAll(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;
    const { status, courseType, search } = ctx.query;

    let filters = {};

    // Filter by approval status
    if (status === 'pending') {
      filters.isApproved = false;
    } else if (status === 'approved') {
      filters.isApproved = true;
    } else if (status === 'inactive') {
      filters.isActive = false;
    }

    // Filter by course type
    if (courseType) {
      filters.courseType = courseType;
    }

    // Search by email or username
    if (search) {
      filters.$or = [
        { email: { $containsi: search } },
        { username: { $containsi: search } },
      ];
    }

    const users = await strapi.entityService.findMany(
      'plugin::users-permissions.user',
      {
        filters,
        sort: { createdAt: 'desc' },
        fields: [
          'id',
          'username',
          'email',
          'courseType',
          'isApproved',
          'isActive',
          'approvedAt',
          'deactivatedAt',
          'createdAt',
          'registrationNote',
        ],
      }
    );

    ctx.body = users;
  },

  /**
   * Get pending users awaiting approval
   */
  async findPending(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const users = await strapi.entityService.findMany(
      'plugin::users-permissions.user',
      {
        filters: {
          isApproved: false,
          blocked: false,
        },
        sort: { createdAt: 'desc' },
        fields: [
          'id',
          'username',
          'email',
          'createdAt',
          'registrationNote',
        ],
      }
    );

    ctx.body = users;
  },

  /**
   * Approve a user
   */
  async approve(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const { id } = ctx.params;
    const { courseType = 'standard' } = ctx.request.body || {};

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id
    );

    if (!user) {
      return ctx.notFound('User not found');
    }

    const updatedUser = await strapi.entityService.update(
      'plugin::users-permissions.user',
      id,
      {
        data: {
          isApproved: true,
          courseType,
          approvedAt: new Date(),
        },
      }
    );

    ctx.body = {
      message: 'User approved successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        courseType: updatedUser.courseType,
        isApproved: updatedUser.isApproved,
      },
    };
  },

  /**
   * Reject a user (delete or block)
   */
  async reject(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const { id } = ctx.params;

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id
    );

    if (!user) {
      return ctx.notFound('User not found');
    }

    // Block the user instead of deleting
    await strapi.entityService.update(
      'plugin::users-permissions.user',
      id,
      {
        data: {
          blocked: true,
        },
      }
    );

    ctx.body = {
      message: 'User rejected and blocked',
    };
  },

  /**
   * Deactivate a user (consulting period ended)
   */
  async deactivate(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const { id } = ctx.params;

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id
    );

    if (!user) {
      return ctx.notFound('User not found');
    }

    const updatedUser = await strapi.entityService.update(
      'plugin::users-permissions.user',
      id,
      {
        data: {
          isActive: false,
          deactivatedAt: new Date(),
        },
      }
    );

    ctx.body = {
      message: 'User deactivated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        isActive: updatedUser.isActive,
      },
    };
  },

  /**
   * Reactivate a user
   */
  async reactivate(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const { id } = ctx.params;

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id
    );

    if (!user) {
      return ctx.notFound('User not found');
    }

    const updatedUser = await strapi.entityService.update(
      'plugin::users-permissions.user',
      id,
      {
        data: {
          isActive: true,
          deactivatedAt: null,
        },
      }
    );

    ctx.body = {
      message: 'User reactivated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        isActive: updatedUser.isActive,
      },
    };
  },

  /**
   * Update user course type
   */
  async updateCourseType(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const { id } = ctx.params;
    const { courseType } = ctx.request.body;

    if (!['standard', 'master'].includes(courseType)) {
      return ctx.badRequest('Invalid course type. Must be "standard" or "master"');
    }

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id
    );

    if (!user) {
      return ctx.notFound('User not found');
    }

    const updatedUser = await strapi.entityService.update(
      'plugin::users-permissions.user',
      id,
      {
        data: {
          courseType,
        },
      }
    );

    ctx.body = {
      message: 'Course type updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        courseType: updatedUser.courseType,
      },
    };
  },

  /**
   * Get single user details
   */
  async findOne(ctx) {
    if (!(await checkAdmin(ctx, strapi))) return;

    const { id } = ctx.params;

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      id,
      {
        fields: [
          'id',
          'username',
          'email',
          'courseType',
          'isApproved',
          'isActive',
          'approvedAt',
          'deactivatedAt',
          'createdAt',
          'registrationNote',
        ],
      }
    );

    if (!user) {
      return ctx.notFound('User not found');
    }

    ctx.body = user;
  },
};
