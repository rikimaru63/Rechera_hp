module.exports = (plugin) => {
  // Store original register controller
  const originalRegister = plugin.controllers.auth.register;

  // Override register controller to set custom defaults
  plugin.controllers.auth.register = async (ctx) => {
    // Call original register
    await originalRegister(ctx);

    // If registration was successful and we have a user
    if (ctx.response.status === 200 && ctx.response.body?.user) {
      const userId = ctx.response.body.user.id;

      // Update user with custom defaults
      await strapi.entityService.update(
        'plugin::users-permissions.user',
        userId,
        {
          data: {
            isApproved: false,
            isActive: true,
            courseType: 'standard',
          },
        }
      );

      // Update response body
      ctx.response.body.user.isApproved = false;
      ctx.response.body.user.isActive = true;
      ctx.response.body.user.courseType = 'standard';
    }
  };

  return plugin;
};
