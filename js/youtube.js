var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars:{
      autoplay:true,
      loop:true,
      palylist: 'An6LvWQuj_8', // 반복재생할 유튜브 영상 ID를 넣어줘야함
    },
    events:{
      onReady: function(event){
        event.target.mute()
      }
    }
  });
}
