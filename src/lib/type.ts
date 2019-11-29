export namespace GenericType {
  export enum StrTrimType {
    /** 去除首尾字符 */
    LEFT_RIGHT,
  
    /** 去除所有空格 */
    ALL,
  
    /** 去除左边的空格 */
    LEFT,
  
    /** 去除右边课空格 */
    RIGHT
  }

  export interface INotification {
    title: string;
    body: string;
    icon: string;
    show: () => void;
    click: () => void;
  }
}

export namespace ImageUtilsType {
  export interface Resourse {
    content: string;
    left: number;
    top: number;
    needRound: boolean;
    type: string;
    fanmily?: string;
    color?: string;
    width?: number;
    maxWidth?: number;
    height?: number;
  }
  
  export enum FontStyle {
    fanmily = '14px Arial',
    color = '#d4546f'
  }
  
  export enum TextType {
    Text = 'text',
    Image = 'image'
  }  
}

export namespace LogUtilsType {
  export interface ILogBeautyOptions {
    /**
     * 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
     */
    isMax?: boolean;
    /**
     * 背景色列表，是一个从左向右渐变的过程
     */
    colors?: string[];
  }
}
