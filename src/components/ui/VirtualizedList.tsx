import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { VirtualizedListProps } from '../../types';

function VirtualizedList<T>({ 
  items, 
  itemHeight, 
  renderItem, 
  className = '' 
}: VirtualizedListProps<T>) {
  const ItemRenderer = React.memo(({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      {renderItem(items[index], index)}
    </div>
  ));
  
  ItemRenderer.displayName = 'ItemRenderer';

  return (
    <div className={className} style={{ height: '400px' }}>
      <List
        height={400}
        itemCount={items.length}
        itemSize={itemHeight}
        itemData={items}
        overscanCount={5}
      >
        {ItemRenderer}
      </List>
    </div>
  );
}

export default React.memo(VirtualizedList) as typeof VirtualizedList;