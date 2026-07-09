runAfterLoad(function() {
elements.cloner.tick = function(pixel) {
    if (settings.survivalClone) {
        for (let i = 0; i < 100; i++) {
            var x = pixel.x + (Math.random() < 0.5 ? 1 : -1);
            var y = pixel.y + (Math.random() < 0.5 ? 1 : -1);
            if (isEmpty(x,y)) {
                createPixel(settings.survivalClone,x,y);
            }
        }
    }
    else {
        for (var i = 0; i < adjacentCoords.length; i++) {
            var coords = adjacentCoords[i];
            var x = pixel.x + coords[0];
            var y = pixel.y + coords[1];
            if (!isEmpty(x,y,true)) {
                if (pixelMap[x][y].clone) { pixel.clone = pixelMap[x][y].clone; break }
                var element = pixelMap[x][y].element;
                if (element === pixel.element || elements[pixel.element].ignore.indexOf(element) !== -1) { continue }
                settings.survivalClone = element;
                survivalSave();
                break;
            }
        }
    }
};
});
