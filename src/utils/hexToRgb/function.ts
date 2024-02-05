export class HexToRgbError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HexToRgbError';
  }
}

export function hexToRgb(color: string): readonly [number, number, number];
export function hexToRgb(color: string): readonly [number, number, number] {
  const hex = color.replace('#', '');

  if (hex.length !== 6) {
    throw new HexToRgbError('Invalid hex color');
  }

  if (hex.replace(/[0-9a-fA-F]/g, '').length > 0) {
    throw new HexToRgbError('Invalid hex color');
  }

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4), 16);

  return [red, green, blue] as const;
}
