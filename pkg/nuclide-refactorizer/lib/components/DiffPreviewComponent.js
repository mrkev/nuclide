/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {DiffPreviewPhase} from '../types';

import FileChanges from '../../../nuclide-ui/FileChanges';
import * as React from 'react';

type Props = {
  phase: DiffPreviewPhase,
};

export class DiffPreviewComponent extends React.Component<Props> {
  render(): React.Node {
    const {diffs} = this.props.phase;
    return (
      <div>{diffs.map((diff, i) => <FileChanges key={i} diff={diff} />)}</div>
    );
  }
}
