var item = document.getElementsByClassName("Media__ButtonContainer-sc-1x98dcb-3 bGSnlN")[0]
var title = document.URL.split('/')[4];
var name = document.title.replace(' - IMDb', '');

var button_icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="50" height="50" x="0" y="0" viewBox="0 0 163.861 163.861" style="enable-background:new 0 0 512 512" xml:space="preserve"><g transform="matrix(0.6,0,0,0.6,32.77210006713867,32.77225894927979)"><g xmlns="http://www.w3.org/2000/svg">	<path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" fill="#ffffff" data-original="#000000" style=""/></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>`

var isTV = false;
var season = '01';
var episode = 1;

if (document.title.search('TV') > 0) {
    isTV = true;
}

var form = '';
var text = 'PLAY THIS MOVIE'

if (isTV) {
    var link = `https://databasegdriveplayer.me/player.php?type=series&imdb=${title}&season=${season}&episode=${episode}`;
    form = `<form id="tv-form" action="#" onsubmit='return false'> \
                <label id="TVseason" style="color:rgb(119,119,119);    font-weight: bold;
                font-size: 18px;">Season </label> \
                <input name="season" placeholder="1" max=20 min=1 type=Number value=1 style="padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;"> \
                <label id="TVepisode" style="color:rgb(119,119,119);    font-weight: bold;
                font-size: 18px;"> Episode </label> \
                <input name="episode" placeholder="1" max=50 min=1 type=Number value=1 style="padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;"> \
                <input type="button" value="submit"  style="background-color: blue;
                color: white;
                padding: 15px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;" onclick="document.getElementById('movie-player').src = 'https://databasegdriveplayer.me/player.php?type=series&imdb='+document.URL.split('/')[4]+'&season='+this.form.season.value+'&episode='+this.form.episode.value;"> \ 
            </form>`;
    name = name.split('(')[0];
    text = text.replace('MOVIE', 'SERIES');
} else {
    var link = `https://databasegdriveplayer.me/player.php?imdb=${title}`;
}


var css_code = `<style>
.movie_playback{position: absolute;
    margin: 0;
    top: 0;
    height: 100%;
    border: 0;
    padding: 6px!important;
    color: #fff;
    cursor: pointer;
    background: transparent;
    filter: drop-shadow(0 0 5px #000);}
    </style>`

// Inserting button code
item.innerHTML = (`<a data-testid="hero-media__video-link" class="play-button ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-onBase ipc-secondary-button Link__MediaLinkButton-yyqs5y-3 jSoRtE" role="button" tabindex="0" aria-label="PLAY" aria-disabled="false" href="#movie"><div class="ipc-button__text"><div class="Link__MediaLinkContentContainer-yyqs5y-2 eroNtN">${button_icon}<div class="Link__MediaLinkText-yyqs5y-1 hydgB">PLAY</div></div></div></a>`) + item.innerHTML;
// Inserting Modal code
var modal = `<div id="movie" class="modal" style="z-index:999;"> \
            <div class="modal-content" style="height:80%"> \
                <div align="center"><h2>${name}</h2> \
                ${form}</div><br>
                <iframe id="movie-player" src="${link}" frameborder="0" width="100%" height="80%" allowfullscreen="allowfullscreen"> </iframe>\
            </div> \
            </div>`;
document.body.innerHTML = modal + document.body.innerHTML;
document.head = document.head + css_code;
// Calling modal
var modalElement = document.getElementById("movie");
var play = document.getElementsByClassName("play-button")[0];
play.onclick = () => {
    modalElement.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modalElement) {
        modalElement.style.display = "none";
    }
}