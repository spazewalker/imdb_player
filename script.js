var item = document.getElementsByClassName("plot_summary ")[0]
var title = document.URL.split('/')[4];
var name = document.title.replace(' - IMDb', '');

var isTV = false;
var season = 1;
var episode = 1;

if(document.title.search('TV')>0){
    isTV = true;
}

var form = '';

if(isTV){
    var link = `https://databasegdriveplayer.me/player.php?type=series&imdb=${title}&season=${season}&episode=${episode}`;
    form = `<form action="#" onsubmit='return false'> \
                <label id="TVseason" style="color:rgb(119,119,119);">Season </label> \
                <input name="season" placeholder="1" type=Number value=1> \
                <label id="TVepisode" style="color:rgb(119,119,119);"> Episode </label> \
                <input name="episode" placeholder="1" type=Number value=1> \
                <input type="button" value="submit" onclick="document.getElementById('movie-player').src = 'https://databasegdriveplayer.me/player.php?type=series&imdb='+document.URL.split('/')[4]+'&season='+this.form.season.value+'&episode='+this.form.episode.value;"> \ 
            </form>`;
    name = name.split('(')[0];
}else{
    var link = `https://databasegdriveplayer.me/player.php?imdb=${title}`;
}

document.getElementById('wrapper').style.background = "rgba(0,0,0,0.9)";
// Inserting button code
item.innerHTML = (`<div class='divider'></div> \
                    <div class=''> \
                        <div align="center"> <button class='primary play-button' style="width:250px">PLAY THIS MOVIE</button> </div> \
                    </div> \
                    </div>\
                    <div class='divider'></div> `) + item.innerHTML;
// Inserting Modal code
var modal = `<div id="myModal" class="modal"> \
            <div class="modal-content"> \
                <div align="center"><h2>${name}</h2> \
                ${form}</div><br>
                <iframe id="movie-player" src="${link}" frameborder="0" width="100%" height="700" allowfullscreen="allowfullscreen"> \
                </iframe> \
            </div> \
            </div>`;
document.body.innerHTML = document.body.innerHTML + modal;
// Calling modal
var modalElement = document.getElementById("myModal");
var play = document.getElementsByClassName("play-button")[0];
play.onclick = () => {
    modalElement.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modalElement) {
        modalElement.style.display = "none";
    }
}