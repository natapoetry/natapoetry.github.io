// ============================================================================
// Шапка и футер сайта.

var copyright = document.getElementById("copyright");
copyright.innerHTML = "<br>  <h2><img src=\"/logo.png\" width=\"70\" height=\"70\" align=\"center\"> <span class=\"sitename-12812\">Наталья Молодикова </span></h2><h4 class=\"element-12812\">Пишу стихи для вас!</h4> <br> <center> <h3>Мой сайт</h3><br><p><a href=\"/\" class=\"bottom-element\">Главная</a></p> <p><a href=\"/stihi/\" class=\"bottom-element\">Мои стихи</a></p>  <p><a href=\"/search.html\" class=\"bottom-element\">Поиск по стихам</a></p><br><br><h3>Я в соц-сетях</h3><br><p><a href=\"https://www.youtube.com/channel/UCxvMETeUlpE8siuyjWsM9sA\" class=\"bottom-element\">Я на YouTube</a></p> <p><a href=\"https://stihi.ru/avtor/markiza1915\" class=\"bottom-element\">Я на Стихи.ру</a></p>  </center></p><br><br> <div class=\"avtor-pravo\"><h5>© Наталья Молодикова, 2019 - 2024</h5></div> <br>";

var menu = document.getElementById("menu");
menu.innerHTML = "<div id=\"notewrite\"> </div><div id=\"notewriteerror\"> </div><div class=\"zakrep\"><nav>     <div class=\"pcnav\"><ul class=\"topmenu\">    <li><span><h2> <a href=\"/\" class=\"logo\" style=\"color: #fff;\"><img src=\"/logo.png\" width=\"40px\" height=\"40px\" align=\"center\"> Наталья М.</a></h2></span></li>    <li> </li>    <li> </li>    <li> </li>    <li> </li>    <li> </li>     <li><a href=\"/\" class=\"pcmenu-item\">Главная</a></li>    <li class=\"pcmenu-item\"><a href=\"/stihi/\" class=\"pcmenu-item\">Мои стихи</a></li>     </ul></div>       <div class=\"menu\"><br>    <input type=\"checkbox\" id=\"burger-checkbox\" class=\"burger-checkbox\">    <label for=\"burger-checkbox\" class=\"burger\"></label>   <ul class=\"menu-list\"><br><br><center>            <li><a class=\"menu-item\" href=\"/\">Главная</a></li>            <li><a class=\"menu-item\" href=\"/stihi/\">Мои стихи</a></li>                    </ul><br></div></div><span class=\"textphone\"> <span><a href=\"/\" class=\"logo\"><img src=\"/logo.png\" width=\"35px\" height=\"35px\" align=\"center\"> <span class=\"bold-mobile\">Наталья М.</span></a></span></span> </nav> <h2><span class=\"search-button\"><a href=\"/search.html\" class=\"search-link\" title=\"Поиск по сайту\"><img src=\"/images/website-search.png\" width=\"32\" height=\"32\"></a></span></h2><h2><span class=\"theme-pereklychatel\" id=\"switchtheme\"><a onclick=\"switchTheme()\" href=\"#switch\" style=\"text-decoration: none;\"><img src=\"/images/website-blacktheme.png\" width=\"32\" height=\"32\" title=\"Переключить тему\"></a></span></h2><br><br>";
// ============================================================================

// Украшательства

// ==========================
// Тех-работы
var tech = "false"
var prichinazakritia = "Обновление сайта."
var kogdadostypno = "30.08.2024 в 20:00"

// Надпись сверху страницы
var note = "false"
var notetext = "message <a href=\"#\" class=\"hyberlink\">Подробнее</a>"

var type = "normal"
// error - сообщение о баге, сбое или проблеме.
// normal - обычное объявление
// ==========================






let isDark = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function switchTheme() {
    if (isDark) {
        var theme = document.getElementById("styles");
        theme.innerHTML = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles.css\" />";
        var themeswicon = document.getElementById("switchtheme");
        themeswicon.innerHTML = "<a onclick=\"switchTheme()\" href=\"#switch\" style=\"text-decoration: none;\"><img src=\"/images/website-blacktheme.png\" width=\"32\" height=\"32\" title=\"Переключить тему\"></a>";
        var theme = "white";
        localStorage.setItem("mode", theme);
        isDark = false;
    } else {
        var theme = document.getElementById("styles");
        theme.innerHTML = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/stylesdark.css\" />";
        var themeswicon = document.getElementById("switchtheme");
        themeswicon.innerHTML = "<a onclick=\"switchTheme()\" href=\"#switch\" style=\"text-decoration: none;\"><img src=\"/images/website-whitetheme.png\" width=\"32\" height=\"32\" title=\"Переключить тему\"></a>";
        var theme = "dark";
        localStorage.setItem("mode", theme);
        isDark = true;
    }
    await sleep(2000)
}


var theme = localStorage.getItem("mode");

if (theme == "dark") {
switchTheme()
}

var url = window.location.pathname

    if (note == "true"){
    if (type == "error"){
var copyright = document.getElementById("notewriteerror");
copyright.innerHTML = "<div id=\"noteerr\"><br><br><div class=\"notetext\">" + notetext +" </div><br><br></div>";
    }
    if (type == "normal"){
var copyright = document.getElementById("notewrite");
copyright.innerHTML = "<div id=\"note\"><br><br><div class=\"notetext\">" + notetext +" </div><br><br></div>";
    }
    else {

    }

    } 
    else {

    }
    if (tech == "true"){
document.title = "Технические работы - KostySystem"
document.body.innerHTML = "<center><br><br><h3>В данный момент наш сайт находится на технических работах.<br><br>Причина временного отключения: " + prichinazakritia + "</h3><br><br><h4>Наш сайт будет доступен примерно " + kogdadostypno + ".<br><br><br><br><h4><a href=\"#\"onclick=\"location.reload (); return false;\">Обновить страницу</a>";
    }
    else {

    }
