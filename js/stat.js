'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура,вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidth = 40;
  var histogramHeigth = 150;
  var step = histogramHeigth / max;
  var columnWidth = 40;
  var columnSpace = 50;

  function getColumnColor(name) {
  var transparency = Math.random();
  var columnColor;
  if (name === 'Вы') {
    columnColor = 'rgba(255, 0, 0, 1)';
  } else {
    columnColor = 'rgba(0, 0, 255,' + transparency + ')';
  }
  return columnColor;
}

  ctx.textBaseline = 'top';
  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = getColumnColor(names[i]);
    ctx.fillRect(120 + i * (columnSpace + columnWidth), 250, columnWidth, -times[i] * step);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], 120 + i * (columnSpace + columnWidth), 250);
    ctx.fillText(times[i].toFixed(0), 120 + i * (columnSpace + columnWidth), 250-(times[i]*step)-20);
  }
  //ctx.fillRect(120, 250, columnWidth, -times[0] * step);
  //ctx.fillRect(120 + columnSpace, 250, columnWidth, -times[1] * step);
  //ctx.fillRect(120 + 2 * columnSpace, 250, columnWidth, -times[2] * step);
};
