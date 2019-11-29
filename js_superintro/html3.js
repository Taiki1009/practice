let hour = new Date().getHours();

if(hour >= 19 && hour < 21){
window.alert('お弁当30％OFF');
}else if(hour === 9 || hour === 15){
windoow.alert('お弁当１個かったら１個おまけ');
}else{
  window.alert('お弁当はいかがですか');
}