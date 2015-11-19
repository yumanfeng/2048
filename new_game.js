function new_game() {
    // 初始化棋盘
    init();
    // 随机一个位置产生一个随机数字
    create_one_number();
    create_one_number();
}
// 随机一个位置产生随机数字
function create_one_number() {
    // 随机2或者4
    var random_number = Math.random() < 0.5 ? 2 : 4;
    // 随机产生一个位置
    var randx, randy;
    while (true) {
        randx = Math.floor(Math.random() * 4);
        randy = Math.floor(Math.random() * 4);
        if (numbers[randx][randy] == 0) {
            break;
        }
    }
    numbers[randx][randy] = random_number;
    var grid = $('#grid_' + randx + '_' + randy);
    grid.css({
        'background-color': get_backgroundcolor(random_number)
    });
    grid.text(random_number);
}
// 数字的背景颜色
function get_backgroundcolor(a) {
    switch (a) {
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
                'top': get_top(j),
                'left': get_left(i),
                'background-color': get_backgroundcolor(numbers[i][j])
            });
        }
    }
}
// 相对于父元素的top
function get_top(j) {
    return grid_space + (grid_width + grid_space) * j + 'px';
}
// 相对于父元素的left
function get_left(i) {
    return grid_space + (grid_width + grid_space) * i + 'px';
}