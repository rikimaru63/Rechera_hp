'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    // Create admin user if it doesn't exist
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@rechera.jp';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Rechera2024!';
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';

    try {
      // Check if admin user already exists
      const existingAdmin = await strapi.db.query('plugin::users-permissions.user').findOne({
        where: { email: adminEmail },
      });

      if (!existingAdmin) {
        // Get the authenticated role
        const authenticatedRole = await strapi.db.query('plugin::users-permissions.role').findOne({
          where: { type: 'authenticated' },
        });

        if (!authenticatedRole) {
          strapi.log.warn('Authenticated role not found. Admin user not created.');
          return;
        }

        // Hash the password
        const hashedPassword = await strapi.service('plugin::users-permissions.user').hashPassword(adminPassword);

        // Create the admin user
        await strapi.db.query('plugin::users-permissions.user').create({
          data: {
            username: adminUsername,
            email: adminEmail,
            password: hashedPassword,
            provider: 'local',
            confirmed: true,
            blocked: false,
            role: authenticatedRole.id,
            courseType: 'master',
            isApproved: true,
            isActive: true,
            isAdmin: true,
            approvedAt: new Date(),
          },
        });

        strapi.log.info(`Admin user created: ${adminEmail}`);
      } else {
        // Ensure existing admin has isAdmin flag
        if (!existingAdmin.isAdmin) {
          await strapi.db.query('plugin::users-permissions.user').update({
            where: { id: existingAdmin.id },
            data: { isAdmin: true },
          });
          strapi.log.info(`Admin flag updated for: ${adminEmail}`);
        }
      }
    } catch (error) {
      strapi.log.error('Error creating admin user:', error.message);
    }
  },
};
