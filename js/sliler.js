const admiral = document.getElementById('Admiral');
const sochi = document.getElementById('Sochi');
const patriot = document.getElementById('Patriot');
const city = document.getElementById('City');
const area = document.getElementById('Area');
const repairTime = document.getElementById('Repair_time');
const rowLeft = document.getElementById('row_left');
const dot_1 = document.getElementById('dot1');
const dot_2 = document.getElementById('dot2');
const dot_3 = document.getElementById('dot3');
const rowRight = document.getElementById('row_righ');
const imageProject = document.getElementById('Image_project');

sochiProject = {

    sochiStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    admiralStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    patriotStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    cityName: 'Sochi<br>Thieves',
    area: '105 m2',
    repairTime: '4 months',
    dot1Color: 'color: rgba(255, 255, 255, 0.3);',
    dot2Color: 'color: white',
    dot3Color: 'color: rgba(255, 255, 255, 0.3);',
    imageProject: '<img src="image/slider_2.jpg" alt="desing" width="679px" height="482px">'
}

admiralProject = {

    sochiStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    admiralStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    patriotStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    cityName: 'Rostov-on-Don<br>LCD admiral',
    area: '81 m2',
    repairTime: '3.5 months',
    dot1Color: 'color: white',
    dot2Color: 'color: rgba(255, 255, 255, 0.3);',
    dot3Color: 'color: rgba(255, 255, 255, 0.3);',
    imageProject: '<img src="image/slider_1.jpg" alt="desing" width="679px" height="482px">'
}

patriotProject = {

    sochiStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    admiralStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    patriotStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    cityName: 'Rostov-on-Don<br>Patriotic',
    area: '93 m2',
    repairTime: '3 months',
    dot1Color: 'color: rgba(255, 255, 255, 0.3);',
    dot2Color: 'color: rgba(255, 255, 255, 0.3);',
    dot3Color: 'color: white',
    imageProject: '<img src="image/slider_3.jpg" alt="desing" width="679px" height="482px">'
}

admiral.style = admiralProject.admiralStyle;
dot_1.style = admiralProject.dot1Color;

let galery = [admiralProject, sochiProject, patriotProject];

let currentIndex = 0;

function showSochi() {

    admiral.style = sochiProject.admiralStyle;
    sochi.style = sochiProject.sochiStyle;
    patriot.style = sochiProject.patriotStyle;
    dot_1.style = sochiProject.dot1Color;
    dot_2.style = sochiProject.dot2Color;
    dot_3.style = sochiProject.dot3Color;
    imageProject.innerHTML = sochiProject.imageProject;
    city.innerHTML = sochiProject.cityName;
    area.innerHTML = sochiProject.area;
    repairTime.innerHTML = sochiProject.repairTime;
    currentIndex = 1;
}

function showAdmiral() {

    admiral.style = admiralProject.admiralStyle;
    sochi.style = admiralProject.sochiStyle;
    patriot.style = admiralProject.patriotStyle;
    dot_1.style = admiralProject.dot1Color;
    dot_2.style = admiralProject.dot2Color;
    dot_3.style = admiralProject.dot3Color;
    imageProject.innerHTML = admiralProject.imageProject;
    city.innerHTML = admiralProject.cityName;
    area.innerHTML = admiralProject.area;
    repairTime.innerHTML = admiralProject.repairTime;
    currentIndex = 0;
}

function showPatriot() {

    admiral.style = patriotProject.admiralStyle;
    sochi.style = patriotProject.sochiStyle;
    patriot.style = patriotProject.patriotStyle;
    dot_1.style = patriotProject.dot1Color;
    dot_2.style = patriotProject.dot2Color;
    dot_3.style = patriotProject.dot3Color;
    imageProject.innerHTML = patriotProject.imageProject;
    city.innerHTML = patriotProject.cityName;
    area.innerHTML = patriotProject.area;
    repairTime.innerHTML = patriotProject.repairTime;
    currentIndex = 2;
}

function next() {

    if (currentIndex == (galery.length - 1)) {

        admiral.style = galery[0].admiralStyle;
        sochi.style = galery[0].sochiStyle;
        patriot.style = galery[0].patriotStyle;
        dot_1.style = galery[0].dot1Color;
        dot_2.style = galery[0].dot2Color;
        dot_3.style = galery[0].dot3Color;
        imageProject.innerHTML = galery[0].imageProject;
        city.innerHTML = galery[0].cityName;
        area.innerHTML = galery[0].area;
        repairTime.innerHTML = galery[0].repairTime;
        currentIndex = 0;
    } else {
        admiral.style = galery[currentIndex+1].admiralStyle;
        sochi.style = galery[currentIndex+1].sochiStyle;
        patriot.style = galery[currentIndex+1].patriotStyle;
        dot_1.style = galery[currentIndex+1].dot1Color;
        dot_2.style = galery[currentIndex+1].dot2Color;
        dot_3.style = galery[currentIndex+1].dot3Color;
        imageProject.innerHTML = galery[currentIndex+1].imageProject;
        city.innerHTML = galery[currentIndex+1].cityName;
        area.innerHTML = galery[currentIndex+1].area;
        repairTime.innerHTML = galery[currentIndex+1].repairTime;
        currentIndex++;
    }
}

function prev() {

    if (currentIndex == 0) {

        admiral.style = galery[galery.length-1].admiralStyle;
        sochi.style = galery[galery.length-1].sochiStyle;
        patriot.style = galery[galery.length-1].patriotStyle;
        dot_1.style = galery[galery.length-1].dot1Color;
        dot_2.style = galery[galery.length-1].dot2Color;
        dot_3.style = galery[galery.length-1].dot3Color;
        imageProject.innerHTML = galery[galery.length-1].imageProject;
        city.innerHTML = galery[galery.length-1].cityName;
        area.innerHTML = galery[galery.length-1].area;
        repairTime.innerHTML = galery[galery.length-1].repairTime;
        currentIndex = (galery.length-1);
    } else {
        admiral.style = galery[currentIndex-1].admiralStyle;
        sochi.style = galery[currentIndex-1].sochiStyle;
        patriot.style = galery[currentIndex-1].patriotStyle;
        dot_1.style = galery[currentIndex-1].dot1Color;
        dot_2.style = galery[currentIndex-1].dot2Color;
        dot_3.style = galery[currentIndex-1].dot3Color;
        imageProject.innerHTML = galery[currentIndex-1].imageProject;
        city.innerHTML = galery[currentIndex-1].cityName;
        area.innerHTML = galery[currentIndex-1].area;
        repairTime.innerHTML = galery[currentIndex-1].repairTime;
        --currentIndex;
    }
}

rowRight.addEventListener('click', next);

admiral.addEventListener('click', showAdmiral);
dot_1.addEventListener('click', showAdmiral);
sochi.addEventListener('click', showSochi)
dot_2.addEventListener('click', showSochi)
patriot.addEventListener('click', showPatriot);
dot_3.addEventListener('click', showPatriot);

rowLeft.addEventListener('click', prev);
