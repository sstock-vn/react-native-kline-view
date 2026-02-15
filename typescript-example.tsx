// /**
//  * TypeScript Usage Example for React Native KLine View
//  * 
//  * This file demonstrates how to use the library with full TypeScript support.
//  * Note: This is a reference example. Install dependencies (react, react-native) to use in your project.
//  */

// import React, { Component, useRef } from 'react';
// import { View, StyleSheet, processColor } from 'react-native';
// import RNKLineView, {
//   RNKLineViewProps,
//   KLineDataItem,
//   OptionListData,
//   ConfigList,
//   DrawList,
//   TargetList,
//   DrawEvent,
//   DrawPointEvent,
// } from 'react-native-kline-view';

// // Example 1: Class Component Usage
// interface ChartState {
//   klineData: KLineDataItem[];
//   selectedDrawTool: number;
// }

// class KLineChartClass extends Component<{}, ChartState> {
//   private klineRef = React.createRef<RNKLineView>();

//   state: ChartState = {
//     klineData: this.generateSampleData(),
//     selectedDrawTool: 0,
//   };

//   // Generate sample K-line data
//   private generateSampleData(): KLineDataItem[] {
//     const data: KLineDataItem[] = [];
//     let basePrice = 50000;
//     const startTime = Date.now() - 100 * 60 * 60 * 1000; // 100 hours ago

//     for (let i = 0; i < 100; i++) {
//       const change = (Math.random() - 0.5) * 1000;
//       const open = basePrice;
//       const close = basePrice + change;
//       const high = Math.max(open, close) + Math.random() * 500;
//       const low = Math.min(open, close) - Math.random() * 500;

//       data.push({
//         id: startTime + i * 60 * 60 * 1000,
//         time: startTime + i * 60 * 60 * 1000,
//         open: open,
//         high: high,
//         low: low,
//         close: close,
//         vol: Math.random() * 10000,
//         volume: Math.random() * 10000,
//       });

//       basePrice = close;
//     }

//     return data;
//   }

//   // Create typed option list
//   private createOptionList(): OptionListData {
//     const configList: Partial<ConfigList> = {
//       colorList: {
//         increaseColor: processColor('#00C087'),
//         decreaseColor: processColor('#FF3B69'),
//       },
//       backgroundColor: processColor('#1a1a1a'),
//       textColor: processColor('#ffffff'),
//       gridColor: processColor('#2a2a2a'),
//       candleTextColor: processColor('#ffffff'),
//       mainFlex: 0.7,
//       volumeFlex: 0.3,
//     };

//     const targetList: TargetList = {
//       maList: [
//         { title: '5', selected: true, index: 0 },
//         { title: '10', selected: true, index: 1 },
//         { title: '20', selected: true, index: 2 },
//       ],
//       maVolumeList: [
//         { title: '5', selected: true, index: 0 },
//         { title: '10', selected: true, index: 1 },
//       ],
//       bollN: '20',
//       bollP: '2',
//       macdS: '12',
//       macdL: '26',
//       macdM: '9',
//       kdjN: '9',
//       kdjM1: '3',
//       kdjM2: '3',
//       rsiList: [
//         { title: '6', selected: true, index: 0 },
//         { title: '12', selected: true, index: 1 },
//         { title: '24', selected: true, index: 2 },
//       ],
//       wrList: [{ title: '14', selected: true, index: 0 }],
//     };

//     const drawList: DrawList = {
//       drawType: this.state.selectedDrawTool,
//       shouldReloadDrawItemIndex: 0,
//       drawShouldContinue: false,
//       drawColor: processColor('#FF7A00'),
//       drawLineHeight: 2,
//       shouldClearDraw: false,
//     };

//     return {
//       modelArray: this.state.klineData,
//       shouldScrollToEnd: true,
//       price: 2,
//       volume: 0,
//       primary: 1, // MA
//       second: 3, // MACD
//       configList: configList as ConfigList,
//       targetList: targetList,
//       drawList: drawList,
//     };
//   }

//   // Type-safe event handlers
//   private handleDrawItemTouch = (event: DrawEvent): void => {
//     console.log('Draw item touched:', event.nativeEvent);
//   };

//   private handleDrawItemComplete = (event: DrawEvent): void => {
//     console.log('Draw item completed:', event.nativeEvent);
//     this.setState({ selectedDrawTool: 0 });
//   };

