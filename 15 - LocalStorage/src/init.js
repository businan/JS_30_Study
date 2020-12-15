// data
import { items } from '../data/data.js';

// listeners
import { addItems } from './listeners/addMenuItem.js';
import { itemsList } from './listeners/toggleMenuItem.js';

// handlers
import { populateList } from './handlers/showItemHandle.js';

populateList(items, itemsList);