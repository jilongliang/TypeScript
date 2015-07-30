//环境外部模块

//在node.js中，大多数的任务是由加载一个或多个模块来实现的。我们可以定义自己的.d.ts文件
//顶层出口报关单每个模块，但它更方便他们写为一个较大的.d.ts文件。要做到这一点，我们使用
//了模块的引用名，这将提供给一个后来进口

declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}


 