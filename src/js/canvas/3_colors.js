export const colors = (ctx) => {
    /*
     fillStyle 填充内容的方法
     strokeStyle 图形轮廓的颜色
    */
       for (let i = 0; i < 6; i++) {
           for (let j = 0; j < 6; j++) {
               let style  =  'rgba(' + Math.floor(255 - 42.5* i) + ',' + Math.floor(255 -42.5 * j) +',0, .9)'
               ctx.fillStyle = style;
               ctx.fillRect(  j*25,  i * 25, 25,25);
               
               ctx.beginPath();
               ctx.strokeStyle = style;
               ctx.arc(100 + j * 25, 100 + i * 25, 10 , 0 , Math.PI * 2, false);               
               ctx.stroke();
           }
       }
}