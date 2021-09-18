const { pathExistFun, pathIsAbsolute, pathResolveAbsolute, pathIsFile, listOfFiles, fileIsMd, getLinks, getStatus } = require( '../functions');

/*describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});*/
describe('pathExistFun', () => {
  it('should be a function', () => {
    expect(typeof pathExistFun).toBe('function');
  });
  test('should be a exist path ', () => {
    expect(pathExistFun('text.txt')).toBe(true);
  });

});

describe('pathIsAbsolute', () => {
  it('should be a function', () => {
    expect(typeof pathIsAbsolute).toBe('function');
  });
  test('should be a Absolute path ', () => {
    expect(pathIsAbsolute('text.txt')).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\text.txt');
    expect(pathIsAbsolute('prueba')).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba');
    expect(pathIsAbsolute('prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md')).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md');
  });

});

describe('pathResolveAbsolute', () => {
  it('should be a function', () => {
    expect(typeof pathResolveAbsolute).toBe('function');
  });
  test('should convert to absolute path ', () => {
    expect(pathResolveAbsolute('text.txt')).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\text.txt');
  });
});

describe('pathIsFile', () => {
 
  it('should be a function', () => {
    expect(typeof pathIsFile).toBe('function');
  });
  test('should show a file  ', () => {
    expect(pathIsFile('text.txt')).toStrictEqual(['C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\text.txt']); 
  });
});

describe('listOfFiles', () => {
  const arrayList = [
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\cuaderno.txt',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\app.js',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\oficina.txt',
   ]
  it('should be a function', () => {
    expect(typeof listOfFiles).toBe('function');
  });
  test('should show a file list ', () => {
    expect(listOfFiles('prueba\\firstDirectory')).toStrictEqual(arrayList); //toStrictEqual
  });
});

describe('fileIsMd', () => {
  const filesMd = [
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md',
     ]
  it('should be a function', () => {
    expect(typeof fileIsMd).toBe('function');
  });
  test('should show a markdown file list ', () => {
    expect(fileIsMd('prueba\\firstDirectory')).toStrictEqual(filesMd);
  });
});
describe('getLinks', () => {
  const containerLink =[
    { file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md', 
      text: 'Promise - MDN',  
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'
    },
    { file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',  
    text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',  
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/'  
   } ];
  it('should be a function', () => {
    expect(typeof getLinks).toBe('function');
  });
  test('should show a object ', () => {
    expect(getLinks('prueba\\rutaNotas.md')).toStrictEqual(containerLink);
  });
});

 
  const containerLink =[
    { file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md', 
      text: 'Promise - MDN',  
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'
    },
    { file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',  
    text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',  
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/'  
   } ];
  const arrayStatus = [
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      Text: 'Promise - MDN',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
      Text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
      status: 200,
      ok: 'OK'
    }
  ];

describe('getStatus', () => {
  it('should be a function', () => {
      expect(typeof getStatus).toBe('function');
  });
  test('the getStatus es una promesa resuelta', () => {
    return getStatus('prueba\\rutaNotas.md').then(data => {
      expect(data).toBe(arrayStatus);
    });
  });
});
/* test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
}); */

/* test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
}); */