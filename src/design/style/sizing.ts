import {capitalize} from '~/utils/function';
import {PickStyle} from './types';

type SizingProperty = 'width' | 'height';

type RoundProperty = SizingProperty | 'borderRadius';

type AcceptValue = number | string | undefined;

interface SizingWithPresets<T extends SizingProperty> {
  readonly full: PickStyle<T>;

  readonly min: (size: AcceptValue) => PickStyle<`min${Capitalize<T>}`>;
  readonly max: (size: AcceptValue) => PickStyle<`max${Capitalize<T>}`>;
}

interface Sizing<T extends SizingProperty> extends SizingWithPresets<T> {
  (size: AcceptValue): PickStyle<T>;
}

function sizing(
  property: SizingProperty,
  size: AcceptValue,
): PickStyle<typeof property>;
function sizing(property: SizingProperty, size: AcceptValue) {
  return {
    [property]: size,
  };
}

function createSizingWithPresets<T extends SizingProperty>(
  property: T,
): Sizing<T> {
  const _sizing = (size: AcceptValue) => sizing(property, size);

  _sizing.full = sizing(property, '100%');

  _sizing.min = (size: AcceptValue) => {
    return {
      [`min${capitalize(property)}`]: size,
    };
  };

  _sizing.max = (size: AcceptValue) => {
    return {
      [`max${capitalize(property)}`]: size,
    };
  };

  return _sizing as Sizing<T>;
}

export const width = createSizingWithPresets<'width'>('width');

export const height = createSizingWithPresets<'height'>('height');

interface Square {
  (size: AcceptValue): PickStyle<SizingProperty>;

  readonly full: PickStyle<SizingProperty>;
}

function getSquareStyle(size: AcceptValue): PickStyle<SizingProperty> {
  return {
    width: size,
    height: size,
  };
}

function createSquare(): Square {
  const square = (size: AcceptValue) => getSquareStyle(size);

  square.full = getSquareStyle('100%');

  return square;
}

export const square = createSquare();

export function round(
  size: AcceptValue,
  borderRadius: number,
): PickStyle<RoundProperty>;
export function round(size: AcceptValue, borderRadius: number) {
  return {
    width: size,
    height: size,
    borderRadius,
  };
}

export function circle(size: number): PickStyle<RoundProperty>;
export function circle(size: number) {
  return round(size, size / 2);
}
