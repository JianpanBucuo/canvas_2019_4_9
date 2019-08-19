export const colors = (ctx) => {
    /*
     fillStyle 填充内容的方法
     strokeStyle 图形轮廓的颜色
    */
       for (let i = 0; i < 6; i++) {
           for (let j = 0; j < 6; j++) {
               let style  =  'rgba(' + Math.floor(255 - 42.5* i) + ',' + Math.floor(255 -42.5 * j) +',0, 1)'
               ctx.fillStyle = style;
               ctx.fillRect(  j*25,  i * 25, 25,25);
               
               ctx.beginPath();
               ctx.strokeStyle = style;
               ctx.arc(200 + j * 25, 200 + i * 25, 10 , 0 , Math.PI * 2, false);          
               ctx.stroke();
           }
       }
        // globalAlpha 事例
               ctx.fillStyle = '#FD0';
               const rectWidth = 75;
               ctx.fillRect(0, 0, rectWidth, rectWidth);
               ctx.fillStyle = '#6C0';
               ctx.fillRect(75, 0, rectWidth, rectWidth);
               ctx.fillStyle = '#09F';
               ctx.fillRect(0, 75, rectWidth, rectWidth);
               ctx.fillStyle = '#F30';
               ctx.fillRect(75, 75, rectWidth, rectWidth);
               ctx.fillStyle = '#FFF';
               ctx.globalAlpha = 0.4;
               for (let i = 0; i < 6; i++) {
                   ctx.beginPath();
                   ctx.arc(75,75, 30 + i *5, 0 , Math.PI * 2, false);
                   ctx.fill();
               }


}