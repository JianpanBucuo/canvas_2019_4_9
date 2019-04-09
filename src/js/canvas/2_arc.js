//绘制圆形
export const arc =  (ctx) => {
     for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            ctx.beginPath();
            let x = 25 + j * 50;
            let y = 25 + i * 50;
            let raduis = 20;
            let startAngle = 0;
            let endAngle =  Math.PI + (Math.PI * j) / 2;
            let  antiClokewise = i % 2 ==0 ? false : true;
            ctx.arc(x, y, raduis, startAngle, endAngle, antiClokewise);
            if ( i > 1 ) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
     }
}