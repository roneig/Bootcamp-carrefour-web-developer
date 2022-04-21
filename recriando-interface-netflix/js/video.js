/* Customizações para abrir uma janela de vídeo
   copiado do site https://www.blogson.com.br/criando-um-pop-up-modal-para-executar-video/
*/

var vid = document.getElementById("myVideo"); 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  vid.play(); 
}
span.onclick = function() {
  modal.style.display = "none";
  vid.pause();
}            
window.onclick = function(event) {
  if (event.target == modal) 
  {                
    modal.style.display = "none";
    vid.pause();
  }
}

src="https://cdn.jsdelivr.net/gh/thelevicole/youtube-to-html5-loader@4.0.1/dist/YouTubeToHtml5.js">
new YouTubeToHtml5();