export const PERMISSIONS = {
  VIEW: 1, // 0001
  INSERT: 2, // 0010
  UPDATE: 4, // 0100
  DELETE: 8, // 1000
};

export type PermissionAction = keyof typeof PERMISSIONS;
