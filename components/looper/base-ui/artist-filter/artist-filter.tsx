import React, { ReactNode } from 'react';

export type ArtistFilterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ArtistFilter({ children }: ArtistFilterProps) {
  return (
    <div>
      {children}
    </div>
  );
}
