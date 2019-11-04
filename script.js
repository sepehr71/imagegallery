let piclength = 10;
let xfactor = 5;
let capacity = 20;

function clearpage() {
    var elem = document.querySelector('#masonry').innerHTML = "";
    var elem1 = document.querySelector('#pagination').innerHTML = "";
}

function render(cardid, cardcounter, requestresponse1) {

    let loader = document.createElement('div');
    loader.setAttribute("class", "loader");
    document.querySelector('#masonry').appendChild(loader);

    let card = document.createElement('div');
    card.setAttribute("id", "container");
    card.setAttribute("class", cardid);
    // card.appendChild(loader);

    let image = document.createElement('img');
    image.setAttribute("id", "images");

    let star = document.createElement('label');
    star.setAttribute("class", "star");
    star.setAttribute("id", cardid);
    star.innerHTML = '⭐';
    star.setAttribute("title", "you have liked this");

    let shareicon = document.createElement('button');
    shareicon.setAttribute("id", "sharebtn");
    shareicon.setAttribute("onclick", "share()")
    shareicon.innerHTML = "🔺";
    shareicon.setAttribute("title", "copyto clip board");
    shareicon.onclick = function () {
        share(cardid, cardcounter);
    }

    let likeicon = document.createElement('button');
    likeicon.setAttribute("id", "likebtn");
    likeicon.setAttribute("onclick", "like()")
    likeicon.setAttribute("class", cardid);
    likeicon.setAttribute("title", "like");
    likeicon.innerHTML = "💗";
    likeicon.onclick = function () {
        like(cardid);
    }

    let dwlicon = document.createElement('button');
    dwlicon.setAttribute("id", "dwlbtn");
    dwlicon.setAttribute("onclick", "download()");
    dwlicon.innerHTML = "🔻";
    dwlicon.setAttribute("title", "download");
    dwlicon.onclick = function () {
        download(cardid);
    }

    image.src = requestresponse1;

    document.querySelector('#masonry').append(card);
    document.querySelector('#masonry').appendChild(image);
    document.querySelector('#masonry').appendChild(shareicon);
    document.querySelector('#masonry').appendChild(likeicon);
    document.querySelector('#masonry').appendChild(dwlicon);
    document.querySelector('#masonry').appendChild(star);

    card.appendChild(image);
    card.appendChild(shareicon);
    card.appendChild(likeicon);
    card.appendChild(dwlicon);
    card.appendChild(star);


    $(document).load(function () {
        $(".loader").fadeOut(2000);
    })

    $(document).ready(function () {
        $(".loader").hide();
    })

    // document.getElementById('lbltipAddedComment').innerHTML = page;

    let bookmark = localStorage.getItem(cardid);
    if (bookmark == 'liked') {
        document.getElementById(cardid).style.display = 'block';
        // document.getElementsByClassName(cardid).style.display='block';
    }
}


function show() {

    clearpage();
    let page = sessionStorage.getItem('page1');
    console.log(page);
    let requestURL = 'https://picsum.photos/v2/list?page=' + page + '&limit=' + piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        for (var i = 0; i < piclength; i++) {
            let cardid = request.response[i]['id'];
            let cardcounter = i;
            let requestresponse1 = request.response[i]['download_url'];
            render(cardid, cardcounter, requestresponse1);
        }


        let firstpage = document.createElement('button');
        firstpage.setAttribute("id", "prevpage");
        firstpage.innerHTML = "first";
        document.querySelector("#pagination").appendChild(firstpage);
        firstpage.onclick = function () {
            firstpage1(page);
        }

        let prevpage = document.createElement('button');
        prevpage.setAttribute("id", "prevpage");
        prevpage.innerHTML = "◀ prev";
        document.querySelector("#pagination").appendChild(prevpage);
        prevpage.onclick = function () {
            prevpage1(page);
        }

        let counter = page;
        xfactor = page;

        if (page >= 1 && page <= 3 || page==null) {
            counter = 1;
            xfactor = Number(xfactor) + Number(4);

        }
        else if (page > 3 && page <= 17) {
            counter = Number(counter) - Number(2);
            xfactor = Number(xfactor) + Number(2);
        }
        else if (page > 17) {
             xfactor=20;
             counter= Number(counter)- Number(4)
        }

        for (let i = counter; i <= xfactor; i++) {
            if (i !== null) {
                let middlebtn = document.createElement('button');
                middlebtn.setAttribute("id", i);
                middlebtn.setAttribute("class", "midlebtn");
                // lasttpage.setAttribute("onclick" , "lastpage()");
                middlebtn.innerHTML = i;
                document.querySelector("#pagination").appendChild(middlebtn);
                if (page == i) {
                    document.getElementById(i).style.backgroundColor = 'blue';
                }
                middlebtn.onclick = function () {
                    sessionStorage.setItem('page1', i);
                    show();
                }
            }
        }

        let nextpage = document.createElement('button');
        nextpage.setAttribute("id", "nextpage");
        nextpage.innerHTML = "next ▶";
        document.querySelector("#pagination").appendChild(nextpage);
        nextpage.onclick = function () {
            nextpage1(page);
        }

        let lastpage = document.createElement('button');
        lastpage.setAttribute("id", "prevpage");
        lastpage.innerHTML = "last";
        document.querySelector("#pagination").appendChild(lastpage);
        lastpage.onclick = function () {
            lastpage1(page);
        }
    }
}


function nextpage1(page) {
    // if (page == 10) { page = 0; }
    if (page == null) {
        page = 1;
    }
    page++;
    sessionStorage.setItem('page1', page);
    show();
}

function prevpage1(page) {
    // if (page == 1) { page = 11; }

    page--;
    sessionStorage.setItem('page1', page);
    show();
}

function firstpage1(page) {

    page = 1;
    sessionStorage.setItem('page1', page)
    show();

}

function lastpage1(page) {

    page = capacity;
    sessionStorage.setItem('page1', page)
    show();
}

function share(cardid, cardcounter) {
    let page = sessionStorage.getItem('page1');
    let requestURL = 'https://picsum.photos/v2/list?page=' + page + '&limit=' + piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let textToCopy = request.response[cardcounter]['download_url'];
        navigator.clipboard.writeText(textToCopy);
    }
}

function like(cardid) {
    if (localStorage.getItem(cardid) == 'liked') {
        localStorage.removeItem(cardid);
        document.getElementById(cardid).style.display = 'none';
        // document.getElementsByClassName(cardid).style.display='none';
    }
    else {
        localStorage.setItem(cardid, 'liked');
        document.getElementById(cardid).style.display = 'block';
        //  document.getElementsByClassName(cardid).style.display='block';
    }
}

function search() {
    clearpage();
    let typesearch = document.getElementById('#textbox').value;
    for (let x = 1; x < 10; x++) {
        let requestURL = 'https://picsum.photos/v2/list?page=' + x + '&limit=100';
        let request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            for (let i = 0; i < 100; i++) {
                let serversearch = request.response[i]['author'];
                if (typesearch === serversearch) {
                    let cardid = request.response[i]['id'];
                    let cardcounter = i;
                    let requestresponse1 = request.response[i]['download_url'];
                    render(cardid, cardcounter, requestresponse1);
                }
            }
        }
    }
}