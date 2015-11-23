var grid_space = 20, // 格子间的间隔
    grid_width = 100, // 格子的边长
    numbers = new Array(), // 存数字的数组
    last_numbers = new Array(), // 存未移动前数字的数组
    is_success = 'success', // 成功
    is_fail = 'fail'; // 失败
// 初始化用于存数字的数组和未移动前的数组
for (var i = 0; i < 4; i++) {
    numbers[i] = new Array();
    last_numbers[i] = new Array();
    for (var j = 0; j < 4; j++) {
        numbers[i][j] = 0;
        last_numbers[i][j] = 0;
    }
}
/*-----------------------------------*/
$(document).ready(function() {
    new_game();
    set_score();
});