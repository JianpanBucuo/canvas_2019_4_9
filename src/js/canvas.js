import canvas from '../css/canvas.css'
import { arc } from './canvas/2_arc';
import { shape } from './canvas/1_shape';
import { colors } from './canvas/3_colors';
function draw () {
    const canvas = document.getElementById('canvas');
 
    const ctx = canvas.getContext('2d'); //用来获取上下文和 绘画功能
    
    // shape(ctx);
    // arc(ctx);
    colors(ctx);
}
window.onload = () => {
  draw();
}