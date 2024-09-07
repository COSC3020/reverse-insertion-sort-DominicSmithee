function insertionSortReverse(array) {
    //console.log(array.length);
    if(array.length != 0){
        // this ^^^ might be pointless but my machine is breaking without it so... ¯\_(ツ)_/¯
    for(i=array.length; i >= 0 ; i--){
       // var count;
       // count++;
        var val = array[i-2];
        //console.log('val: ' + val);
       // console.log('outside array: ' + array);
        if(val != undefined){
            for(var j = i-1; j < array.length && j > 0 && array[j] < val; j++){
               // console.log('j: ' + j);
                //console.log(array);
                array[j-1] = array[j];
                //console.log('HEYLLO' + array);
            }
        array[j-1] = val;
        //console.log('second: ' + array);
        }
    }
    }
    return array;

}
//listy = [5,4,3,2,1,0];
//console.log(insertionSortReverse(listy));

//listB = [0,1,2,3,4,5];
//console.log(insertionSortReverse(listB));

//listC = [];
//console.log(insertionSortReverse(listC));
