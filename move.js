var have_moved = false; // 标记数字是否有移动
var max = []; // 比较最大数数组
$(document).keydown(function(event) {
    move(event.keyCode);
});
// 数字向左移动
function numbers_move_left() {
    for (var i = 0; i < 4; i++) {
        var index = 0, // 存放数字的位置
            num1 = undefined, // 第一个加数的下标
            num2 = undefined; // 第二个加数的下标
        for (var j = 0; j < 4; j++) {
            // 如果一行只有一个数字
            last_numbers[i][j] = numbers[i][j]; // 把还未开始移动的数组存下来
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
                    if (num1 < 4 && j == 3) { // j=3，num1位置还有数字未赋值给index位置
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
}
// 数字向右移动
function numbers_move_right() {
    for (var i = 0; i < 4; i++) {
        var index = 3, // 存放数字的位置
            num1 = undefined, // 第一个加数的下标
            num2 = undefined; // 第二个加数的下标
        for (var j = 3; j > -1; j--) {
            // 如果一行只有一个数字
            last_numbers[i][j] = numbers[i][j]; // 把还未开始移动的数组存下来
            if (j == 0 && num2 == undefined) {
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
                    if (num1 != index) {
                        numbers[i][num1] = 0;
                    }
                    numbers[i][num2] = 0;
                    index--;
                    num1 = undefined;
                    num2 = undefined;
                    continue;
                } else {
                    numbers[i][index] = numbers[i][num1];
                    if (num1 != index) {
                        numbers[i][num1] = 0;
                    }
                    index--;
                    num1 = num2;
                    num2 = undefined;
                    if (num1 > -1 && j == 0) { // j=3，num1位置还有数字未赋值给index位置
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
}
// 数字向上移动
function numbers_move_up() {
    for (var j = 0; j < 4; j++) {
        var index = 0, // 存放数字的位置
            num1 = undefined, // 第一个加数的下标
            num2 = undefined; // 第二个加数的下标
        for (var i = 0; i < 4; i++) {
            // 如果一行只有一个数字
            last_numbers[i][j] = numbers[i][j]; // 把还未开始移动的数组存下来
            if (i == 3 && num2 == undefined) {
                if (num1 == undefined && numbers[i][j] != 0) { // 这个唯一的数字在最后一位
                    num1 = i;
                    numbers[index][j] = numbers[num1][j];
                    numbers[num1][j] = 0;
                    break;
                }
                if (num1 != undefined && numbers[i][j] == 0) {
                    numbers[index][j] = numbers[num1][j];
                    if (num1 != index) {
                        numbers[num1][j] = 0;
                    }
                    break;
                }
            }
            if (numbers[i][j] != 0) {
                if (num1 == undefined) { // 获得第一个加数
                    num1 = i;
                    continue;
                }
                if (num2 == undefined) { // 获得第二个加数
                    num2 = i;
                }
                if (numbers[num1][j] == numbers[num2][j]) { // 两个加数相等 则相加
                    numbers[index][j] = numbers[num1][j] + numbers[num2][j];
                    if (num1 != index) {
                        numbers[num1][j] = 0;
                    }
                    numbers[num2][j] = 0;
                    index++;
                    num1 = undefined;
                    num2 = undefined;
                    continue;
                } else {
                    numbers[index][j] = numbers[num1][j];
                    if (num1 != index) {
                        numbers[num1][j] = 0;
                    }
                    index++;
                    num1 = num2;
                    num2 = undefined;
                    if (num1 < 4 && i == 3) { // 遍历到最后一位，num1位置还有数字未赋值给index位置
                        numbers[index][j] = numbers[num1][j];
                        if (num1 != index) {
                            numbers[num1][j] = 0;
                        }
                        index++;
                        num1 = undefined;
                    }
                }
            }
        }
    }
}
// 数字向下移动
function numbers_move_down() {
    for (var j = 0; j < 4; j++) {
        var index = 3, // 存放数字的位置
            num1 = undefined, // 第一个加数的下标
            num2 = undefined; // 第二个加数的下标
        for (var i = 3; i > -1; i--) {
            // 如果一行只有一个数字
            last_numbers[i][j] = numbers[i][j]; // 把还未开始移动的数组存下来
            if (i == 0 && num2 == undefined) {
                if (num1 == undefined && numbers[i][j] != 0) { // 这个唯一的数字在最后一位
                    num1 = i;
                    numbers[index][j] = numbers[num1][j];
                    numbers[num1][j] = 0;
                    break;
                }
                if (num1 != undefined && numbers[i][j] == 0) {
                    numbers[index][j] = numbers[num1][j];
                    if (num1 != index) {
                        numbers[num1][j] = 0;
                    }
                    break;
                }
            }
            if (numbers[i][j] != 0) {
                if (num1 == undefined) { // 获得第一个加数
                    num1 = i;
                    continue;
                }
                if (num2 == undefined) { // 获得第二个加数
                    num2 = i;
                }
                if (numbers[num1][j] == numbers[num2][j]) { // 两个加数相等 则相加
                    numbers[index][j] = numbers[num1][j] + numbers[num2][j];
                    if (num1 != index) {
                        numbers[num1][j] = 0;
                    }
                    numbers[num2][j] = 0;
                    index--;
                    num1 = undefined;
                    num2 = undefined;
                    continue;
                } else {
                    numbers[index][j] = numbers[num1][j];
                    if (num1 != index) {
                        numbers[num1][j] = 0;
                    }
                    index--;
                    num1 = num2;
                    num2 = undefined;
                    if (num1 > -1 && i == 0) { // 遍历到最后一位，num1位置还有数字未赋值给index位置
                        numbers[index][j] = numbers[num1][j];
                        if (num1 != index) {
                            numbers[num1][j] = 0;
                        }
                        index--;
                        num1 = undefined;
                    }
                }
            }
        }
    }
}


function move(key_code) {
    var key = true; // 当按键为上下左右是才为true
    switch (key_code) {
        case 37:
            numbers_move_left();
            break;
        case 38:
            numbers_move_up();
            break;
        case 39:
            numbers_move_right();
            break;
        case 40:
            numbers_move_down();
            break;
        default:
            key = false;
    }
    if (key) {
        // 显示移动后的数组
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                show_number(i, j, numbers[i][j]);
                if (last_numbers[i][j] != numbers[i][j]) { // 判断移动前和移动后是否有数字变化
                    have_moved = true;
                }
            }
        }
        if (have_moved && have_space()) { // 有数字移动且有空格就创建一个数字
            create_one_number();
        }
        is_game_over();
        have_moved = false; // 移动完毕后将是否移动标记还原
    }
}

// 游戏结束
function is_game_over(){
	if(!have_space() && !near_have_same_number()){
		alert(is_fail);
	}

}
// 格子中是否还有空格
function have_space() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (numbers[i][j] == 0) {
                return true;
            }
        }
    }
}
// 相邻的数字有相同的数字
function near_have_same_number(){
	for(var i = 0;i < 3;i++){ // 最后一行和最后一列不在此进行比较
		for(var j = 0;j < 3;j++){
			if(numbers[i][j] == numbers[i+1][j] || numbers[i][j] == numbers[i][j+1]){ // 与这个数的右边和下边的数作比较
				return true;
			}
		}
	}
	for(var a = 0;a < 3;a++){ // 最后一行、最后一列的数字与其右边、下边的数作比较
		if(numbers[a][3] == numbers[a+1][3] || numbers[3][a] == numbers[3][a+1]){
			return true;
		}
	}
	return false;
}