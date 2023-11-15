import {map, atom} from 'nanostores'

export const product = map({})
export const scores = map({})
export const isScanning = atom(false);

export function addElementvalues(productInfo, scoresInfo) {
    product.setKey('productInfo', productInfo.product);
    scores.setKey('scoresInfo',  scoresInfo.product)
}
export function setScanning(value) {
    isScanning.set(value)
}


