import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from 'react-router-dom';
import toggleRightBar from '../../utils/toggleRightBar';
type Props = {};

export default function Messages({}: Props) {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      Messages
      {id}
    </div>
  );
}
