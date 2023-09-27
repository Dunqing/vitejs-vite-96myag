import { render } from '@testing-library/react';
import {
  AdminContext,
  ResourceContextProvider,
  TextInput,
  Form,
  FormDataConsumer,
} from 'react-admin';

import { PostCreate, PostSpyCreate, TextSpyInput } from './posts';

describe('<Create />', () => {
  it('should render PostCreate', () => {
    render(
      <AdminContext>
        <ResourceContextProvider value="posts">
          <PostCreate />
        </ResourceContextProvider>
      </AdminContext>
    );
  });

  it('should render PostSpyCreate', () => {
    render(
      <AdminContext>
        <ResourceContextProvider value="posts">
          <PostSpyCreate />
        </ResourceContextProvider>
      </AdminContext>
    );
  });

  it('should render TextInput', () => {
    render(
      <AdminContext>
        <Form>
          <TextInput source="title" />
          <FormDataConsumer>
            {({ formData }) => JSON.stringify(formData)}
          </FormDataConsumer>
        </Form>
      </AdminContext>
    );
  });

  it('should render TextSpyInput', () => {
    render(
      <AdminContext>
        <Form>
          <TextSpyInput source="title" />
        </Form>
      </AdminContext>
    );
  });
});
