(()=>{const i=document.querySelector(".home"),t=document.querySelector(".hp"),c=document.querySelector(".menu"),e=document.querySelector(".mp"),s=document.querySelector(".about"),a=document.querySelector(".ap");i.addEventListener("click",(function(){t.classList.remove("ip--inactive"),e.classList.contains("ip--inactive")||e.classList.add("ip--inactive"),a.classList.contains("ip--inactive")||a.classList.add("ip--inactive")})),c.addEventListener("click",(function(){e.classList.remove("ip--inactive"),t.classList.contains("ip--inactive")||t.classList.add("ip--inactive"),a.classList.contains("ip--inactive")||a.classList.add("ip--inactive")})),s.addEventListener("click",(function(){a.classList.remove("ip--inactive"),e.classList.contains("ip--inactive")||e.classList.add("ip--inactive"),t.classList.contains("ip--inactive")||t.classList.add("ip--inactive")}))})();