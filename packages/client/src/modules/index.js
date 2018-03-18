import editor from './editor';
import provider from './provider';
import component from './component';
import counter from './counter';
import post from './post';
import upload from './upload';
import user from './user';
import subscription from './subscription';
import contact from './contact';
import pageNotFound from './pageNotFound';
import './favicon';

import Feature from './connector';

export default new Feature(
  editor,
  provider,
  component,
  counter,
  post,
  upload,
  user,
  subscription,
  contact,
  pageNotFound
);
