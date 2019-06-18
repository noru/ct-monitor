import { URL } from '#/js/services/user'

export default function(mock) {
  mock.onGet(URL.list).reply(() => {
    return [
      200,
      [
        {
          userId: 3,
          loginName: 'a',
          userName: 'a',
          userPassword: null,
          userStatus: null,
        },
        {
          userId: 1,
          loginName: 'admin',
          userName: 'Administrator',
          userPassword: null,
          userStatus: '1',
        },
        {
          userId: 2,
          loginName: 'user',
          userName: 'user',
          userPassword: null,
          userStatus: '1',
        },
      ],
    ]
  })

  mock.onGet(URL.roles).reply(() => {
    return [
      200,
      [
        { roleId: '4', roleName: '临床科室主任', userId: 0 },
        { roleId: '7', roleName: '临床科室人员', userId: 0 },
        { roleId: '5', roleName: '后台运营管理', userId: 0 },
        { roleId: '3', roleName: '工程师', userId: 0 },
        { roleId: '13', roleName: '护理人员', userId: 0 },
        { roleId: '12', roleName: '本地后台运营管理', userId: 0 },
        { roleId: '14', roleName: '维修商医工', userId: 0 },
        { roleId: '11', roleName: '设备调剂管理人员', userId: 0 },
        { roleId: '1', roleName: '院长', userId: 0 },
      ],
    ]
  })
}
