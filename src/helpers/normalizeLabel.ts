export function normalizeLabel(label: string) {
  const normalizedLabel = label.replace(/([A-Z])/g, ' $1').trim();

  return normalizedLabel.charAt(0).toUpperCase()
    + normalizedLabel.slice(1).toLowerCase();
}
