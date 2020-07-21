var item = document.getElementsByClassName("titleReviewBar ")[0]
var title = document.URL.split('/')[4];
var name = document.title.replace(' - IMDb', '');
document.getElementById('wrapper').style.background = "rgba(0,0,0,0.9)";
// Inserting button code
item.innerHTML = item.innerHTML + (`<div class='divider'></div> \
                                    <div class='titleReviewBarItem'> \
                                    <div class=''> \
                                        <button class='primary play-button' style="width:150px">PLAY THIS MOVIE</button> \
                                    </div> \
                                    </div>`)
// Inserting Modal code
var modal = `<div id="myModal" class="modal"> \
            <div class="modal-content"> \
                <h4>${name}</h4>
                <iframe src="https://databasegdriveplayer.me/player.php?imdb=${title}" frameborder="0" width="100%" height="700" allowfullscreen="allowfullscreen"> \
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