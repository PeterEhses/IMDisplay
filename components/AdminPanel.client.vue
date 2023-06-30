



<template>
  <div></div>
</template>
<script>
import createReactClass from "create-react-class";
import React from "react";

import yaml from "js-yaml";
window.CMS_MANUAL_INIT = true;
import CMS, { init } from "netlify-cms-app";

fetch("backend-config.yml", {
  credentials: "same-origin",
})
  .then((response) => {
    response.text().then((text) => {
      const config = yaml.load(text);

      config.load_config_file = false;
      console.log(config);
      init({ config: config });
    //   window.CMS = CMS;
    //   window.initCMS = CMS.init;
    //   window.createClass = window.createClass || createReactClass;
    //   window.h = window.h || React.createElement;
    });
  })
  .catch((error) => error);

export default {};
</script>
