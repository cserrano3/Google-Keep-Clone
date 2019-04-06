import {DEEP_CLONE} from './constants.js';
export const snapshotToArray = (snapshot) => {
    let snapshots = DEEP_CLONE(snapshot);
    let arr = [];
    Object.keys(snapshots).forEach((c) => arr.push({note: snapshots[c], id: c}));
    return arr;
}
