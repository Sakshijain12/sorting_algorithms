/*export const mergeSort = array => {
    if(array.length === 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleIdx));
    const secondHalf = mergeSort(array.slice(middleIdx));
    const sortedArray = [];
    let i = 0, j=0;
    while(i < firstHalf.length && j < secondHalf.length){
        if(firstHalf[i] < secondHalf[j]){
            sortedArray.push(firstHalf[i]);
            i++;
        }
        else{
            sortedArray.push(secondHalf[j]);
            j++;
        }
    }
    while(i < firstHalf.length){
        sortedArray.push(firstHalf[i]);
        i++;
    }
    while(j < secondHalf.length){
        sortedArray.push(secondHalf[j]);
        j++;
    }
    return sortedArray;
}*/

export function mergeSort(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length -1, auxiliaryArray, animations)
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations){
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx)/2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}


function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

/*function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while(i <= middleIdx && j <= endIdx){
        const animation = {};
        animation.comparison = [i,j];
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animation.swap = [k, i];
            mainArray[k++] = auxiliaryArray[i++];
        }
        else{
            animation.swap = [k,j];
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animation);
    }
    while(i <= middleIdx){
        animations.push({
            comparison: [i,j],
            swap : [k,i],
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j <= endIdx){
        animations.push({
            comparison : [j,j],
            swap : [k, j],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}*/