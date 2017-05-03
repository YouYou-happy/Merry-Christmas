/**
 * 背景布置
 */
.container .page-a {
    width  : 100%;
    height : 100%;
    background-image: url("http://img.mukewang.com/565d07770001790814410901.png");
    position: absolute;
    z-index: 5;
}


/**
 * 圣诞男孩
 */

.chs-boy {
    width           : 5rem;
    height          : 1.5rem;
    position        : absolute;
    z-index         : 3;
    top             : .1rem;
    right           : -3rem;
    transform       : scale(0.1);
    background      : url(http://img.mukewang.com/565d07490001365329660269.png) -300% -100%;
    background-size : 400% 100%;
}

/**
 * 男孩走路动作
 */

.chs-boy-deer {
    -webkit-animation:chsBoyDeer 0.75s steps(3,end) infinite;
    -moz-animation:chsBoyDeer 0.75s steps(3,end) infinite;
}

@-webkit-keyframes chsBoyDeer {
    0% {
        background-position: -0% 100%;
    }
    100% {
        background-position: -300% 100%;
    }
}
@-moz-keyframes chsBoyDeer {
    0% {
        background-position: -0% 100%;
    }
    100% {
        background-position: -300% 100%;
    }
}


/**
 * 人物停止
 */

.boy-stop-animate {
    -webkit-animation-play-state: paused;
}
