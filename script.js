function bootloader_action() {
    var taskbar = document.getElementById('taskbar-content');
    var bootloader = document.getElementById('bootloader');
    taskbar.classList.remove('active');
    bootloader.classList.remove('complete');
    setTimeout(function() {
        bootloader.classList.add('complete');
        setTimeout(function() {
            taskbar.classList.add('active');
        }, 500);
    }, 4000);
}

function start_button_click() {
    var start_button = document.getElementById('start-button');
    var start_button_img = document.getElementById('taskbar-button-start');
    start_button_img.style.width = '25px';
    start_button.style.background = 'rgba(0, 0, 0)';
    setTimeout(function() {
        start_button.style.background = 'rgba(0, 0, 0, 0.535)';
        start_button_img.style.width = '30px';
    }, 100);
}

function start_button_click_in_window() {
    var start_button = document.getElementById('button-start');
    var start_button_img = document.getElementById('start-button-img');
    start_button_img.style.width = '20px';
    start_button.style.background = 'rgba(0, 0, 0)';
    setTimeout(function() {
        start_button.style.background = 'rgba(0, 0, 0, 0.535)';
        start_button_img.style.width = '30px';
    }, 100);
}

function start_Action() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('act');
}

function startLaunchExplorer() {
    setTimeout(function() {
        start_Action();
    }, 300);
}