let piclength= 33;
let page = 1;
let likearray = [];

function clearpage()
{
    var elem = document.querySelector('#masonry').innerHTML="";
}
function prepare()
{
    
}
function show()
{
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
     for(var i=0;i<piclength;i++)
     {
        let cardid = i+"p"+page;
        let cardcounter=i;
        
        let requestresponse1 = request.response[i]['download_url'];
        
        let card = document.createElement('div');
        card.setAttribute("id" , "container");
        card.setAttribute("class" , cardid);
        
        let image = document.createElement('img');
        image.setAttribute("id","images");
        
        let star = document.createElement('label');
        star.setAttribute("class" , "star");
        star.setAttribute("id" , cardid);
        star.innerHTML='⭐';

        let shareicon = document.createElement('button');
        shareicon.setAttribute("id", "sharebtn");
        shareicon.setAttribute("onclick" , "share()" )
        shareicon.innerHTML="🔺";
        shareicon.setAttribute("title" , "copyto clip board");
        shareicon.onclick = function()
        {
            share(cardid,cardcounter);
        }
    
        let likeicon = document.createElement('button');
        likeicon.setAttribute("id", "likebtn");
        likeicon.setAttribute("onclick" , "like()" )
        likeicon.setAttribute("title" , "like");
        likeicon.innerHTML="💗";

        likeicon.onclick = function()
        {
            like(cardid);
        }
        
        let dwlicon = document.createElement('button');
        dwlicon.setAttribute("id", "dwlbtn");
        dwlicon.setAttribute("onclick" , "download()");
        dwlicon.innerHTML="🔻";
        dwlicon.setAttribute("title" , "download");
       
        dwlicon.onclick = function()
        {
            download(cardid);
        }
        
        image.src=requestresponse1; 
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
        
        document.getElementById('lbltipAddedComment').innerHTML = page;
        
        let bookmark= localStorage.getItem(cardid);
        if(bookmark==cardid)
        {
            document.getElementById(cardid).style.display='block';
        }
    }
  }
}
function share(cardid,cardcounter)
{
    // let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    // let request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();
    // request.onload = function()
    // {
    //     let requestresponse1 = request.response[cardcounter]['download_url'];
    //     var copyText =requestresponse1;
    //     copyText.select();
    //     document.execCommand("copy");
    //     document.querySelector("#copy").addEventListener("click", copy)
    } 

function like(cardid)
{
 
    localStorage.setItem(cardid,cardid);
    document.getElementById(cardid).style.display='block';
    if(localStorage.getItem(cardid)!=null)
    {
        localStorage.removeItem(cardid);
        document.getElementById(cardid).style.display='none';
    }
    
}
function nextpage()
{
    if(page==10){page=0;}
    clearpage();
    page++;
    show();
}


function prevpage()
{
    if(page==1){page=11;}
    clearpage();
    page--;
    show();
}
     
function search() 
{
    clearpage();
    let typesearch = document.getElementById('#textbox').value;
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
                let serversearch = request.response[i]['author'];
                if(typesearch === serversearch)
                {
                    let cardid = request.response[i]["id"];
                    let requestresponse1 = request.response[i]['download_url'];
            
                    let card = document.createElement('div');
                    card.setAttribute("id" , "container");
                    card.setAttribute("class" , cardid);
                    
                    let image = document.createElement('img');
                    image.setAttribute("id","images");
                    
                    let shareicon = document.createElement('button');
                    shareicon.setAttribute("id", "sharebtn");
                    shareicon.setAttribute("onclick" , "share()" )
                    
                    shareicon.onclick = function()
                    {
                        share(cardid);
                    }
                
                    let sharebtntxt = document.createElement('a');
                    sharebtntxt.setAttribute("id" , "sharebtntxt");
                    sharebtntxt.innerHTML="🔺";
                    sharebtntxt.setAttribute("title" , "copyto clip board");
                 
                    let likeicon = document.createElement('button');
                    likeicon.setAttribute("id", "likebtn");
                    likeicon.setAttribute("onclick" , "like()" )
                    likeicon.setAttribute("title" , "like");
                    likeicon.onclick = function()
                    {
                        like(cardid);
                    }
                    
                    let likebtntxt = document.createElement('a');
                    likebtntxt.setAttribute("id" , "likebtntxt");
                    likebtntxt.innerHTML="💗";
                    likebtntxt.setAttribute("title" , "like");
            
                    let dwlicon = document.createElement('button');
                    dwlicon.setAttribute("id", "dwlbtn");
                    dwlicon.setAttribute("onclick" , "download()" )
                   
                    dwlicon.onclick = function()
                    {
                        download(cardid);
                    }
                    
            
                    let dwlbtntxt = document.createElement('a');
                    dwlbtntxt.setAttribute("id" , "dwlbtntxt");
                    dwlbtntxt.innerHTML="🔻";
                    dwlbtntxt.setAttribute("title" , "download");
            
                    image.src=requestresponse1; 
                    document.querySelector('#masonry').append(card);
                    document.querySelector('#masonry').appendChild(image);
                    document.querySelector('#masonry').appendChild(shareicon);
                    document.querySelector('#masonry').appendChild(sharebtntxt);
                    document.querySelector('#masonry').appendChild(likeicon);
                    document.querySelector('#masonry').appendChild(likebtntxt);
                    document.querySelector('#masonry').appendChild(dwlicon);
                    document.querySelector('#masonry').appendChild(dwlbtntxt);
                   
                    card.appendChild(image);
                    card.appendChild(shareicon);
                    card.appendChild(likeicon);
                    card.appendChild(dwlicon);
                
                    shareicon.appendChild(sharebtntxt);
                    likeicon.appendChild(likebtntxt);
                    dwlicon.appendChild(dwlbtntxt);
                    document.getElementById('lbltipAddedComment').innerHTML = page; }
            }
        }
    }   
}
function download(cardid)
{
    
}

