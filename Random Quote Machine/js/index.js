const quotesData = {
    quotes: [{
            quote: "人群之中钻出一个光头！",
            author: "葛叔",
            av: "av2554169"
        },
        {
            quote: "浙江温州，浙江温州，最大皮革厂，江南皮革厂倒闭了！",
            author: "黄鹤",
            av: "av4045652"
        },
        {
            quote: "你灌醉了我，我掀起波澜~~",
            author: "波澜哥",
            av: "av4376808"
        },
        {
            quote: "我已经赢了，我已经赢她太多了。",
            author: "高音哥",
            av: "av11590218"
        },
        {
            quote: "真正的烤面筋，可带劲啦，让你吃到真正的实惠。",
            author: "面筋哥",
            av: "av21061574"
        },
        {
            quote: "打工是不可能打工的，这辈子不可能打工的。",
            author: "窃格瓦拉",
            av: "av7432563"
        },
        {
            quote: "抱歉，有钱是真的能为所欲为的。",
            author: "《读心神探》",
            av: "av13252816"
        },
        {
            quote: "我王境泽就是饿死，死外边，从这跳下去，也不会吃你们一点儿东西。……真香。",
            author: "王境泽",
            av: "av28879552"
        },
        {
            quote: "我们雄家三百多年，不赚诚信钱，黑心治病，就没有我治不死的风湿病。",
            author: "雄氏老方",
            av: "av12012048"
        },
        {
            quote: "你当着所有人面前，大声讲，‘对不住，非凡哥’。",
            author: "梁非凡",
            av: "av7541323"
        },
        {
            quote: "吔屎啦梁非凡！",
            author: "刘醒",
            av: "av2803520"
        },
        {
            quote: "你们全家全都萝莉！",
            author: "冯巩",
            av: "av41664520"
        },
        {
            quote: "改革春风吹满地，中国人民真争气。",
            author: "赵本山",
            av: "av19390801"
        },
        {
            quote: "我的低调不是你装逼的资本！",
            author: "MC石头",
            av: "av10656935"
        },
        {
            quote: "我跟你有什么仇什么怨？",
            author: "瓜子哥",
            av: "av1750722"
        },
        {
            quote: "不喝大力，我浑身难受。",
            author: "大力哥",
            av: "av897567"
        },
        {
            quote: "之子期宿来，孤琴候萝径，",
            author: "梁逸峰",
            av: "av902007"
        },
        {
            quote: "来者可是诸葛孔明？",
            author: "王司徒",
            av: "av3037947"
        },
        {
            quote: "我从未见过有如此厚颜无耻之人！",
            author: "诸葛亮",
            av: "av1922328"
        },
        {
            quote: "你有本事抢男人，你有本事开门啊！",
            author: "雪姨",
            av: "av352137"
        },
        {
            quote: "一位不愿透露姓名的唐马儒先生。",
            author: "唐马儒",
            av: "av636953"
        },
        {
            quote: "Duang！Duang！Duang！",
            author: "成龙",
            av: "av2023391"
        },
        {
            quote: "虐不虐，虐不虐，你就说虐不虐！",
            author: "PAPI酱",
            av: "av4033926"
        },
        {
            quote: "你追我，如果你追到我，我就让你嘿嘿嘿。",
            author: "费玉清",
            av: "av3447289"
        },
        {
            quote: "二营长，你他娘的意大利炮呢？",
            author: "李云龙",
            av: "av34160882"
        },
        {
            quote: "两秒十七发，我卢本伟牛逼。",
            author: "卢本伟",
            av: "av18193325"
        },
        {
            quote: "我们腾讯不盈利。",
            author: "马化腾",
            av: "av29170065"
        },
        {
            quote: "我对钱没有兴趣。",
            author: "马云",
            av: "av16193902"
        },
        {
            quote: "先定一个小目标，挣他一个亿。",
            author: "王健林",
            av: "av6080584"
        },
        {
            quote: "Are you OK?",
            author: "雷军",
            av: "av6692954"
        },
        {
            quote: "我根本不知道她漂不漂亮。",
            author: "刘强东",
            av: "av10210318"
        },
        {
            quote: "你好骚啊！",
            author: "洪世贤",
            av: "av41903408"
        },
        {
            quote: "燃烧我的卡路里！",
            author: "杨超越",
            av: "av28658877"
        },
        {
            quote: "鸡你太美。",
            author: "蔡徐坤",
            av: "av48828477"
        },
        {
            quote: "你看这个面它又长又宽，就像这个碗它又大又圆。",
            author: "吴亦凡",
            av: "av49775093"
        }
    ],
    author: "从小就够艳"
}

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function getCurrentColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getCurrentQoutes() {
    return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}


function getQuote() {
    const currentColor = getCurrentColor(),
        currentQuotes = getCurrentQoutes(),
        currentQuote = currentQuotes.quote,
        currentAuthor = currentQuotes.author,
        currentAv = currentQuotes.av;

    $("#bilibili-quote").attr("href", "https://www.bilibili.com/video/" + encodeURIComponent(currentAv) + "/")
    //$("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + currentQuote + '" -' + currentAuthor));
    $("#tweet-quote").attr("href", "https://service.weibo.com/share/share.php?content=1&appkey=RandomQuoteMachine&title=" + encodeURIComponent('"' + currentQuote + '" -' + currentAuthor + "https://www.bilibili.com/video/" + encodeURIComponent(currentAv) + "/"));
    $(".quote-text").animate({
            opacity: 0
        },
        500,
        function () {
            $(this).animate({
                opacity: 1
            }, 500);
            $("#text").text(currentQuote);
        }
    );

    $(".quote-author").animate({
            opacity: 0
        },
        500,
        function () {
            $(this).animate({
                opacity: 1
            }, 500);
            $("#author").text(currentAuthor);
        }
    );

    $("html body").animate({
        backgroundColor: currentColor,
        color: currentColor
    }, 1000);

    $(".button").animate({
        backgroundColor: currentColor
    }, 1000);
}

$(function () {
    getQuote();
    $("#new-quote").click(getQuote);
});