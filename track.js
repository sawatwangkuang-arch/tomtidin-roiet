(function(){
var ID='AW-18501026471';
var LABEL='5NJqCOn0h50dEKeF_fVE';
var s=document.createElement('script');
s.async=true;
s.src='https://www.googletagmanager.com/gtag/js?id='+ID;
document.head.appendChild(s);
window.dataLayer=window.dataLayer||[];
window.gtag=function(){dataLayer.push(arguments);};
gtag('js',new Date());
gtag('config',ID);
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a');
  if(!a)return;
  var h=a.getAttribute('href')||'';
  if(h.indexOf('tel:')===0||h.indexOf('line.me')>-1||h.indexOf('lin.ee')>-1){
    gtag('event','conversion',{send_to:ID+'/'+LABEL});
  }
});
})();
