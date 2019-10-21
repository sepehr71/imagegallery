function clearpage()
{
    var elem = document.querySelector('#masonary').innerHTML="";

}
let picnumber= 40;
let page = 1;

let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+picnumber;
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function()
{
    for(var i=0;i<30;i++)
    {
       let requestresponse = request.response[i]['download_url'];
       let choice = document.createElement('img');
       choice.src=requestresponse;
       document.querySelector('#masonary').appendChild(choice);
    }
}

function nextpage()
{
    clearpage();
    page++;
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+picnumber;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        for(var i=0;i<16;i++)
        {
           let requestresponse = request.response[i]['download_url'];
           let choice = document.createElement('img');
           choice.src=requestresponse;
           document.querySelector('#masonary').appendChild(choice);
        }
    }

    document.getElementById('lbltipAddedComment').innerHTML = page;

}



function prevpage()
{
    clearpage();
    page--;
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+picnumber;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        for(var i=0;i<16;i++)
        {
           let requestresponse = request.response[i]['download_url'];
           let choice = document.createElement('img');
           choice.src=requestresponse;
           document.querySelector('#masonary').appendChild(choice);
        }
    }
    document.getElementById('lbltipAddedComment').innerHTML = page;
}
     