export const MODULES = {
  DASHBOARD: "dashboard",
  USERS: "users",
  ADMINISTRATORS: "administrators",
  SETTINGS: "settings"
} as const;

export type ModuleName = keyof typeof MODULES;
