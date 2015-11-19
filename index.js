var grid_space = 20, // 格子间的间隔
    grid_width = 100, // 格子的边长
    numbers = new Array(); // 存数字的数组
// 初始化用于存数字的数组
for (var i = 0; i < 4; i++) {
    numbers[i] = new Array();
    for (var j = 0; j < 4; j++) {
        numbers[i][j] = 0;
    }
}
/*-----------------------------------*/
$(document).ready(function() {
    new_game();
});