//环境内部模块

declare module D3{ 
   //声明一个Selectors选择器接口
   export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }
     //声明一个Event事件
    export interface Event {
        x: number;
        y: number;
    }
     //声明一个Base接口继承Selectors接口
    export interface Base extends Selectors {
        event: Event;
    }
}


declare var d3: D3.Base;