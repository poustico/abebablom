var config = {};

module.exports = {
  getConfig: getConfig,
  getConfigItem: getConfigItem,

  setConfig: setConfig,
  setConfigItem: setConfigItem
};

function getConfig() {
  return config;
}

function setConfig(data) {
  config = data;
  return config;
}

function getConfigItem(key){
  return config[key];
}

function setConfigItem(key, value){
  config[key] = value;
  return config;
}
