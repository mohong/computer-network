module.exports = {
  base: '/computer-network/',
  title: '我的笔记',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      ['/', '概述'],
      {
        title: '物理层',
        collapsable: false,
        children: []
      },
      {
        title: '数据链路层',
        children: [ /* ... */]
      },
      {
        title: '网络层',
        children: [ /* ... */]
      },
      {
        title: '运输层',
        children: [ /* ... */]
      },
      {
        title: '应用层',
        children: [ /* ... */]
      }
    ]
  }
}
