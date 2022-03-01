const admiral = document.getElementById('Admiral');
const sochi = document.getElementById('Sochi');
const patriot = document.getElementById('Patriot');
const city = document.getElementById('City');
const area = document.getElementById('Area');
const repairTime = document.getElementById('Repair_time');
const rowLeft = document.getElementById('row_left');
const dotOne = document.getElementById('dot1');
const dotTwo = document.getElementById('dot2');
const dotThre = document.getElementById('dot3');
const rowRight = document.getElementById('row_righ');
const imageProject = document.getElementById('Image_project');
const mobileImage = document.getElementById('foto');


sochiProject = {

    sochiStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    admiralStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    patriotStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    cityName: 'Sochi<br>Thieves',
    area: '105 m2',
    repairTime: '4 months',
    dotOneColor: 'color: rgba(255, 255, 255, 0.3);',
    dotTwoColor: 'color: white',
    dotThreColor: 'color: rgba(255, 255, 255, 0.3);',
    imageProject: '<img src="image/slider_2.jpg" alt="desing" width="679px" height="482px">',
    mobileImageStyle: 'background: url(\'image/slider_2.jpg\');background-size: 100%'
}

admiralProject = {

    sochiStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    admiralStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    patriotStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    cityName: 'Rostov-on-Don<br>LCD admiral',
    area: '81 m2',
    repairTime: '3.5 months',
    dotOneColor: 'color: white',
    dotTwoColor: 'color: rgba(255, 255, 255, 0.3);',
    dotThreColor: 'color: rgba(255, 255, 255, 0.3);',
    imageProject: '<img src="image/slider_1.jpg" alt="desing" width="679px" height="482px">',
    mobileImageStyle: 'background: url(\'image/slider_1.jpg\');background-size: 100%'
}

patriotProject = {

    sochiStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    admiralStyle: 'text-decoration:none; color: rgba(255, 255, 255, 0.3);',
    patriotStyle: 'color: #e3b873; border-bottom: solid #e3b873 1px;',
    cityName: 'Rostov-on-Don<br>Patriotic',
    area: '93 m2',
    repairTime: '3 months',
    dotOneColor: 'color: rgba(255, 255, 255, 0.3);',
    dotTwoColor: 'color: rgba(255, 255, 255, 0.3);',
    dotThreColor: 'color: white',
    imageProject: '<img src="image/slider_3.jpg" alt="desing" width="679px" height="482px">',
    mobileImageStyle: 'background: url(\'image/slider_3.jpg\');background-size: 100%'
}

admiral.style = admiralProject.admiralStyle;
dotOne.style = admiralProject.dotOneColor;
mobileImage.style = 'background: url(\'image/slider_1.jpg\');background-size: 100%';

let galery = [admiralProject, sochiProject, patriotProject];

let currentIndex = 0;

function showSochi() {

    admiral.style = sochiProject.admiralStyle;
    sochi.style = sochiProject.sochiStyle;
    patriot.style = sochiProject.patriotStyle;
    dotOne.style = sochiProject.dotOneColor;
    dotTwo.style = sochiProject.dotTwoColor;
    dotThre.style = sochiProject.dotThreColor;
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
    dotOne.style = admiralProject.dotOneColor;
    dotTwo.style = admiralProject.dotTwoColor;
    dotThre.style = admiralProject.dotThreColor;
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
    dotOne.style = patriotProject.dotOneColor;
    dotTwo.style = patriotProject.dotTwoColor;
    dotThre.style = patriotProject.dotThreColor;
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
        dotOne.style = galery[0].dotOneColor;
        dotTwo.style = galery[0].dotTwoColor;
        dotThre.style = galery[0].dotThreColor;
        mobileImage.style = galery[0].mobileImageStyle;
        imageProject.innerHTML = galery[0].imageProject;
        city.innerHTML = galery[0].cityName;
        area.innerHTML = galery[0].area;
        repairTime.innerHTML = galery[0].repairTime;
        currentIndex = 0;
    } else {
        admiral.style = galery[currentIndex + 1].admiralStyle;
        sochi.style = galery[currentIndex + 1].sochiStyle;
        patriot.style = galery[currentIndex + 1].patriotStyle;
        dotOne.style = galery[currentIndex + 1].dotOneColor;
        dotTwo.style = galery[currentIndex + 1].dotTwoColor;
        dotThre.style = galery[currentIndex + 1].dotThreColor;
        mobileImage.style = galery[currentIndex + 1].mobileImageStyle;
        imageProject.innerHTML = galery[currentIndex + 1].imageProject;
        city.innerHTML = galery[currentIndex + 1].cityName;
        area.innerHTML = galery[currentIndex + 1].area;
        repairTime.innerHTML = galery[currentIndex + 1].repairTime;
        currentIndex++;
    }
}

function prev() {

    if (currentIndex == 0) {

        admiral.style = galery[galery.length - 1].admiralStyle;
        sochi.style = galery[galery.length - 1].sochiStyle;
        patriot.style = galery[galery.length - 1].patriotStyle;
        dotOne.style = galery[galery.length - 1].dotOneColor;
        dotTwo.style = galery[galery.length - 1].dotTwoColor;
        dotThre.style = galery[galery.length - 1].dotThreColor;
        mobileImage.style = galery[galery.length - 1].mobileImageStyle;
        imageProject.innerHTML = galery[galery.length - 1].imageProject;
        city.innerHTML = galery[galery.length - 1].cityName;
        area.innerHTML = galery[galery.length - 1].area;
        repairTime.innerHTML = galery[galery.length - 1].repairTime;
        currentIndex = (galery.length - 1);
    } else {
        admiral.style = galery[currentIndex - 1].admiralStyle;
        sochi.style = galery[currentIndex - 1].sochiStyle;
        patriot.style = galery[currentIndex - 1].patriotStyle;
        dotOne.style = galery[currentIndex - 1].dotOneColor;
        dotTwo.style = galery[currentIndex - 1].dotTwoColor;
        dotThre.style = galery[currentIndex - 1].dotThreColor;
        mobileImage.style = galery[currentIndex - 1].mobileImageStyle;
        imageProject.innerHTML = galery[currentIndex - 1].imageProject;
        city.innerHTML = galery[currentIndex - 1].cityName;
        area.innerHTML = galery[currentIndex - 1].area;
        repairTime.innerHTML = galery[currentIndex - 1].repairTime;
        --currentIndex;
    }
}

rowRight.addEventListener('click', next);

admiral.addEventListener('click', showAdmiral);
dotOne.addEventListener('click', showAdmiral);
sochi.addEventListener('click', showSochi)
dotTwo.addEventListener('click', showSochi)
patriot.addEventListener('click', showPatriot);
dotThre.addEventListener('click', showPatriot);

rowLeft.addEventListener('click', prev);
