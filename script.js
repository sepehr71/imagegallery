let piclength= 20;
let page = 1;
let likearray = [];

function clearpage()
{
    var elem = document.querySelector('#masonry').innerHTML="";
    var elem1 = document.querySelector('#pagination').innerHTML="";
}

function render(cardid,cardcounter,requestresponse1)
{

    let loader = document.createElement('div');
    loader.setAttribute("class" , "loader");
    document.querySelector('#masonry').appendChild(loader);

    let card = document.createElement('div');
    card.setAttribute("id" , "container");
    card.setAttribute("class" , cardid);
    // card.appendChild(loader);

    let image = document.createElement('img');
    image.setAttribute("id","images");
    
    let star = document.createElement('label');
    star.setAttribute("class" , "star");
    star.setAttribute("id" , cardid);
    star.innerHTML = '⭐';
    star.setAttribute("title" , "you have liked this");

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
    likeicon.setAttribute("onclick" , "like()")
    likeicon.setAttribute("class" , cardid);
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
    
    $(document).load(function()
    {
        $(".loader").fadeOut(2000);
    })

    $(document).ready(function()
    {
        $(".loader").hide();
    })

    // document.getElementById('lbltipAddedComment').innerHTML = page;
    
    let bookmark = localStorage.getItem(cardid);
    if(bookmark == 'liked')
    {
        document.getElementById(cardid).style.display='block';
        // document.getElementsByClassName(cardid).style.display='block';
    }
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
        let cardid = request.response[i]['id'];
        let cardcounter=i;
        let requestresponse1 = request.response[i]['download_url'];
        render(cardid,cardcounter,requestresponse1);
      }
    
    let prevpage=document.createElement('button');
    prevpage.setAttribute("id" , "prevpage");
    prevpage.setAttribute("onclick" , "prevpage()");
    prevpage.setAttribute("title" , "preview");
    prevpage.innerHTML = "◀ prev";
    document.querySelector("#pagination").appendChild(prevpage);
    

    if(page<=3)
    {
       let page1=page;
       for(let i=0;i<4;i++)
       {
           crtbtn(page1);
           page1++;
       }
       let threedot = document.createElement('label');
       threedot.innerHTML = " ... ";
       document.querySelector("#pagination").appendChild(threedot);
       page1=10;
       crtbtn(page1);

    }
    else if(page>3 && page<8)
    {
       
    }
    else if(page>=8 && page<=10)
    {
         
    }
    
    let nextpage = document.createElement('button');
    nextpage.setAttribute("id" , "nextpage");
    nextpage.setAttribute("onclick" , "nextpage()");
    nextpage.innerHTML = "next ▶";
    document.querySelector("#pagination").appendChild(nextpage);
  }
}

function sppage()
{
    show();
}

function crtbtn(page1)
{
    let sppage=document.createElement('button');
    sppage.setAttribute("id" , "sppage");

    sppage.onclick = function()
    {
          show(page);
    }
    sppage.innerHTML = page1;
    document.querySelector("#pagination").appendChild(sppage);
  
}

function share(cardid,cardcounter)
{
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        let textToCopy = request.response[cardcounter]['download_url'];
          navigator.clipboard.writeText(textToCopy);
    }
}

function like(cardid)
{
    if(localStorage.getItem(cardid) == 'liked')
    {
        localStorage.removeItem(cardid);
        document.getElementById(cardid).style.display = 'none';
        // document.getElementsByClassName(cardid).style.display='none';
    }
    else
    {
      localStorage.setItem(cardid,'liked');
      document.getElementById(cardid).style.display = 'block';
      //  document.getElementsByClassName(cardid).style.display='block';
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
                    let cardid = request.response[i]['id'];
                    let cardcounter=i;
                    let requestresponse1 = request.response[i]['download_url'];   
                    render(cardid,cardcounter,requestresponse1);
                }
            }
        }
    }   
}