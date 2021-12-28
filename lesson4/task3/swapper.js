let swapper = {
    swap(array, item1Index, item2Index){
        let temp = array[item1Index];
        array[item1Index] = array[item2Index];
        array[item2Index] = temp;
    }
};