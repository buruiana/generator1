import editor from './editor';
import provider from './provider';
import component from './component';
import counter from './counter';
import post from './post';
import upload from './upload';
import user from './user';
import subscription from './subscription';
import contact from './contact';
import mailer from './mailer';
import graphqlTypes from './graphqlTypes';
import apolloEngine from './apolloEngine';
import './debug';

import Feature from './connector';

export default new Feature(
  editor,
  component,
  provider,
  counter,
  post,
  upload,
  user,
  subscription,
  contact,
  mailer,
  graphqlTypes,
  apolloEngine
);
