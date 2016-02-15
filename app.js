(function(){
  "use strict";

 var Moosipurk = function(){

//see on SINGLETON PATTERN
   if(Moosipurk.instance){
     return Moosipurk.instance;
   }
// this viitab moosipurk fn
   Moosipurk.instance = this;
   console.log('moosipurgi sees');
   // kõik muutujad defineeritakse siin
   this.click_count=0;
   console.log(this);
// Kui tahan moosipurgile referenci, kasutan This= Moosipurgi rakendus ise
   this.init();
 };

 window.Moosipurk= Moosipurk;

 //Kõik funktsioonid lähevad Moosipurgi külge
Moosipurk.prototype = {
  init: function(){
   console.log('Rakendus läks tööle');

   //kuulame hiireklikki nupule
  this.bindMouseEvents();
  },

  bindMouseEvents: function(){
   document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));

 },
  addNewClick: function(event){
    console.log(event);
    this.click_count++;
    console.log(this.click_count);
  }

};

//kui leht laetud, käivitan Moosipurgi
window.onload = function(){
 var app = new Moosipurk();

};
})();
