/*
 lineWidth = value  设置线条宽度
 lineCap = type  设置线条末端样式
 lineJoin = type 设置线条衔接处样式
 miterLimit = value  设置当两条线相交时交界处的最大长度
 getLineDash()  返回一个包含当前虚线样式，长度为非负偶数的数组
 setLineDash(segment) 设置当前虚线样式
 lineDashOffset = value 设置虚线样式的起始偏移量
 */
export const line = (ctx,off) =>　{
    const lineCap = ['butt', 'round', 'square']; 
    let offSet = 0;
    // for (let i =0; i < 6; i++) {
    //     ctx.lineWidth = 1 + i ;
    //     ctx.beginPath();
    //     ctx.moveTo(5 + i* 10, 5);
    //     ctx.lineTo(5 + i * 10, 100);
    //     ctx.stroke();
    // }
    // ctx.strokeStyle = 'red';
    // for (let i = 0; i < lineCap.length; i++) {
    //     ctx.lineCap = lineCap[i];
    //     ctx.beginPath();
    //     ctx.moveTo(100 + i * 10, 10);
    //     ctx.lineTo(100 + i * 10, 100);
    //     ctx.stroke();
    // }
    //设置虚线
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -off;
    ctx.strokeRect(10, 10, 100, 100);
        // line();
    
}