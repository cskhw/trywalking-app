export interface GlobalModal {
  title?: string;
  contents?: string;
  noBtnTxt?: string;
  noBtnFunc?: (...args: any[]) => any;
  yesBtnTxt?: string;
  yesBtnFunc?: (...args: any[]) => any;
}
