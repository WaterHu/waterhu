var bannerAD=new Array();
   var bannerADlink=new Array();
   var adNum=0;
   bannerAD[0]="../img/sky.jpg" ;   
   bannerAD[1]="../img/tree.jpg";
   bannerAD[2]="../img/sherlock.jpg";

  var preloadedimages=new Array();
   for (i=1;i<bannerAD.length;i++){
      preloadedimages[i]=new Image();
      preloadedimages[i].src=bannerAD[i];
   }
function setTransition(){
   if (document.all){
      bannerADrotator.filters.revealTrans.Transition=Math.floor(Math.random()*23);
      bannerADrotator.filters.revealTrans.apply();
   }
}
function playTransition(){
   if (document.all)
      bannerADrotator.filters.revealTrans.play()
}
function nextAd(){
   if(adNum<bannerAD.length-1)adNum++ ;
      else adNum=0;
   setTransition();
   document.images.bannerADrotator.src=bannerAD[adNum];
   playTransition();
   theTimer=setTimeout("nextAd()", 5000);
}