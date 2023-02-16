export interface GlobalModal {
  isShow: boolean;
  hide: () => any;
  show: () => any;
  title?: string;
  contents?:
    | VNode<RendererNode, RendererElement, { [key: string]: any }>
    | VNode<RendererNode, RendererElement, { [key: string]: any }>[];
  noBtnTxt?: string;
  noBtnFunc?: (...args: any[]) => any;
  yesBtnTxt?: string;
  yesBtnFunc?: (...args: any[]) => any;
}
