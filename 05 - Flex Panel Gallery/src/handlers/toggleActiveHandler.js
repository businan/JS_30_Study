

export function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
}