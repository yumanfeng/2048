function new_game() {
    // 初始化棋盘
    init();
    // 随机一个位置产生一个随机数字
    create_one_number();
    create_one_number();
    set_score();
}
// 初始化棋盘
function init() {
    var grid;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            // 初始化格子位置
            grid = $('#grid_' + i + '_' + j);
            grid.text('');
            numbers[i][j] = 0;
            grid.css({
                'top': get_top(i),
                'left': get_left(j),
                'background-color': get_number_backgroundcolor(numbers[i][j])
            });
        }
    }
}
// 随机一个位置产生随机数字
// 
function create_one_number() {
    // 随机2或者4
    var random_number = Math.random() < 0.5 ? 2 : 4;
    // 随机产生一个位置
    var randx, randy;
    while (true) {
        randx = Math.floor(Math.random() * 4);
        randy = Math.floor(Math.random() * 4);
        if (numbers[randx][randy] == 0) {
            numbers[randx][randy] = random_number;
            break;
        }
    }
    show_number(randx, randy);
}
// 在i_j的位置显示number且显示number背景颜色
function show_number(i, j) {
    // numbers[i][j] = number;
    var grid = $('#grid_' + i + '_' + j);
    grid.css({
        'background-color': get_number_backgroundcolor(numbers[i][j]),
        'font-size': get_number_font_size(numbers[i][j]),
        // 'color':get_number_color(number)
    });
    if (numbers[i][j] != 0) { // 不为0的时候显示数字
        grid.text(numbers[i][j]);
    } else { // 为0显示为空
        grid.text("");
    }
    grid.animate({
        width: grid_width,
        height: grid_width,
        left: get_left(j),
        top: get_top(i)
    }, 1000);
}
// 相对于父元素的top
function get_top(i) {
    return grid_space + (grid_width + grid_space) * i + 'px';
}
// 相对于父元素的left
function get_left(j) {
    return grid_space + (grid_width + grid_space) * j + 'px';
}
// 获取数字的背景颜色
function get_number_backgroundcolor(number) {
    switch (number) {
        case 2:
            return 'rgb(144,238,144)';
            break;
        case 4:
            return 'rgb(255,140,105)';
            break;
        case 8:
            return 'rgb(255,64,64)';
            break;
        case 16:
            return 'rgb(255,48,48)';
            break;
        case 32:
            return 'rgb(255,127,36)';
            break;
        case 64:
            return 'rgb(255,165,79)';
            break;
        case 128:
            return 'rgb(255,165,0)';
            break;
        case 256:
            return 'rgb(255,127,0)';
            break;
        case 512:
            return 'rgb(255,69,0)';
            break;
        case 1024:
            return 'rgb(255,20,147)';
            break;
        case 2048:
            return 'rgb(255,215,0)';
            break;
        default:
            return 'rgb(220, 220, 220)';
    }
}
// 位数不同的数对应字体大小
function get_number_font_size(number) {
    var m = number.toString().length; // 算出number为一个几位数
    return 5 - (m - 1) + 'em';
}