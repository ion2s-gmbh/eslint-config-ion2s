const recommendedConfig = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json'); // eslint-disable-line

// Workaround to set all TS rules to 'off'

const allRulesDisabled = Object.keys(recommendedConfig.rules).reduce((accObj, rule) => {
    accObj[rule] = 'off';
    return accObj;
}, {});

module.exports = allRulesDisabled;
