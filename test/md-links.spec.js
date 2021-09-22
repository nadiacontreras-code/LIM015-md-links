const {mdLinks, getStatus} = require('../mdLinks.js');
const arrayStatus = [
    {
    href: 'https://www.freecodecamp.org/news/',
    text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
    file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: "https://http.cat/4040",
    text: "Probando con 404",
    file: "C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md",
    status: 404,
    ok: 'FAIL'
  },
  {
    href: 'https://github.com/FabianBravoA/2018-1-TallerPromesasDirFilesJest',
    text: 'Taller de Promesa',
    file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    status: 200,
    ok: 'OK'
  },
];

describe('getStatus', () => {
  
    it('should be a function', () => {
        expect(typeof getStatus).toBe('function');
    });
    test('getStatus es una promesa resuelta',() => {
      return getStatus('prueba\\rutaNotas.md').then(data => {
        expect(data).toStrictEqual(arrayStatus);
      });
    });
  });
 

describe('mdLinks' , () => {
 const mdLinksResult = [
    {
      href: 'https://www.freecodecamp.org/news/',
      text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    },
    {
      href: 'https://http.cat/4040',
      text: 'Probando con 404',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    }, {
      href: 'https://github.com/FabianBravoA/2018-1-TallerPromesasDirFilesJest',
      text: 'Taller de Promesa',
      file: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',
    }
  ]

  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  test('mdLinks debe ser una promesa resuelta 1', () => {
    return mdLinks('prueba\\rutaNotas.md').then(data => {
      expect(data).toStrictEqual(mdLinksResult)
    })
 })
  test('mdLinks debe ser una promesa resuelta 2', () => {
    return mdLinks('prueba\\rutaNotas.md', {validate: false}).then(data => {
      expect(data).toStrictEqual(mdLinksResult)
    })
  });
  test('mdLinks debe ser una promesa resuelta 3', () => {
    return mdLinks('prueba\\rutaNotas.md', {validate: true}).then(data => {
      expect(data).toStrictEqual(arrayStatus)
    })
 })
});