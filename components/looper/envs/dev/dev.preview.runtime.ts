import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { DevAspect } from './dev.aspect';

export class DevPreviewMain {
  static runtime: any = PreviewRuntime;
  static dependencies: any = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const devPreviewMain = new DevPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // react.registerProvider([ThemeCompositions]);

    return devPreviewMain;
  }
}

DevAspect.addRuntime(DevPreviewMain);
