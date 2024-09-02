var posts=["DataStructure/数据结构初识/","DataStructure/数据结构学习（一）/","Hexo/hello-world/","Hexo/shoka主题介绍/","Hexo/Algolia搜索配置/","Hexo/使用hexo命令创建新文章/","Hexo/将shoka主题中valine评论系统更换为waline系统/","Others/便携版vscode修改数据路径/","Others/关于如何解决github直连失败的方法/","Others/提取wallpaper壁纸/","Others/终端美化篇/","朝花夕拾/markdown语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };