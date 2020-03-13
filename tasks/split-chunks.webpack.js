function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const splitChunks = {
  cacheGroups: {
    fooStyles: {
      name: "foo",
      test: (m, c, entry = "foo") =>
        m.constructor.name === "CssModule" && recursiveIssuer(m) === entry,
      chunks: "all",
      enforce: true
    },
    barStyles: {
      name: "bar",
      test: (m, c, entry = "bar") =>
        m.constructor.name === "CssModule" && recursiveIssuer(m) === entry,
      chunks: "all",
      enforce: true
    }
  }
};

module.exports = splitChunks;
