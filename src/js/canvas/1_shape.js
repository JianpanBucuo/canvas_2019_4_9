//绘制图形
export const shape =  (ctx) => {

        ctx.fillStyle = 'rgba(200, 0, 0, .5)';
        ctx.fillRect(10,10,50,50);
        ctx.fillStyle = 'rgba(0, 0, 200, .7)';
        ctx.fillRect(30,30,50,50);
    //绘制矩形
        ctx.fillRect(25, 25, 100, 100);

        ctx.clearRect(45, 45, 60, 60);

        ctx.strokeRect(50, 50, 50, 50);
    //绘制路径
    /*通过不同颜色和宽度的线段或曲线 形成不同形状的点的集合
       
      1.创建路径起始点
      2.使用画图命令去画出路径
      3.封闭路径
      4.路径一旦生成，你就能通过描边 或 填充路径 来渲染图形
      beginPath()
      endPath()
      stroke()
      fill()
    */
   //三角形
      ctx.beginPath();
      ctx.moveTo(175, 150);
      ctx.lineTo(200, 175);
      ctx.lineTo(200, 100);
      ctx.fill();

    //笑脸
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
}