
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/type/index","pages/user/index","pages/detail/index","pages/preview/index","pages/down/index","pages/collection/index","pages/history/index"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"壁纸酷","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#909399","selectedColor":"#000000","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_art.png","text":"首页"},{"pagePath":"pages/type/index","iconPath":"static/tabbar/center.png","selectedIconPath":"static/tabbar/center_art.png","text":"分类"},{"pagePath":"pages/user/index","iconPath":"static/tabbar/user.png","selectedIconPath":"static/tabbar/user_art.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"壁纸","compilerVersion":"3.5.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"主页","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/type/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"类别","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"navigationStyle":"custom","bounce":"none"}},{"path":"/pages/detail/index","meta":{},"window":{"navigationBarTitleText":"预览","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/preview/index","meta":{},"window":{"navigationBarTitleText":"类别预览","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/down/index","meta":{},"window":{"navigationBarTitleText":"我的下载","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/collection/index","meta":{},"window":{"navigationBarTitleText":"我的收藏","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/history/index","meta":{},"window":{"navigationBarTitleText":"我的预览","enablePullDownRefresh":false,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});