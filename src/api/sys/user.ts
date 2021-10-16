const userInfo = {
  userId: '1',
  username: 'vben',
  realName: 'admin',
  avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
  desc: 'manager',
  password: '123456',
  token: 'fakeToken1',
  homePath: '/dashboard/analysis',
  roles: [
    {
      roleName: 'Super Admin',
      value: 'super',
    },
  ],
};
/**
 * @description: user login api
 */
export function loginApi() {
  return userInfo;
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return userInfo;
}

export function getPermCode() {
  return ['1000', '3000', '5000'];
}

export function doLogout() {
  return null;
}
