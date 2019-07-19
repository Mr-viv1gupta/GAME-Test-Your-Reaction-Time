        var start = new Date().getTime();
        
        var start = document.getElementById("start");
        var shape = document.getElementById("shape");
        var polygon = [];
        polygon.push(`polygon(50% 0%, 0% 100%, 100% 100%)`, 
                     `polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)`, 
                     `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`,
                    `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
                    `polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)`,
                    `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
                    `polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)`,
                    `polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)`,
                    `circle(50% at 50% 50%)`,
                    `ellipse(25% 40% at 50% 50%)`,
                    `polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)`)
        
        function randomPolygon(items)
        {

        return items[Math.floor(Math.random()*items.length)];

        }

        //var items = [254, 45, 212, 365, 2543];
        //consol;
        
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for(var i=0; i < 6; i++) {
                color += letters[Math.floor(Math.random()*16)];
            }
            return color;
        }
        
        function appearAfterDelay() {
            setTimeout(startTheGame, Math.random() * 2000)    
        }
        
        appearAfterDelay();
        
       function startTheGame() {
           var random = Math.random();
            var width = ((random * 200) > 40) ? (random * 200) : 40 ;
            var top = Math.random() * 100;
            var left = Math.random() * 100;
            
            shape.style.width = width + "px";
           shape.style.height = width + "px";
            shape.style.top = top > 55 ? `calc(100% - ${width}px))` : top < 15 ? `calc(0% + ${width}px))` : top + '%';
            shape.style.left = left > 80 ? `calc(100% - ${width}px))` : left < 20 ? `calc(0% + ${width}px))` : left + '%';
            
           shape.style.clipPath = randomPolygon(polygon);
           shape.style.display = "block";
           
           shape.style.backgroundColor = getRandomColor();
           start = new Date().getTime();
       }
        
       shape.onclick = function() {
           shape.style.display = "none";
           var end = new Date().getTime();
           var timeTaken = (end - start) / 1000; 
           
           if (sessionStorage.getItem('highScore')){
               if (sessionStorage.getItem('highScore') > timeTaken) {
                   sessionStorage.removeItem('highScore');
                   sessionStorage.setItem('highScore', timeTaken);
               }
           } else{
               sessionStorage.setItem("highScore", timeTaken);
               console.log('here');
           }
           
           document.getElementById("timeTakenResult").innerHTML = timeTaken + "s";
           
           
           document.getElementById("highscoreResult").innerHTML = sessionStorage.getItem('highScore')+"s";
           appearAfterDelay();
       }
       
       //window.location.reload();
        //sessionStorage.clear();