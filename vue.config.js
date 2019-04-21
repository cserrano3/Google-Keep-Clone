module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/index.scss";
        `
      },
      css: {
        data: `@import "@styles/vendors/animate.css";`
      }
    }
  }
};