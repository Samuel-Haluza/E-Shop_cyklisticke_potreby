export function getIcon(name) {
  const lowerName = name.toLowerCase()
  if (lowerName.includes('bicykel')) return '🚲'
  if (lowerName.includes('cyklistický dres')) return '🎽'
  if (lowerName.includes('dres')) return '👕'
  if (lowerName.includes('rukavice')) return '🧤'
  if (lowerName.includes('prilba')) return '⛑️'
  if (lowerName.includes('fľaša')) return '🚰'
  if (lowerName.includes('pumpa')) return '🔧'
  if (lowerName.includes('okuliare')) return '🕶️'
  if (lowerName.includes('topánky')) return '👟'
  if (lowerName.includes('nohavice')) return '👖'
  return '📦'
}
