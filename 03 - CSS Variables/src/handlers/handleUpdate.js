export default function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    
    document.querySelector('#imgStyle').style.setProperty(`--${this.name}`, this.value + suffix);
    // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }