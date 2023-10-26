import {map} from 'nanostores'

export const product = map({})
export const scores = map({})

export function addElementvalues(productInfo, scoresInfo) {
    product.setKey('productInfo', productInfo.product);
    scores.setKey('scoresInfo',  scoresInfo.product)
}
