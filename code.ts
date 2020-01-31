const ab2str = (buf) => {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
};

const randomHash = () => Math.random()
    .toString(36).substr(2, 6);

const parser = (str) => {
  const idRegEx = /(?<="url\(#)[a-zA-Z0-9_-]+(?=\)")/g;
  const ids = str.match(idRegEx);

  ids?.map(id => {
    str = str.split(id).join(`${id}-${randomHash()}`)
  });

  return str;
};

figma.currentPage.selection.map(selected => {
  selected.exportAsync({ format: 'SVG' }).then(svgCode => {
    const svg = parser(ab2str(svgCode));

    figma.showUI(__html__, { visible: true, width: 500, height: 500 });
    figma.ui.postMessage({ type: 'show', data: svg });
  })
});
