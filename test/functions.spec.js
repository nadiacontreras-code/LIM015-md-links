const { pathExistFun, pathIsAbsolute, pathResolveAbsolute, pathIsFile, listOfFiles, fileIsMd, getLinks } = require( '../functions.js');


const pasTest = 'text.txt'
describe('pathExistFun', () => {
  it('should be a function', () => {
    expect(typeof pathExistFun).toBe('function');
  });
  it('should be a exist path ', () => {
    expect(pathExistFun(pasTest)).toBe(true);
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
  const containerLink =
  [
    { href: 'https://www.freecodecamp.org/news/',
      text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    },
    {
      href: "https://http.cat/4040",
      text: "Probando con 404",
      file: "C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md",
    },
    {
      href: 'https://github.com/FabianBravoA/2018-1-TallerPromesasDirFilesJest',
      text: 'Taller de Promesa',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    }
  ];
  it('should be a function', () => {
    expect(typeof getLinks).toBe('function');
  });
  test('should show an array with object (elements of the arrays) ', () => {
    expect(getLinks('prueba\\rutaNotas.md')).toStrictEqual(containerLink);
  });
});


