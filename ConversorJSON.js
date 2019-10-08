function convertJSON(json) {
  let quadros = json.frames;
  let arrayQuadros = [];
  let arrayCalls = [];
  let arraySelfTime = [];
  let arrayTotalTime = [];
  let arrayGCMemory = [];
  let objetoFinal = {
    "quadrosTotal": [],
    "quadrosCalls": [],
    "calls": [],
    "quadrosSelfTime": [],
    "selfTime": [],
    "quadrosTotalTime": [],
    "totalTime": [],
    "quadrosGCMemory": [],
    "gcMemory": []
  };

  let contadorFrames = 1;

  for (let i = 0; i < quadros.length; i++) {
    if (contadorFrames == 10) {
      arrayQuadros.push((i + 1));
      contadorFrames = 1;
    }
    else {
      arrayQuadros.push('');
      contadorFrames++;
    }
    if (quadros[i].functions.length == 0) {
      arrayCalls.push('');
      arraySelfTime.push('');
      arrayTotalTime.push('');
      arrayGCMemory.push('');
    }
    else {
      let array = quadros[i].functions[0].values;
      for (let j = 0; j < array.length; j++) {
        switch (array[j].column) {
          case 'Calls':
            arrayCalls.push(array[j].value);
            break;

          case 'SelfTime':
            arraySelfTime.push(array[j].value);
            break;

          case 'TotalTime':
            arrayTotalTime.push(array[j].value);
            break;

          case 'GCMemory':
            let unidade = array[j].value.replace(/(.*)\s/g, '');
            let valor = parseFloat(array[j].value.replace(/\s(.*)/g, ''));
            switch (unidade) {

              case 'B':
                valor = valor * 1;
                break;

              case 'KB':
                valor = valor * 1000;
                break;

              case 'MB':
                valor = valor * 1000000;
                break;
            }
            arrayGCMemory.push(valor.toString());
            break;
        }
      }
    }
  }

  arrayQuadros.push('END');
  arrayCalls.push('END');
  arraySelfTime.push('END');
  arrayTotalTime.push('END');
  arrayGCMemory.push('END');

  objetoFinal.quadrosTotal = arrayQuadros;
  objetoFinal.quadrosCalls = arrayQuadros;
  objetoFinal.calls = arrayCalls;
  objetoFinal.quadrosSelfTime = arrayQuadros;
  objetoFinal.selfTime = arraySelfTime;
  objetoFinal.quadrosTotalTime = arrayQuadros;
  objetoFinal.totalTime = arrayTotalTime;
  objetoFinal.quadrosGCMemory = arrayQuadros;
  objetoFinal.gcMemory = arrayGCMemory;

  console.log(JSON.stringify(objetoFinal));
}