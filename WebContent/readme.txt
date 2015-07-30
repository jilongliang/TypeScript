/**
 *@Version:1.0
 *@DEMO:typescript
 *@Date:2015-7-28 下午12:13:25
 *@Author:liangjilong
 *@Email:jilongliang@sina.com
 *@Weibo:http://weibo.com/jilongliang
 *@Description：readme文件
 */
1、详细安装文章请看
	http://blog.csdn.net/jilongliang/article/details/21942911
	
2、TypeScript官方手册
   http://www.typescriptlang.org/Handbook
   
3、TypeScript官方例子
   https://github.com/Microsoft/TypeScriptSamples
   http://typescript.codeplex.com/
   
4、注意TypeScript的ts文件会多处有红色的XX，并不代表它有错误，如果是Myeclipse的话可以在
   Myeclipse--->> Exclude From Validation忽略红色的问题
   
5、看TypeScript例子源碼情況.ts文件，javascript源碼是.js
   
6、参考博客..
   http://ju.outofmemory.cn/entry/954
   http://www.oschina.net/question/12_72250
   http://www.cnblogs.com/whitewolf/p/4103328.html

7、注意事项:   
 A、必须选择ECMAScript target version ES3或ES5，选择ES6版本太高，生成的js文件会有class关键字

 B、eclipse设置默认.ts文件格式是TypeScript
   Window--->General-Editor--->File Associatior-->*.ts选择默认TypeScript
  
 C、 不要勾选Enable typeScript Builder，勾选了这个它不会帮你生成js文件
       勾选Disable typeScript Builder即可
 
 D、找到官方的jquery.d.ts文件拷贝到工程项目，在学习开发的时候会引用到.


    不使用Module,如果我们在typescript使用了module函数，则生成的代码在浏览器端执行时，需要有一些script loader的支持。
对于浏览器端代码，我们一般生成amd风格的代码，所以需要找一个支持amd的库放在前端。这样的库有很多


