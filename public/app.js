(function() {
    startApp();
    
    function startApp() {
        let { clientHeight: height, clientWidth: width } = document.body;
        let { context, canvas } = getInitedCanvas(width, height);
        let angle = 0.4;

        console.log('Start drawing');
        
        context.translate(canvas.width/2, canvas.height/2);

        animate();
 
        function draw(level, deep) {
            if (level > deep) { return; }
            // context.fillRect(10,10,50,100);  

            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(200, 0);
            context.closePath();
            
            context.stroke();

            for(let i = 0; i < 2; i++) {
                context.save();
                context.translate(200 * i / 2, 0);
                context.scale(0.7, 0.7);
                
                context.save();
                context.rotate(angle);
                draw(level + 1, deep);
                context.restore();

                context.save();
                context.rotate(-angle);
                draw(level + 1, deep);
                context.restore();

                context.restore();
            }
        }

        function animate() {
            angle += 0.01;
            context.clearRect(-width, -height, width * 2, height * 2);
            context.save();

            for(let i = 0; i<6; i++) {
                draw(0, 5);
                context.rotate(2*Math.PI/6);
            }

            context.restore();
            window.requestAnimationFrame(animate);
        }
    }

    function getInitedCanvas(width = 500, height = 500) {
        let canvas = document.getElementById('draw-box');
        let context = canvas.getContext('2d');
        
        Object.assign(canvas, { width, height });

        return { canvas, context };
    }
})();
