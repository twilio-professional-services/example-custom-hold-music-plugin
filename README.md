# Notice - Legacy Code

**This plugin is no longer maintained. An updated version of the plugin is available as part of the customizable [Flex Project Template](https://github.com/twilio-professional-services/flex-project-template), where it is an optional feature.**

# Example Custom Hold Music Plugin

You may deploy this plugin as-is to change the hold music of your Flex instance. Additionally, feel free to use the code in the `src/CustomHoldMusicPlugin.js` file to make changes to your own plugins if they are using hold music.

## Requirements

This plugin uses the new Flex Plugins CLI and React version 16.13.1. You will need the following to run this code locally and deploy it to Twilio.

- **Twilio CLI** - You'll need the latest version of the Twilio CLI for your specific Operating System.
  - Instructions: https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli
- **Flex Plugins CLI** - Install or upgrade to the latest version of the Flex Plugins CLI.   
  - Instructions: https://www.twilio.com/docs/flex/developer/plugins/cli/install
- **Flex React** version set to 16.13.1
  - Instructions: https://www.twilio.com/docs/flex/developer/plugins/react-versions

---

## Configuration

You will only need to make one configuraiton change to run this code. In the `src/config.js` file add the URL to your hold music at `holdMusicUrl`, for example:

```
export default {
  holdMusicUrl: '<put your hold music URL here>',
};
```

---

## Run The Plugin Locally

From commandline run:
```
UNBUNDLED_REACT=true npm install
```

When that finishes installing run

```
twilio flex:plugins:start
```

Flex will start in your browser at `localhost:3000`

---

## Deploy & Release The Plugin to Twilio

From the commandline run the following. Be sure to change the value of the `changelog` and `description` to match your use case. If this is the first time you've deployed this plugin you'll probably want to use the `--major` flag. Your options for version flags are `--major`, `--minor`, and `--patch`.

```
twilio flex:plugins:deploy --major --changelog "Notes for this version" --description "Functionality of the plugin"
```

**Release code to Flex** in one of two ways:

1. CLI - After the deployment you can release the plugin by running the following commandline instructions.

```
twilio flex:plugins:release --plugin plugin-custom-hold-music@1.0.0 --name "Initial deployment" --description "The initial deployment of the custom hold music plugin"
```

2. Use the **Flex Plugins Dashboard** as described here: https://www.twilio.com/docs/flex/developer/plugins/dashboard

❗️If you run into any problems, full instructions for deploy and Release from the CLI can be found here: https://www.twilio.com/docs/flex/developer/plugins/cli/deploy-and-release

## Disclaimer
This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.

