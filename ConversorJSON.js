function convertJSON(json) {
  let quadros = json.frames;
  let arrayCalls = [];
  let arraySelfTime = [];
  let arrayTotalTime = [];
  let arrayGCMemory = [];
  let objetoFinal = {
    "calls": [],
    "selfTime": [],
    "totalTime": [],
    "gcMemory": []
  };

  for (let i = 0; i < quadros.length; i++) {
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

  arrayCalls.push('END');
  arraySelfTime.push('END');
  arrayTotalTime.push('END');
  arrayGCMemory.push('END');

  objetoFinal.calls = arrayCalls;
  objetoFinal.selfTime = arraySelfTime;
  objetoFinal.totalTime = arrayTotalTime;
  objetoFinal.gcMemory = arrayGCMemory;

  console.log(JSON.stringify(objetoFinal));
}