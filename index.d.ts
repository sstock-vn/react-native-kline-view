import { Component } from 'react';
import { ViewStyle, ColorValue } from 'react-native';

export interface KLineDataItem {
  id: number | string;
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  vol: number;
  volume?: number;
  dateString?: string;
  selectedItemList?: SelectedItem[];
  // MA indicators
  ma5?: number;
  ma10?: number;
  ma20?: number;
  // BOLL indicators
  bollMb?: number;
  bollUp?: number;
  bollDn?: number;
  // MACD indicators
  macdDif?: number;
  macdDea?: number;
  macdMacd?: number;
  // KDJ indicators
  kdjK?: number;
  kdjD?: number;
  kdjJ?: number;
  // RSI indicators
  rsi6?: number;
  rsi12?: number;
  rsi24?: number;
  // WR indicators
  wr14?: number;
  // Volume MA
  maVol5?: number;
  maVol10?: number;
}

export interface SelectedItem {
  title: string;
  detail: string;
  color?: number | ColorValue;
}

export interface MAItem {
  title: string;
  selected: boolean;
  index: number;
}

export interface TargetList {
  maList: MAItem[];
  maVolumeList: MAItem[];
  bollN: string;
  bollP: string;
  macdS: string;
  macdL: string;
  macdM: string;
  kdjN: string;
  kdjM1: string;
  kdjM2: string;
  rsiList: MAItem[];
  wrList: MAItem[];
}

export interface ColorList {
  increaseColor: number | ColorValue;
  decreaseColor: number | ColorValue;
}

export interface ConfigList {
  colorList: ColorList;
  targetColorList: (number | ColorValue)[];
  minuteLineColor: number | ColorValue;
  minuteGradientColorList: (number | ColorValue)[];
  minuteGradientLocationList: number[];
  backgroundColor: number | ColorValue;
  textColor: number | ColorValue;
  gridColor: number | ColorValue;
  candleTextColor: number | ColorValue;
  panelBackgroundColor: number | ColorValue;
  panelBorderColor: number | ColorValue;
  panelTextColor: number | ColorValue;
  selectedPointContainerColor: number | ColorValue;
  selectedPointContentColor: number | ColorValue;
  closePriceCenterBackgroundColor: number | ColorValue;
  closePriceCenterBorderColor: number | ColorValue;
  closePriceCenterTriangleColor: number | ColorValue;
  closePriceCenterSeparatorColor: number | ColorValue;
  closePriceRightBackgroundColor: number | ColorValue;
  closePriceRightSeparatorColor: number | ColorValue;
  closePriceRightLightLottieFloder?: string;
  closePriceRightLightLottieScale?: number;
  closePriceRightLightLottieSource?: string;
  panelGradientColorList: (number | ColorValue)[];
  panelGradientLocationList: number[];
  mainFlex: number;
  volumeFlex: number;
  paddingTop: number;
  paddingBottom: number;
  paddingRight: number;
  itemWidth: number;
  candleWidth: number;
  minuteVolumeCandleColor: number | ColorValue;
  minuteVolumeCandleWidth: number;
  macdCandleWidth: number;
  headerTextFontSize: number;
  rightTextFontSize: number;
  candleTextFontSize: number;
  panelTextFontSize: number;
  panelMinWidth: number;
  fontFamily?: string;
}

export interface DrawList {
  shotBackgroundColor?: number | ColorValue;
  drawType?: number;
  shouldReloadDrawItemIndex?: number;
  drawShouldContinue?: boolean;
  drawColor?: number | ColorValue;
  drawLineHeight?: number;
  drawDashWidth?: number;
  drawDashSpace?: number;
  drawIsLock?: boolean;
  shouldFixDraw?: boolean;
  shouldClearDraw?: boolean;
}

export interface OptionListData {
  modelArray: KLineDataItem[];
  shouldScrollToEnd?: boolean;
  targetList?: TargetList;
  price?: number;
  volume?: number;
  primary?: number;
  second?: number;
  time?: number;
  configList?: ConfigList;
  drawList?: DrawList;
}

export interface DrawEvent {
  nativeEvent: {
    [key: string]: any;
  };
}

export interface DrawPointEvent {
  nativeEvent: {
    pointCount: number;
    [key: string]: any;
  };
}

export interface RNKLineViewProps {
  /**
   * Style for the K-line chart container
   */
  style?: ViewStyle;

  /**
   * JSON stringified configuration and data for the K-line chart
   */
  optionList?: string;

  /**
   * Callback fired when a draw item is touched
   */
  onDrawItemDidTouch?: (event: DrawEvent) => void;

  /**
   * Callback fired when a draw item is completed
   */
  onDrawItemComplete?: (event: DrawEvent) => void;

  /**
   * Callback fired when a draw point is completed
   */
  onDrawPointComplete?: (event: DrawPointEvent) => void;
}

/**
 * React Native K-Line View Component
 * 
 * A high-performance native K-line (candlestick) chart component for React Native.
 * Supports multiple technical indicators (MA, BOLL, MACD, KDJ, RSI, WR) and drawing tools.
 * 
 * @example
 * ```tsx
 * import RNKLineView from 'react-native-kline-view';
 * 
 * const optionList = {
 *   modelArray: klineData,
 *   shouldScrollToEnd: true,
 *   price: 2,
 *   volume: 0,
 *   primary: 1,
 *   second: 3,
 *   configList: { ... },
 *   targetList: { ... },
 *   drawList: { ... }
 * };
 * 
 * <RNKLineView
 *   style={{ flex: 1 }}
 *   optionList={JSON.stringify(optionList)}
 *   onDrawItemDidTouch={(event) => console.log(event.nativeEvent)}
 *   onDrawItemComplete={(event) => console.log(event.nativeEvent)}
 *   onDrawPointComplete={(event) => console.log(event.nativeEvent.pointCount)}
 * />
 * ```
 */
export default class RNKLineView extends Component<RNKLineViewProps> {}
