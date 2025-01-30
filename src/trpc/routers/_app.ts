import { router } from "../server";
import { authRouter } from "./auth";
import { roleModulePermissionRouter } from "./role_module_permission";
import { rolesRouter } from "./roles";
import { usersRouter } from "./users";

export const appRouter = router({
  users: usersRouter,
  auth: authRouter,
  roles: rolesRouter,
  roleModulePermissons: roleModulePermissionRouter
});

export type AppRouter = typeof appRouter;
