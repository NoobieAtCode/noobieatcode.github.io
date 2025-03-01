$(document).ready(()=>{
    $("body #t").append("<div class='winbox'>You Won</div>");
    $("body").append("<div class='resetbutton'>Reset</div>");
    $("div.winbox").hide();
    $("table tr:first-child td").eq(2).addClass("light-on");
    $("table tr:nth-child(2) td").eq(1).addClass("light-on");
    $("table tr:nth-child(3) td").eq(4).addClass("light-on");
    $("table tr:nth-child(4) td").eq(2).addClass("light-on");
    $("table tr:nth-child(5) td").eq(3).addClass("light-on");
    $("table").on("click", "tr td", (event) => {
        $(event.target).toggleClass("light-on");
        let localindex = $(event.target).index();
        $(event.target.previousSibling).toggleClass('light-on');
        $(event.target.nextSibling).toggleClass('light-on');
        $(event.target).parent().prev().children().eq(localindex).toggleClass('light-on');
        $(event.target).parent().next().children().eq(localindex).toggleClass('light-on');
        if ($("table tr td.light-on").length == 0) {
            $("div.winbox").toggle()
            $("div.winbox").on("click", (event) => {
                $("div.winbox").toggle();
            })
        }
    });
    $("div.resetbutton").on("click", () => {
        $("table tr td").each((index) => {
            $("table tr td").eq(index)[0].className = ""
        })
        $("table tr:first-child td").eq(2).addClass("light-on");
        $("table tr:nth-child(2) td").eq(1).addClass("light-on");
        $("table tr:nth-child(3) td").eq(4).addClass("light-on");
        $("table tr:nth-child(4) td").eq(2).addClass("light-on");
        $("table tr:nth-child(5) td").eq(3).addClass("light-on");
        $("div.winbox").hide();
    })
});