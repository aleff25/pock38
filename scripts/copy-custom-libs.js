var existingConfig = require('../node_modules/@ionic/app-scripts/config/copy.config');

module.exports = Object.assign(existingConfig, {
  copyFonts: {
    src: ['{{ROOT}}/node_modules/@totvs/thf-theme/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyCss: {
    src: ['{{ROOT}}/node_modules/@totvs/thf-theme/css/thf-theme.min.css'],
    dest: '{{WWW}}/assets/css'
  }
});
