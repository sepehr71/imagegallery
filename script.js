let piclength= 33;
let page = 1;
let pagesearch = 1;
let equlizer=0;
function clearpage()
{
    var elem = document.querySelector('#masonary').innerHTML="";
}

let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function()
{
    for(var i=0;i<piclength;i++)
    {
       let requestresponse = request.response[i]['download_url'];
       let choice = document.createElement('img');
       choice.src=requestresponse;
       document.querySelector('#masonary').appendChild(choice);
    }
}

function nextpage()
{
    if(page==10)
    {
        page=0;
    }
    clearpage();
    page++;
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        for(var i=equlizer;i<piclength;i++)
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
    if(page==1)
    {
        page=11;
    }
    clearpage();
    page--;
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        for(var i=0;i<piclength;i++)
        {
           let requestresponse = request.response[i]['download_url'];
           let choice = document.createElement('img');
           choice.src=requestresponse;
           document.querySelector('#masonary').appendChild(choice);
        }
    }
    document.getElementById('lbltipAddedComment').innerHTML = page;
}
     
function search() 
{
    clearpage();
    let search = document.getElementById('#textbox').value;
    for(let x=1; x<10 ; x++)
    {
        let  requestURL = 'https://picsum.photos/v2/list?page='+x+'&limit=100';
        let request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function()
        {
            for(let i=0;i<100;i++)
            {
                let search1 = request.response[i]['author'];
                if(search === search1)
                {
                    let requestresponse = request.response[i]['download_url'];
                    let choice = document.createElement('img');
                    choice.src=requestresponse;
                    document.querySelector('#masonary').appendChild(choice);
                }
            }
        }
    }   
}
function returntopage()
{

}

function mouseOver() {
    document.getElementById("img").style.opacity = 0.3;
  }
  
  function mouseOut() {
    document.getElementById('img').style.opacity = 1;
  }