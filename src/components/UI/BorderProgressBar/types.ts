export enum BorderProgressBarPosition {
  LEFT = "borderProgressBarLeft",
  RIGHT = "borderProgressBarRight",
  TOP = "borderProgressBarTop",
  BOTTOM = "borderProgressBarBottom",
}

export type BorderProgressBarPropTypes = {
  color: string;
  thickness: string;
  position: BorderProgressBarPosition;
  progress: number;
};
