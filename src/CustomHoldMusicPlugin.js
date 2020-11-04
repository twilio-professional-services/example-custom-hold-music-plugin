import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import PluginConfig from './config';

const PLUGIN_NAME = 'CustomHoldMusicPlugin';

export default class CustomHoldMusicPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.Actions.addListener('beforeHoldParticipant', async (payload) => {
      payload.holdMusicUrl = PluginConfig.holdMusicUrl;
    });

    flex.Actions.addListener('beforeHoldCall', async (payload) => {
      payload.holdMusicUrl = PluginConfig.holdMusicUrl;
    });

    flex.Actions.addListener('beforeTransferTask', async (payload) => {
      flex.Actions.invokeAction('HoldCall', payload);
    });
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
}
