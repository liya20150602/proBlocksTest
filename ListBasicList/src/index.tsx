import {
  Form,
} from 'antd';
import React, { Component } from 'react';
import { FormComponentProps } from 'antd/es/form';
import { BasicListItemDataType } from './data.d';




interface interfaceTest extends FormComponentProps {
  loading: boolean;
}
interface pageName {
  visible: boolean;
  done: boolean;
  current?: Partial<BasicListItemDataType>;
}

class PAGE_NAME_UPPER_CAMEL_CASE extends Component<
  interfaceTest,
  pageName
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

export default Form.create<interfaceTest>()(PAGE_NAME_UPPER_CAMEL_CASE);
