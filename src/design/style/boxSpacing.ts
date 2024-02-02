import {PickStyle, PickStyleProp} from '.';
import {capitalize} from '../../utils/capitalize/function';

type Property = 'margin' | 'padding';

type BoxSpacingStyle<T extends Property> = PickStyle<
  T | `${T}Top` | `${T}Bottom` | `${T}Left` | `${T}Right`
>;

type BoxSpacingObject = {
  x?: number;
  y?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

type BoxSpacingObjectOptionCase<Option extends keyof BoxSpacingObject> = {
  [key in Option]?: number;
} & {
  [P in Exclude<keyof BoxSpacingObject, Option>]?: never;
};

type BoxSpacingObjectOption =
  | BoxSpacingObjectOptionCase<'x' | 'y'>
  | BoxSpacingObjectOptionCase<'x' | 'top' | 'bottom'>
  | BoxSpacingObjectOptionCase<'y' | 'left' | 'right'>
  | BoxSpacingObjectOptionCase<'top' | 'bottom' | 'left' | 'right'>;

type BoxSpacingProps = BoxSpacingObjectOption | number | undefined;

function getStyleProperty<
  T extends Property,
  D extends 'top' | 'bottom' | 'left' | 'right',
>(type: T, direction: D): keyof PickStyleProp<T> {
  return `${type}${capitalize(direction)}` as keyof PickStyleProp<T>;
}

function getBoxSpacingStyle<T extends Property>(
  type: T,
  spacing: BoxSpacingProps,
): BoxSpacingStyle<T>;
function getBoxSpacingStyle<T extends Property>(
  type: T,
  spacing: BoxSpacingProps,
) {
  if (spacing === undefined) {
    return {};
  }

  if (typeof spacing === 'number') {
    return {
      [type]: spacing,
    };
  }

  const style: Partial<PickStyleProp<T>> = {};

  if (spacing.x) {
    style[getStyleProperty(type, 'left')] = style[
      getStyleProperty(type, 'right')
    ] = spacing.x;
  }

  if (spacing.y) {
    style[getStyleProperty(type, 'top')] = style[
      getStyleProperty(type, 'bottom')
    ] = spacing.y;
  }

  if (spacing.top) {
    style[getStyleProperty(type, 'top')] = spacing.top;
  }

  if (spacing.bottom) {
    style[getStyleProperty(type, 'bottom')] = spacing.bottom;
  }

  if (spacing.left) {
    style[getStyleProperty(type, 'left')] = spacing.left;
  }

  if (spacing.right) {
    style[getStyleProperty(type, 'right')] = spacing.right;
  }

  return style;
}

const properties = ['x', 'y', 'top', 'right', 'bottom', 'left'] as const;
const units = ['4', '8', '12', '16', '20', '24', '28', '32'] as const;

interface BoxSpacingPresets<T extends Property> {
  readonly x: (value: number) => PickStyle<`${T}Left` | `${T}Right`>;
  readonly x4: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x8: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x12: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x16: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x20: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x24: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x28: PickStyle<`${T}Left` | `${T}Right`>;
  readonly x32: PickStyle<`${T}Left` | `${T}Right`>;

  readonly y: (value: number) => PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y4: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y8: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y12: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y16: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y20: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y24: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y28: PickStyle<`${T}Top` | `${T}Bottom`>;
  readonly y32: PickStyle<`${T}Top` | `${T}Bottom`>;

  readonly top: (value: number) => PickStyle<`${T}Top`>;
  readonly top4: PickStyle<`${T}Top`>;
  readonly top8: PickStyle<`${T}Top`>;
  readonly top12: PickStyle<`${T}Top`>;
  readonly top16: PickStyle<`${T}Top`>;
  readonly top20: PickStyle<`${T}Top`>;
  readonly top24: PickStyle<`${T}Top`>;
  readonly top28: PickStyle<`${T}Top`>;
  readonly top32: PickStyle<`${T}Top`>;

  readonly right: (value: number) => PickStyle<`${T}Right`>;
  readonly right4: PickStyle<`${T}Right`>;
  readonly right8: PickStyle<`${T}Right`>;
  readonly right12: PickStyle<`${T}Right`>;
  readonly right16: PickStyle<`${T}Right`>;
  readonly right20: PickStyle<`${T}Right`>;
  readonly right24: PickStyle<`${T}Right`>;
  readonly right28: PickStyle<`${T}Right`>;
  readonly right32: PickStyle<`${T}Right`>;

  readonly bottom: (value: number) => PickStyle<`${T}Bottom`>;
  readonly bottom4: PickStyle<`${T}Bottom`>;
  readonly bottom8: PickStyle<`${T}Bottom`>;
  readonly bottom12: PickStyle<`${T}Bottom`>;
  readonly bottom16: PickStyle<`${T}Bottom`>;
  readonly bottom20: PickStyle<`${T}Bottom`>;
  readonly bottom24: PickStyle<`${T}Bottom`>;
  readonly bottom28: PickStyle<`${T}Bottom`>;
  readonly bottom32: PickStyle<`${T}Bottom`>;

  readonly left: (value: number) => PickStyle<`${T}Left`>;
  readonly left4: PickStyle<`${T}Left`>;
  readonly left8: PickStyle<`${T}Left`>;
  readonly left12: PickStyle<`${T}Left`>;
  readonly left16: PickStyle<`${T}Left`>;
  readonly left20: PickStyle<`${T}Left`>;
  readonly left24: PickStyle<`${T}Left`>;
  readonly left28: PickStyle<`${T}Left`>;
  readonly left32: PickStyle<`${T}Left`>;
}

interface BoxSpacing<T extends Property> extends BoxSpacingPresets<T> {
  (spacing: BoxSpacingProps): BoxSpacingStyle<T>;
}

function createBoxSpacingWithPresets<T extends Property>(type: T) {
  const _boxSpacing = (spacing: BoxSpacingProps) =>
    getBoxSpacingStyle(type, spacing);

  for (const property of properties) {
    (_boxSpacing as any)[property] = (value: number) =>
      getBoxSpacingStyle(type, {[property]: value});

    for (const unit of units) {
      (_boxSpacing as any)[property + unit] = getBoxSpacingStyle(type, {
        [property]: parseInt(unit),
      });
    }
  }

  return _boxSpacing as BoxSpacing<T>;
}

export const padding = createBoxSpacingWithPresets('padding');

export const margin = createBoxSpacingWithPresets('margin');

interface Gap {
  (gap: number): PickStyle<'gap'>;
  readonly row: (gap: number) => PickStyle<'rowGap'>;
  readonly column: (gap: number) => PickStyle<'columnGap'>;
}

function createGap() {
  const _gap = (gap: number) => ({
    gap,
  });

  _gap.row = (gap: number) => ({
    rowGap: gap,
  });

  _gap.column = (gap: number) => ({
    columnGap: gap,
  });

  return _gap as Gap;
}

export const gap = createGap();
