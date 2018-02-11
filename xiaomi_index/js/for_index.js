/**
 * Created by zlh on 2018.02.11.
 */
$(".header-center > ul > li > a").on("mouseover",function () {
    var $copy=$(".mi-images-1").clone();
    $(".header > .content").append($copy);
    // $copy.css({
    //     "position":"absolute"
    // });
    console.log($copy)
    console.log($(".header-center > li > a"))
})