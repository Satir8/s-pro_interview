export function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const getPercentage = (current: number, total: number) =>
  (Math.abs(current) / Math.abs(total)) * 100;
