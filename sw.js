/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","e90a5d69b9d281afbb4b4b264ec1c763"],["/2023/06/14/PyQt5学习/image-20231031174257188.png","83d264f750d4b3bc486d651dc333b325"],["/2023/06/14/PyQt5学习/image-20231031174320657.png","7a515521d43ef412b6a0c9355a0e6987"],["/2023/06/14/PyQt5学习/image-20231031174343735.png","0ee0d531b4fc2efd08bc69c79ff685d4"],["/2023/06/14/PyQt5学习/index.html","b5ceac80d49bdf851dcc82ad85d3f5ba"],["/2023/06/16/古诗/index.html","d2d317dbebe94948ba9ab6068fad3802"],["/2023/06/19/tags/index.html","c1ed92992a3c70f533b007af590ce71f"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","cccd5c596209d93303db64db4d28208a"],["/2023/06/24/hello-world/index.html","c3eb9d7ac459e87a9880c08fc5f788ff"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","d3593cc0f620c3ead97d6be17648c69d"],["/2023/06/24/python学习/index.html","5748b4e8949abe83cc8712c9b6607455"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","8163860badb33eb2a46a36d60292b023"],["/2023/09/05/Git的使用/index.html","4d09388d02a6f890bf1e0ea90e7fed84"],["/2023/09/05/hexo命令/index.html","af222e15a96cf6fe506bd4fad4dd645c"],["/2023/09/05/markdown语法学习/index.html","846c4427fdb0e681666bcf26014eed3b"],["/2023/09/05/软件推荐/image-20231031174143081.png","084135d6da609e8b1bb0ae7a213edc26"],["/2023/09/05/软件推荐/index.html","776ef106f67f3ef87dfff9e74a2aa87c"],["/2023/10/29/python基础（一）/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/image-20231030171312652.png","719f6864ec5537947204fa6902494cba"],["/2023/10/29/python基础（一）/image-20231030171354823.png","914f25d366946ca270f06b5492400053"],["/2023/10/29/python基础（一）/image-20231030171513124.png","3df506bad347bf52e75c94189fb3242d"],["/2023/10/29/python基础（一）/image-20231030171619978.png","694042abe32acc317a12baf6b044565b"],["/2023/10/29/python基础（一）/image-20231030171644917.png","8df204b3c14d05617cdbc221ba1b71b8"],["/2023/10/29/python基础（一）/image-20231030171724480.png","4664be210d5eeb40698ab8321701ae02"],["/2023/10/29/python基础（一）/image-20231030171747555.png","b5db272406e76dd75f7813d7540348fa"],["/2023/10/29/python基础（一）/index.html","9b9cca9e006ea7fbccffd40377dc75b9"],["/2023/10/29/python基础（二）/image-20230918214356921.png","dc89050cecff8bd65d843f0d704b1edf"],["/2023/10/29/python基础（二）/image-20230918214412107.png","8a1c159ee8f595bba9d56cdcd7075235"],["/2023/10/29/python基础（二）/image-20230918214543463.png","7fb11d0e2c24a10016904f048f407009"],["/2023/10/29/python基础（二）/image-20230918214659985.png","ddb2e839b0c9ae13aef7b5f592bf9c5d"],["/2023/10/29/python基础（二）/image-20230918214939756.png","fb494ce8af605bcbc0880e6d123301e6"],["/2023/10/29/python基础（二）/image-20230918215056391.png","01b404fad1ae08e82b08452cb8a5c77b"],["/2023/10/29/python基础（二）/image-20230918215126783.png","1396e360b75ce2da6b6c77357faa6521"],["/2023/10/29/python基础（二）/image-20230919195007351.png","72e6a3c8343065c9fb3705d9a5462a6f"],["/2023/10/29/python基础（二）/image-20230923234225607.png","32bd98544183798db38bbb01bb1e7f76"],["/2023/10/29/python基础（二）/image-20230924174136255.png","741af3d3d7181b70546b1112d9f75c9b"],["/2023/10/29/python基础（二）/image-20230924174735636.png","8e119165904627d1e882f11532eb33fc"],["/2023/10/29/python基础（二）/image-20230924175515851.png","32924729a3e96a4eda8d539ee8d97ba2"],["/2023/10/29/python基础（二）/image-20230924181156881.png","db05bcc51ae21eecdc22075ac83ce242"],["/2023/10/29/python基础（二）/image-20231012213044511.png","c2841679a3fbb526d221468380fef39a"],["/2023/10/29/python基础（二）/image-20231012213307793.png","411a728839efd02c01604a4c2c68e3db"],["/2023/10/29/python基础（二）/image-20231012213321455.png","606ca0fe7b1f4806bbe95dc6417ac3fb"],["/2023/10/29/python基础（二）/image-20231012220016432.png","9164d7f334c6633523a184fb8c46e26a"],["/2023/10/29/python基础（二）/image-20231028212330264.png","5a380bb63422bd2c1eb172db9d7fdc44"],["/2023/10/29/python基础（二）/image-20231031234351024.png","dc336f5bc922ab938ca95cc391e39157"],["/2023/10/29/python基础（二）/image-20231101183731862.png","8b2616f5cbcf470b7f785ac5a6b72d91"],["/2023/10/29/python基础（二）/image-20231101184902551.png","8028c7d527361b398a6059f5aa36eb5e"],["/2023/10/29/python基础（二）/image-20231101191240653.png","1fbe313731eed1aec018fe0999ad7e4c"],["/2023/10/29/python基础（二）/image-20231103192607126.png","e9e510281da02ec1754f951465f81c98"],["/2023/10/29/python基础（二）/index.html","76f1b306e0a8100663bb3b380f537a87"],["/2023/10/30/IDEA问题/image-20230723172645588.png","d6c638984ecf87f9db45bc11b544fca3"],["/2023/10/30/IDEA问题/image-20230723172919423.png","03f952d99bcc7266f2d71dd4f38af516"],["/2023/10/30/IDEA问题/image-20230723172957384.png","176d503078121ff22e667d251a039555"],["/2023/10/30/IDEA问题/image-20230723173008430.png","a71ef90a1f2769daec9f7b50e8b4366a"],["/2023/10/30/IDEA问题/image-20230723173144089.png","984eed0cd34c67933f192f1f7c0eb449"],["/2023/10/30/IDEA问题/index.html","96d36f0a18e873c0e1b7066a32375514"],["/2023/10/30/修改任务栏中工具颜色/image-20230728103547408.png","e7cf1755372998273041372812cb5833"],["/2023/10/30/修改任务栏中工具颜色/index.html","b1f3d86179f660801c2f4635b88642bd"],["/2023/10/30/程序的安装/image-20231029215320342.png","ef736a71d4e183fad56cba9fb607bade"],["/2023/10/30/程序的安装/image-20231029215409352.png","0e261ca387a465335cbb576aba5e4153"],["/2023/10/30/程序的安装/image-20231029215505778.png","b4a7266e75bd979e906e4d18f19c2a8f"],["/2023/10/30/程序的安装/image-20231029215627851.png","68ff3485246137311be4ae1a1d876090"],["/2023/10/30/程序的安装/image-20231029215734808.png","4c478f2f827dbeb1bf80949d95469dcf"],["/2023/10/30/程序的安装/image-20231029215942117.png","763bec33bf5c52b18e791c46574c2223"],["/2023/10/30/程序的安装/image-20231029220157744.png","3567a5cd23a182d5fe0466a0de388f20"],["/2023/10/30/程序的安装/index.html","d50db072ba3c4e34cb3a8d9f5dae5c04"],["/2023/10/31/hexo博客问题/image-20231031171928721.png","dafa59ee4b1703605875d743d40d75e9"],["/2023/10/31/hexo博客问题/image-20231031173343986.png","8933d054b37ba53018eac0b158c8daf3"],["/2023/10/31/hexo博客问题/index.html","ccb306dccae71b9ab3708098e8770ae1"],["/2023/11/04/python基础（三）/image-20230918215201107.png","8a4fa2469008f9cea4b5313e61ff86b9"],["/2023/11/04/python基础（三）/image-20230918215250955.png","6eae6ce93aa67bef8d600831c9a55d13"],["/2023/11/04/python基础（三）/image-20230918215355042.png","4c2a8b5b9ecd062656bf561f63dd2e71"],["/2023/11/04/python基础（三）/image-20230921213134552.png","bfdd9ef9fc305c9afcfbec6f28ddad20"],["/2023/11/04/python基础（三）/image-20231030205214556.png","401fb429d20fcba76a6a91d3ce2b7ba5"],["/2023/11/04/python基础（三）/index.html","e8185bc3bf48e96ebb6fe6a894e6a740"],["/2023/11/04/python题目练习/1.png","5367697401533d89d7815105f2978bf1"],["/2023/11/04/python题目练习/image-20231104181758079.png","eeb1f1a7813737d56f74c3f3984ab9de"],["/2023/11/04/python题目练习/index.html","7fba4cfe3c1f1861bfac4f40e92c5307"],["/2023/11/06/beauty/index.html","a66f622de9e9d92023168a2e251ddb83"],["/about/index.html","129a2d5761a204c8d7c2edca0e2fa11a"],["/archives/2020/05/index.html","10388ca10ba34a10cbbbb686f77fb406"],["/archives/2020/index.html","715dccf16f619ccc9840babff9ce4de2"],["/archives/2023/06/index.html","f3e627124b845634db70be4a23af9676"],["/archives/2023/09/index.html","7f30e74904d8c7bcf136045af5d26f7b"],["/archives/2023/10/index.html","b306592fa7d125324895620c33bcec1e"],["/archives/2023/11/index.html","c151e1680268221589997ce457d46184"],["/archives/2023/index.html","e2b659a758828b96018c7153a3b06bec"],["/archives/2023/page/2/index.html","9464bb8e1d5157f21bbb41b24d126743"],["/archives/2023/page/3/index.html","f10eabcc0f53d7fddf3c8d4928828a7b"],["/archives/index.html","010c2997a936c306c8120d218c91307c"],["/archives/page/2/index.html","7d94e245d27f55a83d5c25113f0a428d"],["/archives/page/3/index.html","e2e4b4b5cb88b784069341c988530a9d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-4fA6nY2PfB.html","b59143b1b96cf42a8cfefadd865f0224"],["/categories/IDEA/Question/index.html","67cf96ab4936c122107d20e236dd61c9"],["/categories/IDEA/index.html","baf143aa51cf1bb6b22eb634a6c3d24f"],["/categories/Question/index.html","863efff208410a91f422e2ec889f873e"],["/categories/hexo/Question/index.html","fd30635b260a35e888fd2e4d2c0c0543"],["/categories/hexo/index.html","000c2aceac675dd702a931c8a24ab6b9"],["/categories/index.html","8be1c0272f311cbfeb120a0b4485df9c"],["/categories/python/index.html","2a0e833629d08a60db4b5a0fd5d1f112"],["/categories/古文鉴赏/index.html","c68756ceeb66f030d24a1970b027f765"],["/categories/工具学习/index.html","864bc3a2f97d5f02a0806af5135c479a"],["/categories/开发环境/index.html","4446991057ec2893770d468bf387ed11"],["/categories/开发环境/程序/index.html","b8d369ed08973e9bbc1dd05a31cac0f0"],["/categories/推荐/index.html","9afacde478660958c6a0a18bcd0680ec"],["/categories/搭建教程/index.html","3843ec44693441ebd79b5f6af6178b38"],["/categories/文案/index.html","2b701d5df55b958c49d4fb1653f4c28b"],["/categories/编程语言学习/index.html","1b3190a46a0969c91ff90fb341f0b34d"],["/css/index.css","2cff5f8089711114752e49c283684d4a"],["/css/loading-bar.css","f0c666b9a1ce604c4db9d2fe2071a204"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","ff8e04aa8be1651b1f0ed8e4f727a209"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","b43dfc83d76fe298ae1acbf5e8b1aed3"],["/img/2.jpg","fe1ad8a950a0d3189652da9e3e9a4ee7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/aaa.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/bbb.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","204d1065b7ca3188b62efe26ce9b6e03"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","e588aa256505079a6d070de0ad42bfae"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","5c139fa38d9320f298f9394ddf26b0dd"],["/page/2/index.html","4114313de75afe9da8992cc8693e3376"],["/page/3/index.html","bce22b8330d2572406f99ec650ec0358"],["/picture/beauty.html","309ff589ecfd759d706378a364aa8953"],["/picture/beauty/image-20231106145246675.png","eadbe0bcba7aa8b15f8509712df659e3"],["/picture/beauty/image-20231106145315880.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145331469.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145340015.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145359854.png","2372e9dec3d7988dafe172f7105f9836"],["/picture/beauty/image-20231106145519310.png","8946341ec3f8634728d2344a4c52ab05"],["/picture/beauty/image-20231106145612942.png","f3a966701ff6fc3187fac27a700c83b5"],["/picture/beauty/image-20231106145650731.png","547eeaf693cdda1a6a16e0078e09e07a"],["/picture/beauty/image-20231106145707231.png","2ce0af86e89cb1c81181c8f0a37a5714"],["/picture/beauty/image-20231106145914501.png","a405593a10fe87ad2bbe8360d70009c0"],["/picture/beauty/image-20231106150351310.png","8145837a31407299970dc01d065c81d7"],["/picture/beauty/image-20231106155928086.png","0bd3a7c41db5a3b1a28c88fba149b0c8"],["/picture/index.html","2eae5640bfd4f4111aa2c2c13461eb47"],["/picture/zgu.jpg","7079e9082d64d0affe4145e52d07d579"],["/resources/index.html","165983bec06605a72475bff6a3dad9f6"],["/sw-register.js","d5e65f7be8bb10933ab8a215a836e999"],["/tags/Git/index.html","275bdab3330eb2422b9c2bfffa71f33d"],["/tags/GitHub/index.html","8789dcba63252b29daa490cf140282b5"],["/tags/IDEA/index.html","4d967ad02389d58910b986951ad8d0d6"],["/tags/PyQt5/index.html","613d2f54e68e5bd752e7522e68afd1d2"],["/tags/Qt-Designer/index.html","4e932b03979a1302266e09597f20ae8d"],["/tags/Question/index.html","f76d27d2ada2d060a1e2d5ef6e7b16c1"],["/tags/Windows/index.html","a510f8181c8a65b63f5b0bd779fcf434"],["/tags/chatgpt/index.html","c5ad66011828cb520f2438113745ffcb"],["/tags/hexo/index.html","b89fefb2dfc0a00e9af7f5d4899b5e1f"],["/tags/index.html","15670400b3ff4c3a05c792001c111c92"],["/tags/markdown/index.html","1a4a4c5c607e3f6faac7f35cabc58dd9"],["/tags/next/index.html","0352dae8aa72936405000f1fa9cd2273"],["/tags/python/index.html","15b2c30a6a6f3930c182ccb03b621229"],["/tags/tags/index.html","3b0a04521952c35435bc8e24c6a64718"],["/tags/vercel/index.html","3a38325a35b10da060ab95ec1cd74538"],["/tags/命令/index.html","2321c3b5c541200ffe12efb66c39642a"],["/tags/安装/index.html","6e5f4169c63f2d7031416b6c62862f30"],["/tags/工具/index.html","424b0b3e5943077b0dd25f6caa7803cd"],["/tags/开发环境/index.html","44a2acbf143e342f8e1ee0b7373cb617"],["/tags/文本编辑/index.html","12fa31209b8674bb73ae02a8e130211b"],["/tags/李白/index.html","e9fdee303063c85bc0cbb534343acb73"],["/tags/白玉京/index.html","e1f1fc19556cf7d78882ffa9555918aa"],["/tags/软件推荐/index.html","460e9f23b80d681002c7980d2804be0f"],["/tags/题目/index.html","a5766cb4a8a4a522026c2a37816841c2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
