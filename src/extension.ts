import { PluginConfigurations, PluginContext, PluginType } from './libs';
import { Controls } from './components/control';
import * as masiide from 'masiide';

const { masiideProxyImpl } = masiide;

console.log('masiideProxyImpl', masiideProxyImpl);

export function activate(ctx: PluginContext) {
  const addControl = masiideProxyImpl.addControl({
    componentId: 'sample-component-id',
    componentFunc: Controls,
    name: 'right control',
    iconName: 'GroupObject'
  });

  const command = masiideProxyImpl.registerCommand({
    name: 'masiide-pluginId.testCommand',
    callback: () => {
      alert('test command');
    }
  });

  const registerFunc = masiideProxyImpl.registerFunction({
    name: 'masiide-pluginId.testFunction',
    function: () => {
      console.log('register function');
    }
  });

  ctx.subscriptions.push(addControl, command, registerFunc);
}

export function deactivate(_ctx: PluginContext) {
  console.log('deactivate plugin');
}

export const config: PluginConfigurations = {
  pluginId: 'masiide-pluginId',
  version: '0.0.1',
  type: PluginType.view,
  active: true,
  description: {
    title: 'masiide-pluginId',
    icon: '#CommentSolid',
    description: 'extensionDescription'
  }
};
