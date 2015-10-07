var $=function(id){return document.getElementById(id);};var help="<ul> \
     <li><b>!g</b> = Search Google (Default)</li> \
     <li><b>!i</b> = Search Google Images</li> \
     <li><b>!m</b> = Search IMDb</li> \
     <li><b>!u</b> = Search Urban Dictionary</li> \
     <li><b>!w</b> = Search Wikipedia</li> \
     <li><b>!y</b> = Search YouTube</li> \
 </ul>";var search=[["","https://www.google.com/#q="],["!g","https://www.google.com/#q="],["!i","https://www.google.com/search?tbm=isch&q="],["!m","http://www.imdb.com/find?q="],["!u","http://www.urbandictionary.com/define.php?term="],["!w","http://en.wikipedia.org/w/index.php?search="],["!y","https://www.youtube.com/results?search_query="],];var menus=[["Daily"],["Entertainment"],["Social"],["Other"],];var showFavicon=true;var links=[["Reddit","http://reddit.com",""],["IGN","http://ign.com",""],["Imgur","https://imgur.com/",""],["Tapastic","http://tapastic.com/",""],["Gizmodo AU","http://www.gizmodo.com.au",""],["Gizmodo UK","http://www.gizmodo.co.uk",""],["Geekologie","http://geekologie.com/",""],["PcCaseGear","http://www.pccasegear.com/index.php?main_page=index&tab=new&cPath=416",""],["/b/","https://boards.4chan.org/b/",""],["","",""],["YouTube","https://www.youtube.com/feed/subscriptions",""],["Netflix","http://netflix.com",""],["Music by Year","http://thenostalgiamachine.com",""],["Neverending Playlist","neverendingplaylist.com",""],["SuperChillin","http://superchillin.com/index.php",""],["I Am Bored","http://www.i-am-bored.com/",""],["Kickass","https://kat.cr",""],["","",""],["Gmail","https://mail.google.com/",""],["Facebook","http://facebook.com",""],["StumbleUpon","http://stumbleupon.com",""],["Twitch","http://www.twitch.tv/directory/following",""],["","",""],["Dropbox","https://www.dropbox.com",""],["Pastebin","http://pastebin.com",""],["mLess","http://motherless.com/live/videos",""],["Sleep Sound","http://soundstosleepto.com",""],];var ss="";function init(){for(var i=0;i<search.length;i++)
if(search[i][0]=="")
ss=search[i][1];if(ss=="")
alert("Error: Missing default search engine!");$('help').innerHTML=help;if(localStorage.getItem('note')!=null)
if(localStorage.getItem('note').length!=0)
toggleNote();build();$('q').value="";$('q').focus();}
function build(){$('mnu').innerHTML="";for(var i=0;i<menus.length;i++){$('mnu').innerHTML+="<li><label>"+menus[i][0]+"</label>\n<ul id=\"mnu_"+(i+1)+"\"></ul></li>";}
var m=1,skip=false;for(var i=0;i<links.length;i++){if(links[i][0]==""&&links[i][1]=="")
skip=true;if(!skip){var printimg="";if(showFavicon){var favicon;if(links[i][2]!="")
favicon=links[i][2];else
favicon=getFavicon(links[i][1]);printimg="<img id=\"img_"+i+"\" src=\""+favicon+"\""+" onload=\"javascript:this.style.visibility='inherit';\" /> ";}
$('mnu_'+m).innerHTML+="<li><a href=\""+links[i][1]+"\" target=\"_self\">"+printimg+links[i][0]+"</a></li>";}else{skip=false;m++;}}}
function handleQuery(e,q){var key=e.keyCode||e.which;if(key==13){var x=q.lastIndexOf("!");if(x!=-1&&x>=q.length-2){for(var i=0;i<search.length;i++){if(search[i][0]==q.substr(x)){window.location=search[i][1]+q.substr(0,x).replace(/&/g,"%26");return true;}}
window.location=ss+q.substr(0,x).replace(/&/g,"%26");}else{window.location=ss+q.replace(/&/g,"%26");}}}
function getFavicon(url){var l=document.createElement("a");l.href=url;return l.protocol+"//"+l.hostname+"/favicon.ico";}
function toggleNote(){if($('note')==null){$('help').innerHTML="<textarea id='note' spellcheck='false' placeholder='Store temporary note...'></textarea>";if(localStorage.getItem('note')!=null)
$('note').value=localStorage.getItem('note');$('note').addEventListener('change',function(){localStorage.setItem('note',$('note').value);});$('plus').value="-";$('note').focus();}else{$('help').innerHTML=help;$('plus').value="+";$('q').focus();}}