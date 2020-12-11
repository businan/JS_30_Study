import { panels } from './data/data.js'
import { toggleOpen } from './handlers/toggleOpenHandler.js'
import { toggleActive } from './handlers/toggleActiveHandler.js'


panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
