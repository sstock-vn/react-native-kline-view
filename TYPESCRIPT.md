# TypeScript Support

This document describes the TypeScript support added to the react-native-kline-view library.

## Files Added

### 1. index.d.ts
Comprehensive TypeScript type definitions for the library including:
- **Component Types**: `RNKLineView`, `RNKLineViewProps`
- **Data Types**: `KLineDataItem`, `SelectedItem`, `MAItem`
- **Configuration Types**: `OptionListData`, `ConfigList`, `DrawList`, `TargetList`, `ColorList`
- **Event Types**: `DrawEvent`, `DrawPointEvent`

All types are fully documented with JSDoc comments for better IDE support.

### 2. tsconfig.json
TypeScript compiler configuration for the library with:
- Strict type checking enabled
- Declaration file generation
- ES2017 target with React Native JSX support
- Proper module resolution for React Native

### 3. typescript-example.tsx
Comprehensive usage examples demonstrating:
- Class component usage with TypeScript
- Functional component usage with hooks
- Type-safe helper functions
- Configuration builder pattern
- Proper event handler typing

## Package.json Updates

Added the following fields and dependencies:
```json
{
  "types": "index.d.ts",
  "description": "A high-performance React Native K-line (candlestick) chart component with technical indicators support",
  "keywords": ["react-native", "kline", "candlestick", "chart", "trading", "technical-indicators"],
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-native": ">=0.66.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-native": "^0.70.0",
    "typescript": "^5.0.0"
  }
}
```

## Usage in TypeScript Projects

### Installation
```bash
yarn add react-native-kline-view
# or
npm install react-native-kline-view
```

### Basic TypeScript Usage
```tsx
import React from 'react';
import RNKLineView, { KLineDataItem, OptionListData } from 'react-native-kline-view';

const data: KLineDataItem[] = [
  {
    id: 1640000000000,
    time: 1640000000000,
    open: 50000,
    high: 51000,
    low: 49500,
    close: 50500,
    vol: 1234,
    volume: 1234,
  },
];

const config: OptionListData = {
  modelArray: data,
  shouldScrollToEnd: true,
  price: 2,
  volume: 0,
};

export const MyChart = () => (
  <RNKLineView 
    style={{ flex: 1 }}
    optionList={JSON.stringify(config)} 
  />
);
```

## Type Safety Benefits

1. **IntelliSense Support**: Full autocomplete for all props and configuration options
2. **Compile-Time Validation**: Catch errors before runtime
3. **Refactoring Safety**: Rename and refactor with confidence
4. **Documentation**: Inline type documentation in your IDE
5. **Better Developer Experience**: Discover available options while coding

## Exported Types

### Main Component
- `RNKLineView` - The main chart component class
- `RNKLineViewProps` - Props interface for the component

### Data Types
- `KLineDataItem` - Individual candlestick data point
- `SelectedItem` - Info panel item structure
- `MAItem` - Moving average configuration item

### Configuration Types
- `OptionListData` - Complete chart configuration
- `ConfigList` - Visual styling configuration
- `DrawList` - Drawing tools configuration
- `TargetList` - Technical indicator parameters
- `ColorList` - Color scheme configuration

### Event Types
- `DrawEvent` - Drawing item touch/complete events
- `DrawPointEvent` - Drawing point complete events

## Examples

For detailed examples, see:
- [typescript-example.tsx](./typescript-example.tsx) - Comprehensive TypeScript usage examples
- [example/App.js](./example/App.js) - Full-featured JavaScript implementation

## Notes

- All type definitions are compatible with TypeScript 4.x and 5.x
- The library provides full type safety while maintaining JavaScript compatibility
- Type definitions follow React Native and React conventions
- All exported types are available for import and use in your TypeScript projects

## Support

For TypeScript-specific issues or questions:
- Check the [typescript-example.tsx](./typescript-example.tsx) for usage patterns
- Review the [index.d.ts](./index.d.ts) for complete type definitions
- Open an issue on GitHub for additional support
