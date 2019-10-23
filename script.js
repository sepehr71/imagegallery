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
       
       let requestresponse1 = request.response[i]['download_url'];
       let requestresponse2 = request.response[i]['url'];
       let card = document.createElement('div');
       card.setAttribute("id" , "container");
       let image = document.createElement('img');
       image.setAttribute("id","images");
       let shareicon = document.createElement('button');
       shareicon.setAttribute("id", "sharepicbutton");
       
       image.src=requestresponse1;
       shareicon.src =  requestresponse2;
       document.querySelector('#masonary').append(card);
       document.querySelector('#masonary').appendChild(image);
       document.querySelector('#masonary').appendChild(shareicon);
    // image.appendChild(shareicon);
       card.appendChild(image);
       card.appendChild(shareicon);
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