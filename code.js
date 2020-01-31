var ab2str = function (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
};
var randomHash = function () { return Math.random()
    .toString(36).substr(2, 6); };
var parser = function (str) {
    var _a;
    var idRegEx = /(?<="url\(#)[a-zA-Z0-9_-]+(?=\)")/g;
    var ids = str.match(idRegEx);
    (_a = ids) === null || _a === void 0 ? void 0 : _a.map(function (id) {
        str = str.split(id).join(id + "-" + randomHash());
    });
    return str;
};
figma.currentPage.selection.map(function (selected) {
    selected.exportAsync({ format: 'SVG' }).then(function (svgCode) {
        var svg = parser(ab2str(svgCode));
        figma.showUI(__html__, { visible: true, width: 500, height: 500 });
        figma.ui.postMessage({ type: 'show', data: svg });
    });
});
