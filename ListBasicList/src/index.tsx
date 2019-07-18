import {
  Form,
} from 'antd';
import React, { Component } from 'react';

import { Dispatch } from 'redux';
import { FormComponentProps } from 'antd/es/form';
import { StateType } from './model';
import { BasicListItemDataType } from './data.d';




interface PAGE_NAME_UPPER_CAMEL_CASEProps extends FormComponentProps {
  BLOCK_NAME_CAMEL_CASE: StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}
interface PAGE_NAME_UPPER_CAMEL_CASEState {
  visible: boolean;
  done: boolean;
  current?: Partial<BasicListItemDataType>;
}

class PAGE_NAME_UPPER_CAMEL_CASE extends Component<
  PAGE_NAME_UPPER_CAMEL_CASEProps,
  PAGE_NAME_UPPER_CAMEL_CASEState
> {

  render() {
    return (
      <>
      <div>
        这是一个测试页面
      </div>
        
      </>
    );
  }
}

export default Form.create<PAGE_NAME_UPPER_CAMEL_CASEProps>()(PAGE_NAME_UPPER_CAMEL_CASE);
