import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeProvider } from '@ashwanth1109/looper.providers.theme';

import { DevAspect } from './dev.aspect';

export class DevPreviewMain {
  static runtime: any = PreviewRuntime;
  static dependencies: any = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const devPreviewMain = new DevPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeProvider]);

    return devPreviewMain;
  }
}

DevAspect.addRuntime(DevPreviewMain);
