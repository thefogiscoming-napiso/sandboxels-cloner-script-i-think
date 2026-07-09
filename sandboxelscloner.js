runAfterLoad(function () {
    if (!elements.cloner) return;

    const oldTick = elements.cloner.tick;

    elements.cloner.tick = function(pixel) {
        for (let i = 0; i < 100; i++) {
            oldTick(pixel);
        }
    };
});