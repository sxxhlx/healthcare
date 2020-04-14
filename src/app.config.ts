export default {
  pages: [
    'pages/glu/index',
    'pages/bp/index',
    'pages/exercise/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '个人健康管理',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/glu/index",
        text: "血糖"
      },
      {
        pagePath: "pages/bp/index",
        text: "血压"
      },
      {
        pagePath: "pages/exercise/index",
        text: "运动记录"
      }
    ]
  },
}
