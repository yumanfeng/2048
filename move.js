$(document).keydown(function(event) {
    /* Act on the event */
    switch (event.keyCode) {
        case 37: // 左
            event.preventDefault();
            move_left();
            create_one_number();
            break;
        case 38: // 上
            event.preventDefault();
            break;
        case 39: // 右
            event.preventDefault();
            break;
        case 40: // 下
            event.preventDefault();
            break;
        default:
            ;
    }
});
// 向左移动
function move_left() {
    for (var i = 0; i < 4; i++) {
        var index = 0, // 存放数字的位置
            num1 = undefined, // 第一个加数的下标
            num2 = undefined; // 第二个加数的下标
        for (var j = 0; j < 4; j++) {
            // 如果一行只有一个数字
            if (j == 3 && num2 == undefined) {
                if (num1 == undefined && numbers[i][j] != 0) { // 这个唯一的数字在最后一位
                    num1 = j;
                    numbers[i][index] = numbers[i][num1];
                    numbers[i][num1] = 0;
                    break;
                }
                if (num1 != undefined && numbers[i][j] == 0) {
                    numbers[i][index] = numbers[i][num1];
                    if (num1 != index) {
                        numbers[i][num1] = 0;
                    }
                    break;
                }
            }
            if (numbers[i][j] != 0) {
                if (num1 == undefined) { // 获得第一个加数
                    num1 = j;
                    continue;
                }
                if (num2 == undefined) { // 获得第二个加数
                    num2 = j;
                }
                if (numbers[i][num1] == numbers[i][num2]) { // 两个加数相等 则相加
                    numbers[i][index] = numbers[i][num1] + numbers[i][num2];
                    // has_sum[i][index] = true;!
                    if (num1 != index) {
                        numbers[i][num1] = 0;
                    }
                    numbers[i][num2] = 0;
                    index++;
                    num1 = undefined;
                    num2 = undefined;
                    continue;
                } else {
                    numbers[i][index] = numbers[i][num1];
                    if (num1 != index) {
                        numbers[i][num1] = 0;
                    }
                    index++;
                    num1 = num2;
                    num2 = undefined;
                    if (num1 < 4 && j == 3) {   // j=3，num1位置还有数字未赋值给index位置
                        numbers[i][index] = numbers[i][num1];
                        if (num1 != index) {
                            numbers[i][num1] = 0;
                        }
                        index++;
                        num1 = undefined;
                    }
                }
            }
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            show_number(i, j, numbers[i][j]);
        }
    }
}
function can_move_left(){ // 是否能够左移

}
// 
// 
// function move_left(){
// 	for(var i  = 0;i<4;i++){
// 		var index=0,num1=0,num2 = 1;
// 		while(true){
// 			// TODO: need some condition to break;
// 			if(num2>3){
// 				break;
// 			}
// 			if(num2==3){
// 				if(numbers[i][num1]!=0){
// 					if(numbers[i][num2]==0){
// 						numbers[i][index]=numbers[i][num1]
// 					}
// 				}else if (numbers[i][num2]!=0){
// 					numbers[i][index]=numbers[i][num2]
// 				}
// 			}
// 			if(numbers[i][num1]==0){
// 				num1++;
// 				num2++;
// 				continue;
// 			}
// 			if(numbers[i][num2]==0){
// 				num2++;
// 				continue;
// 			}
// 			if(numbers[i][num1]==numbers[i][num2]){
// 				numbers[i][index]=numbers[i][num1]+numbers[i][num2];
// 				if (index!=num1){
// 					numbers[i][num1]=0
// 				}
// 				numbers[i][num2]=0;
// 				index++;
// 				num1+=2;
// 			    num2+=2;
// 			}else{
// 				numbers[i][index]=numbers[i][num1];
// 				index ++;
// 				num1=num2;
// 				num2 ++;
// 			}
// 		}
// 	}
// 	for(var i=0;i<4;i++){
// 		for(var j=0;j<4;j++){
// 			show_number(i, j, numbers[i][j]);		
// 		}
// 	}
// }