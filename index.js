var grid_space = 20, // 格子间的间隔
    grid_width = 100; // 格子的边长
$(document).ready(function() {
    new_game();
});

function new_game() {
    // 初始化棋盘
    init();
}
// 初始化棋盘
function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var grid = $('#grid_' + i + '_' + j);
            grid.css({
                'top': get_top(j),
                'left': get_left(i)
            });
        }
    }
}
// 相对于父元素的top
function get_top(j) {
	return grid_space+(grid_width+grid_space)*j + 'px';
}
// 相对于父元素的left
function get_left(i) {
return grid_space+(grid_width+grid_space)*i + 'px';	
}