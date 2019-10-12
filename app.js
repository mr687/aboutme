// @File   : app.js
// @Author : DAVI NOMOEH DANI (sedaph)
// @email  : davinomoehdanino@gmail.com
// @Date   : 10/12/2019, 11:06:55 PM

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const wrapperPosition = ['knowledge','work','contact'];

window.onload = isLoaded;
function isLoaded(){

    blinkedCursor();

    currentDate();

    menuItemListener();

    populateDate();
}

function populateDate(){
    var date = new Date();
    var dateElement = document.getElementsByClassName('time')[0];
    
    dateElement.innerHTML = monthNames[date.getMonth()] + "<br>" + date.getDate() + "<br>" + "<b>" + date.getFullYear() + "</b>"
}

function blinkedCursor(){
    var cursor = document.getElementsByClassName("cursor")[0];

    setInterval(function(){
        cursor.style.display == 'none' ? cursor.style.display = 'block' : cursor.style.display = 'none';
    }, 500);
}

function currentDate(){
    var today = new Date();

    var vline = document.getElementsByClassName("vline")[0];
    var dot = document.getElementsByClassName("dot")[0];
    var vlineHeight = vline.offsetHeight;

    var currentDate = today.getDate();

    divided = daysInMonth(today.getMonth(),today.getFullYear());

    var currentMonthHeight = (vlineHeight / divided) * currentDate;

    dot.style.top = currentMonthHeight + "px";
}

function changeSection(pos){
    removeClass('wrapper','block');
    var id = wrapperPosition[pos];
    var elem = document.getElementById(id);
    elem.classList.add('block');
}

function daysInMonth(iMonth, iYear)
{
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function menuItemListener(){
    eventListener('item','click',function(){
        var top = -35;
        var pos = this.getAttribute('data-position');
        var menu = document.getElementsByClassName('menu')[0];

        changeSection(pos);

        removeClass('item','selected');

        menu.style.transform = "translateY(" + (top + (-(pos * 20))) + "%)";

        this.classList.add('selected');
    });
}

function eventListener(className,event, func){
    var classList = document.getElementsByClassName(className);
    for (var i = 0; i < classList.length;i++){
        classList[i].addEventListener(event,func,false)
    }
}

function removeClass(target,className){
    var classList = document.getElementsByClassName(target);
    for (var i = 0; i < classList.length;i++){
        classList[i].classList.remove(className);
    }
}
