import canvas from '../css/canvas.css'
function draw () {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '500px';
    
    const ctx = canvas.getContext('2d'); //用来获取上下文和 绘画功能
    
    ctx.fillStyle = 'rgba(200, 0, 0, .5)';
    ctx.fillRect(10,10,50,50);

    ctx.fillStyle = 'rgba(0, 0, 200, .7)';
    ctx.fillRect(30,30,50,50);

}
window.onload = () => {
  draw();
}