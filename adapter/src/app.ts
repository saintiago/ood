import * as graphics_lib from './graphics_lib';
import * as modern_graphics_lib from './modern_graphics_lib';
import * as shape_drawing_lib from './shape_drawing_lib';

import * as stream from './lib/output_stream';

function PaintPicture(painter: shape_drawing_lib.CCanvasPainter) {

    const triangle = new shape_drawing_lib.CTriangle({ x: 10, y: 15 }, { x: 100, y: 200 }, { x: 150, y: 250 });
    const rectangle = new shape_drawing_lib.CRectangle({ x: 30, y: 40 }, 18, 24);

    // TODO: нарисовать прямоугольник и треугольник при помощи painter
}

export function PaintPictureOnCanvas() {

    const simpleCanvas = new graphics_lib.CCanvas();
    const painter = new shape_drawing_lib.CCanvasPainter(simpleCanvas);
    PaintPicture(painter);
}

export function PaintPictureOnModernGraphicsRenderer() {
    const renderer = new modern_graphics_lib.CModernGraphicsRenderer(new stream.Cout());

    // TODO: при помощи существующей функции PaintPicture() нарисовать
    // картину на renderer
    // Подсказка: используйте паттерн "Адаптер"
}