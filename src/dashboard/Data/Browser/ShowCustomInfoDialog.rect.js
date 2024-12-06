/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import Label from 'components/Label/Label.react';
import Modal from 'components/Modal/Modal.react';
import React from 'react';

export default class ShowCustomInfoDialog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Modal
        type={Modal.Types.INFO}
        icon="warn-outline"
        title={'Custom column info'}
        confirmText="Okay"
        showCancel={false}
        onConfirm={this.props.onConfirm}
        textModal={true}
      >
        <Label text={this.props.contentText} />
      </Modal>
    );
  }
}
