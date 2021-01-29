# IMDB Movie Player

## Introduction
This is a small script which adds a 'PLAY THIS MOVIE' button in any IBDM page, which when clicked, opens a modal with a video player.
Now I won't have to copy the links over and over again :P.
Provided movie is a pirated one, obviously.
Give this extension a try, you won't have to search for movie links again.
If you like it, appreciate it, star this repo. And if you face any error, contact me\
[Update] To use this extention on the new verson of IMDB, use the pre-release of v2, installation process is same amd play button will appear above the videos button in the right.
<br>
<img alt="example" src="/example.png">

## Installation

To install this extension follow these steps: \
__Step 1__ Clone this repo.
```bash
git clone https://github.com/spazewalker/imdb_player
```
__step 2__ Open extensions page in Google Chrome.
In the address bar of a new tab in chrome type `chrome://extensions` and hit return.\
__Step 3__
On top right of this page there'll be an option of 'developer mode', click on that and enter developer mode.\
__Step 4__
Now, you'll find an option of 'Load Unpacked', select the folder in which this repo was cloned after selecting 'Load Unpacked' option. 
<div align="center"><img alt="image showing these steps" src="/load_extension.png" height=300></div>

__Step 5__ Now visit any IMDB movie page, you'll find a 'PLAY THIS MOVIE' button as shown. Click on that and your movie will play.
<div align="center"><img alt="button" src='/demo_button.png'></div>

## More Info on Chrome Extensions
Extensions are made of different, but cohesive, components. Components can include background scripts, content scripts, an options page, UI 
elements and various logic files. Extension components are created with web development technologies: HTML, CSS, and JavaScript. An extension's
components will depend on its functionality and may not require every option.

This tutorial will build an extension that allows the user to change the background color of any page on developer.chrome.com.
It will use many core components to give an introductory demonstration of their relationships.\
Visit [Getting Started Tutorial | Google Extensions](https://developer.chrome.com/extensions/getstarted)
