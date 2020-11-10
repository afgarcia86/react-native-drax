import React, { PropsWithChildren, ReactElement } from 'react';
import { DraxListProps } from './types';
export declare const DraxList: <T extends unknown>({ data, style, itemStyles, renderItemContent, renderItemHoverContent, onItemDragStart, onItemDragPositionChange, onItemDragEnd, onItemReorder, id: idProp, reorderable: reorderableProp, draggable: draggableProp, onScroll: onScrollProp, ...props }: React.PropsWithChildren<DraxListProps<T>>) => ReactElement | null;