//   private handleDrawPointComplete = (event: DrawPointEvent): void => {
//     console.log('Draw point completed, count:', event.nativeEvent.pointCount);
//   };

//   render() {
//     const optionList = this.createOptionList();

//     return (
//       <View style={styles.container}>
//         <RNKLineView
//           ref={this.klineRef}
//           style={styles.chart}
//           optionList={JSON.stringify(optionList)}
//           onDrawItemDidTouch={this.handleDrawItemTouch}
//           onDrawItemComplete={this.handleDrawItemComplete}
//           onDrawPointComplete={this.handleDrawPointComplete}
//         />
//       </View>
//     );
//   }
// }

// // Example 2: Functional Component Usage
// const KLineChartFunction: React.FC = () => {
//   const klineRef = useRef<RNKLineView>(null);

//   // Sample K-line data with proper typing
//   const klineData: KLineDataItem[] = [
//     {
//       id: 1640000000000,
//       time: 1640000000000,
//       open: 50000,
//       high: 51000,
//       low: 49500,
//       close: 50500,
//       vol: 1234.56,
//       volume: 1234.56,
//     },
//     {
//       id: 1640003600000,
//       time: 1640003600000,
//       open: 50500,
//       high: 51500,
//       low: 50000,
//       close: 51200,
//       vol: 2345.67,
//       volume: 2345.67,
//     },
//     // Add more data as needed
//   ];

//   // Create configuration with type safety
//   const optionList: OptionListData = {
//     modelArray: klineData,
//     shouldScrollToEnd: true,
//     price: 2,
//     volume: 2,
//     primary: 1,
//     second: 3,
//   };

//   // Type-safe event handlers
//   const handleDrawTouch = (event: DrawEvent) => {
//     console.log('Touched:', event.nativeEvent);
//   };

//   const handleDrawComplete = (event: DrawEvent) => {
//     console.log('Completed:', event.nativeEvent);
//   };

//   const handlePointComplete = (event: DrawPointEvent) => {
//     console.log('Point count:', event.nativeEvent.pointCount);
//   };

//   return (
//     <View style={styles.container}>
//       <RNKLineView
//         ref={klineRef}
//         style={styles.chart}
//         optionList={JSON.stringify(optionList)}
//         onDrawItemDidTouch={handleDrawTouch}
//         onDrawItemComplete={handleDrawComplete}
//         onDrawPointComplete={handlePointComplete}
//       />
//     </View>
//   );
// };

// // Example 3: Helper function with proper types
// function createKLineDataPoint(
//   timestamp: number,
//   open: number,
//   high: number,
//   low: number,
//   close: number,
//   volume: number
// ): KLineDataItem {
//   return {
//     id: timestamp,
//     time: timestamp,
//     open,
//     high,
//     low,
//     close,
//     vol: volume,
//     volume,
//   };
// }

// // Example usage of helper function
// const sampleData: KLineDataItem[] = [
//   createKLineDataPoint(1640000000000, 50000, 51000, 49500, 50500, 1234.56),
//   createKLineDataPoint(1640003600000, 50500, 51500, 50000, 51200, 2345.67),
// ];

// // Example 4: Type-safe configuration builder
// class KLineConfigBuilder {
//   private config: Partial<OptionListData> = {};

//   setData(data: KLineDataItem[]): this {
//     this.config.modelArray = data;
//     return this;
//   }

//   setPrecision(price: number, volume: number): this {
//     this.config.price = price;
//     this.config.volume = volume;
//     return this;
//   }

//   setIndicators(primary: number, second: number): this {
//     this.config.primary = primary;
//     this.config.second = second;
//     return this;
//   }

//   setScrollToEnd(scroll: boolean): this {
//     this.config.shouldScrollToEnd = scroll;
//     return this;
//   }

//   build(): OptionListData {
//     if (!this.config.modelArray) {
//       throw new Error('modelArray is required');
//     }
//     return this.config as OptionListData;
//   }
// }

// // Usage of the builder with sample data
// const builderExample = () => {
//   const builder = new KLineConfigBuilder();
//   const config = builder
//     .setData(sampleData)
//     .setPrecision(2, 2)
//     .setIndicators(1, 3)
//     .setScrollToEnd(true)
//     .build();
  
//   return config;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a1a',
//   },
//   chart: {
//     flex: 1,
//   },
// });

// export { KLineChartClass, KLineChartFunction, createKLineDataPoint, KLineConfigBuilder };
