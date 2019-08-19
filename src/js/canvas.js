import canvas from '../css/canvas.css'
import { shape } from './canvas/1_shape';
import { arc } from './canvas/2_arc';
import { colors } from './canvas/3_colors';
import { line } from './canvas/4_line';
function draw () {
    const canvas = document.getElementById('canvas');
 
    const ctx = canvas.getContext('2d'); //用来获取上下文和 绘画功能
    
    // shape(ctx);
    // arc(ctx);
    colors(ctx);
    let offset = 0;
    function march() {
      offset++;
      if (offset > 16) {
        offset = 0;
      }
      line(ctx, offset);
      setTimeout(march, 1000);
    }
    march();
}
window.onload = () => {
  draw();
}