import { IPluginStorage } from './extensionsStorage';
import { PluginConfigurations, ImasiideProxyImpl } from './index';
export interface ExtensionProperty {
  active: () => void;
  dispose: () => void;
}

export interface PluginContext {
  subscriptions: ExtensionProperty[];
}

export interface Plugin {
  activate: (ctx: PluginContext, Impl: ImasiideProxyImpl) => void;
  deactivate: (ctx: PluginContext, Impl: ImasiideProxyImpl) => void;
  // 动态更新 store
  store: IPluginStorage;
  config: PluginConfigurations;
  context: PluginContext;
}
