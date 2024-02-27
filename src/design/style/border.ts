import {capitalize} from '~/utils/function';
import {PickStyle} from './types';

interface Border {
  (width: number, color: string): PickStyle<'borderWidth' | 'borderColor'>;

  readonly top: (
    width: number,
    color: string,
  ) => PickStyle<'borderTopWidth' | 'borderTopColor'>;

  readonly right: (
    width: number,
    color: string,
  ) => PickStyle<'borderRightWidth' | 'borderRightColor'>;

  readonly bottom: (
    width: number,
    color: string,
  ) => PickStyle<'borderBottomWidth' | 'borderBottomColor'>;

  readonly left: (
    width: number,
    color: string,
  ) => PickStyle<'borderLeftWidth' | 'borderLeftColor'>;
}

interface Radius {
  (value: number): PickStyle<'borderRadius'>;
  readonly top: (
    value: number,
  ) => PickStyle<'borderTopLeftRadius' | 'borderTopRightRadius'>;
  readonly right: (
    value: number,
  ) => PickStyle<'borderTopRightRadius' | 'borderBottomRightRadius'>;
  readonly bottom: (
    value: number,
  ) => PickStyle<'borderBottomLeftRadius' | 'borderBottomRightRadius'>;
  readonly left: (
    value: number,
  ) => PickStyle<'borderTopLeftRadius' | 'borderBottomLeftRadius'>;

  readonly topLeft: (value: number) => PickStyle<'borderTopLeftRadius'>;
  readonly topRight: (value: number) => PickStyle<'borderTopRightRadius'>;
  readonly bottomRight: (value: number) => PickStyle<'borderBottomRightRadius'>;
  readonly bottomLeft: (value: number) => PickStyle<'borderBottomLeftRadius'>;

  readonly withOutTop: (
    value: number,
  ) => PickStyle<'borderBottomLeftRadius' | 'borderBottomRightRadius'>;
  readonly withOutRight: (
    value: number,
  ) => PickStyle<'borderTopLeftRadius' | 'borderBottomLeftRadius'>;
  readonly withOutBottom: (
    value: number,
  ) => PickStyle<'borderTopLeftRadius' | 'borderTopRightRadius'>;
  readonly withOutLeft: (
    value: number,
  ) => PickStyle<'borderTopRightRadius' | 'borderBottomRightRadius'>;

  readonly withOutTopLeft: (
    value: number,
  ) => PickStyle<
    | 'borderTopRightRadius'
    | 'borderBottomRightRadius'
    | 'borderBottomLeftRadius'
  >;
  readonly withOutTopRight: (
    value: number,
  ) => PickStyle<
    'borderTopLeftRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius'
  >;
  readonly withOutBottomRight: (
    value: number,
  ) => PickStyle<
    'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderBottomLeftRadius'
  >;
  readonly withOutBottomLeft: (
    value: number,
  ) => PickStyle<
    'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderBottomRightRadius'
  >;
}

const radiusProperties = [
  ['top', 'topLeft', 'topRight'],
  ['right', 'topRight', 'bottomRight'],
  ['bottom', 'bottomLeft', 'bottomRight'],
  ['left', 'topLeft', 'bottomLeft'],
] as const;
const radiusCornerProperties = [
  'topLeft',
  'topRight',
  'bottomRight',
  'bottomLeft',
] as const;
const radiusWithOutProperties = [
  ['top', 'bottomLeft', 'bottomRight'],
  ['right', 'topLeft', 'bottomLeft'],
  ['bottom', 'topLeft', 'topRight'],
  ['left', 'topRight', 'bottomRight'],
] as const;
const radiusWithOutCornerProperties = [
  ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'],
  ['topRight', 'bottomRight', 'bottomLeft', 'topLeft'],
  ['bottomRight', 'bottomLeft', 'topLeft', 'topRight'],
  ['bottomLeft', 'topLeft', 'topRight', 'bottomRight'],
] as const;

function createRadius() {
  const _radius = (value: number) => ({
    borderRadius: value,
  });

  for (const [position, ...properties] of radiusProperties) {
    (_radius as any)[position] = (value: number) => {
      const style: any = {};

      for (const property of properties) {
        style[`border${capitalize(property)}Radius`] = value;
      }

      return style;
    };
  }

  for (const property of radiusCornerProperties) {
    (_radius as any)[property] = (value: number) => ({
      [`border${capitalize(property)}Radius`]: value,
    });
  }

  for (const [withOut, ...properties] of radiusWithOutProperties) {
    (_radius as any)[`withOut${capitalize(withOut)}`] = (value: number) => {
      const style: any = {};

      for (const property of properties) {
        style[`border${capitalize(property)}Radius`] = value;
      }

      return style;
    };
  }

  for (const [withOut, ...properties] of radiusWithOutCornerProperties) {
    (_radius as any)[`withOut${capitalize(withOut)}`] = (value: number) => {
      const style: any = {};

      for (const property of properties) {
        style[`border${capitalize(property)}Radius`] = value;
      }

      return style;
    };
  }

  return _radius as Radius;
}

export const radius = createRadius();

function createBorder() {
  const _border = (width: number, color: string) => ({
    borderWidth: width,
    borderColor: color,
  });

  for (const property of ['top', 'right', 'bottom', 'left']) {
    (_border as any)[property] = (width: number, color: string) => ({
      [`border${capitalize(property)}Width`]: width,
      [`border${capitalize(property)}Color`]: color,
    });
  }

  return _border as Border;
}

export const border = createBorder();
