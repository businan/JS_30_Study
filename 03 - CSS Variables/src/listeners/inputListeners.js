import handleUpdate from '../handlers/handleUpdate.js'
import { inputs } from '../helper/inputHelper.js'

export const changeEvent = inputs.forEach(input => input.addEventListener('change', handleUpdate));
export const mouseMoveEvent = inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

